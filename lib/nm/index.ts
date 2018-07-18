/*
 * Copyright 2018 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Bluebird from 'bluebird';
import * as dbus from 'dbus-native';
import * as _ from 'lodash';
import {NetworkManagerTypes} from './types';

const systemBus: any = dbus.systemBus();
const service: string[] = [ 'org', 'freedesktop', 'NetworkManager' ];

export class NetworkManagerError extends Error {
	code: string;
	data: any;
	message: string;

	constructor(message) {
		super(message);
	}
}

export interface Device {
	path: string;
	DeviceType: number;
}

export interface AccessPoint {
	path: string;
	Ssid: string;
}

export class NetworkManager extends NetworkManagerTypes {
	accessPoints: any[];
	wifiActive: boolean;
	devices: {
		wifi: Device;
	};

	constructor() {
		super();

		this.devices = {
			wifi: {
				path: '',
				DeviceType: 0,
			},
		};
	}

	init() {
		return this.getWifiDevice()
		.then(() => {
			return this;
		});
	}

	getBus() {
		return systemBus;
	}

	toggleWifi = async (value) => {
		try {
			let success = false;
			if (value) {
				success = await this.connectDevice(this.devices.wifi.path);
			} else {
				success = await this.disconnectDevice(this.devices.wifi.path);
			}
			return success;
		} catch (err) {
			throw formatError(500, `Could not toggleWifi`, err);
		}
	}

	callMethod = (path: string[]|string = []) => (iface: string[]|string = []) => ([method, signature]: [string, string]) => (params: any[] = []): Bluebird<any> => {
		return Bluebird.fromCallback((callback) => {
			const command = {
				path: _.isString(path) ? path : `/${service.concat(path).join('/')}`,
				destination: service.join('.'),
				interface: _.isString(iface) ? iface : service.concat(iface).join('.'),
				member: method,
				signature,
				body: params,
			};
			systemBus.invoke(command, callback);
		});
	}

	getObjectProperty = async ([iface, prop]: [string, string], path) => {
		try {
			const [key, [value]] = await this.callMethod(path)('org.freedesktop.DBus.Properties')(['Get', 'ss'])([iface, prop]);
			return { path, [prop]: value };
		} catch (err) {
			throw formatError(500, `Could not getObjectProperty on ${path}`, err);
		}
	}

	getWifiDevice = async () => {
		try {
			const devices = await this.callMethod()()(['GetDevices', ''])();
			const getDevicesProperty = () => _.map(devices, _.partial(this.getObjectProperty, ['org.freedesktop.NetworkManager.Device', 'DeviceType']));
			const devicesTypes: any[] = await Bluebird.all(getDevicesProperty());
			const wifiDevices: Device[] = _.filter(devicesTypes, ({DeviceType}) => (DeviceType === NetworkManager.DEVICE_TYPE.WIFI));
			this.devices.wifi = wifiDevices[0];
			if (!wifiDevices[0]) {
				throw formatError(404, `Could not find a Wireless Device. Connect one & retry`);
			}
			return this.devices.wifi;
		} catch (err) {
			throw formatError(500, `Could not getWifiDevice`, err);
		}
	}

	getDeviceStatus = async (device: Device) => {
		try {
			const {State} = await _.partial(this.getObjectProperty, ['org.freedesktop.NetworkManager.Device', 'State'])(device.path);
			return State;
		} catch (err) {
			throw formatError(500, `Could not getDeviceStatus`, err);
		}
	}

	connectDevice = (path) => this.callMethod()()(['ActivateConnection', 'ooo'])(['/', path, '/']);

	disconnectDevice = (path) => this.callMethod(path)('org.freedesktop.NetworkManager.Device')(['Disconnect', ''])();

	activateConnection = (params: any) => this.callMethod()()(['ActivateConnection', 'ooo'])(params);

	addConnection = (params: any) => this.callMethod(['Settings'])(['Settings'])(['AddConnection', 'a{sa{sv}}'])([params]);

	deleteConnection = (path) => this.callMethod(path)(['Settings', 'Connection'])(['Delete', ''])();

	requestScan = (params) => this.callMethod(this.devices.wifi.path)('org.freedesktop.NetworkManager.Device.Wireless')(['RequestScan', 'a{sv}'])([params]);

	getActiveConnections = () => this.callMethod()('org.freedesktop.DBus.Properties')(['Get', 'ss'])(['org.freedesktop.NetworkManager', 'ActiveConnections']);

	getConnectionSettings = async (path) => {
		try {
			const value = await this.callMethod(path)(['Settings', 'Connection'])(['GetSettings', ''])();
			return { path, settings: value };
		} catch (err) {
			throw formatError(500, `Could not getConnectionSettings on ${path}`, err);
		}
	};

	connectNetwork = async (network) => {
		try {
			const netMode = _(NetworkManager.MODE_802_11).filter((mode) => mode === network.mode).value();
			const connectionParam = [
				['connection', [
					['id', ['s', network.ssid]],
					['type', ['s', '802-11-wireless']],
				]],
				['802-11-wireless', [
					['ssid', ['ay', [stringToArrayOfBytes(network.ssid)]]],
					['mode', ['s', 'infrastructure']],
				]],
				['802-11-wireless-security', [
					['auth-alg', ['s', 'open']],
					['key-mgmt', ['s', 'wpa-psk']],
					['psk', ['s', network.passphrase]],
				]],
				['ipv4', [
					['method', ['s', 'auto']],
				]],
				['ipv6', [
					['method', ['s', 'auto']],
				]],
			];
			const ap: AccessPoint|any = _.find(this.accessPoints, (props) => {
				return props.Ssid.toString() === network.ssid;
			});
			if (_.isUndefined(ap)) {
				throw formatError(404, `Could not find nearby AccessPoints with SSID: ${network.ssid}`);
			}

			// Check if network's already registered on the device
			const results = await this.listConnections();
			const wifiConnection = findConnection(results, network);
			if (!_.isUndefined(wifiConnection)) {
				return await this.activateConnection([wifiConnection.path, this.devices.wifi.path, '/']);
			}

			const networkSettings = await this.addConnection(connectionParam);
			return await this.activateConnection([networkSettings, this.devices.wifi.path, '/']);
		} catch (err) {
			throw formatError(500, 'Could not connectNetwork', err);
		}
	}

	listConnections = async () => {
		try {
			const connections = await this.callMethod(['Settings'])(['Settings'])(['ListConnections', ''])();
			const getConnectionsSettings = () => _.map(connections, this.getConnectionSettings);
			const results = await Bluebird.all(getConnectionsSettings());
			return results;
		} catch (err) {
			throw formatError(500, `Could not listConnections`, err);
		}
	}

	forgetNetwork = async (network) => {
		try {
			const results = await this.listConnections();
			const wifiConnection = findConnection(results, network);
			await this.deleteConnection(wifiConnection.path);
			return Bluebird.resolve();
		} catch (err) {
			throw formatError(500, `Could not forgetNetwork`, err);
		}
	}

	listNearbyNetworks = async () => {
		try {
			const requestScanParams = [
				['ssids', ['aay', [stringToArrayOfBytes('1')]]],
			];
			await this.requestScan(requestScanParams);
			return this.getAccessPoints(this.devices.wifi.path);
		} catch (err) {
			if (_.isArray(err) && this.ignoreScanStatus(err[0])) {
				return this.getAccessPoints(this.devices.wifi.path);
			}
			throw formatError(500, `Could not listNearbyNetworks`, err);
		}
	}

	ignoreScanStatus = (status) => {
		return status === 'Scanning not allowed while already scanning' ||
			status === 'Scanning not allowed immediately following previous scan' ||
			status === 'Scanning not allowed while unavailable or activating';
	}

	getAccessPoints = async (wifiDevicePath) => {
		const {AccessPoints} = await this.getObjectProperty(['org.freedesktop.NetworkManager.Device.Wireless', 'AccessPoints'], wifiDevicePath);
		const getApsProperties = () => _.map(AccessPoints, this.getApProperties);
		const rawAccessPoints = await Bluebird.all(getApsProperties());
		const accessPoints = _.map(rawAccessPoints, (rawProps: any[]) => {
			const props = _.reduce(rawProps, (acc, prop: any) => {
				return {
					...acc,
					...prop,
				};
			}, {});
			return props;
		});
		this.accessPoints = accessPoints;
		return makeNetworksReadable(this.accessPoints);
	}

	getApProperties = async (path) => {
		try {
			const props = await Bluebird.all([
				this.getObjectProperty(['org.freedesktop.NetworkManager.AccessPoint', 'Ssid'], path),
				this.getObjectProperty(['org.freedesktop.NetworkManager.AccessPoint', 'Flags'], path),
				this.getObjectProperty(['org.freedesktop.NetworkManager.AccessPoint', 'WpaFlags'], path),
				this.getObjectProperty(['org.freedesktop.NetworkManager.AccessPoint', 'RsnFlags'], path),
				this.getObjectProperty(['org.freedesktop.NetworkManager.AccessPoint', 'Frequency'], path),
			]);
			return props;
		} catch (err) {
			throw formatError(500, `Could not get ap ${path} property`, err);
		}
	}

	getCurrentNetwork = async () => {
		try {
			const [key, [connections]] = await this.getActiveConnections();
			const getConnectionsType = () => _.map(connections, _.partial(this.getObjectProperty, ['org.freedesktop.NetworkManager.Connection.Active', 'Type']));
			const results = await Bluebird.all(getConnectionsType());
			const wifiConnection: any = _.filter(results, ({Type}) => Type === '802-11-wireless')[0];
			if (_.isUndefined(wifiConnection)) {
				return;
			}
			const {Id} = await this.getObjectProperty(['org.freedesktop.NetworkManager.Connection.Active', 'Id'], wifiConnection.path);
			return Id;
		} catch (err) {
			if (err === 404) {
				throw formatError(404, 'You\'re not currently connected to a wireless network');
			}
			throw formatError(500, `Could not getCurrentNetwork`, err);
		}
	}
}

function formatError(code: number = 400, message: string, err: any = {}) {
	if (err.code) {
		return err;
	}
	const error = new NetworkManagerError(message);
	error.data = err;
	error.code = String(code);
	console.error(error);
	return error;
}

function findConnection(connections, network) {
	return _.head(_.filter(connections, (result) => {
		const connectionProps = getProp(result.settings, 'connection');
		const [type, [id]] = getProp(connectionProps, 'id');
		return id === network.ssid;
	}));
}

function makeNetworksReadable(rawNetworks) {
	return _.map(rawNetworks, (rawNetwork) => {
		const network: any = _.reduce(rawNetwork, (acc, val, key) => {
			switch (key) {
				case 'Ssid':
					acc[key] = val.toString();
					break;
				case 'Flags':
					const apSec = checkSecurityProps(NetworkManager.AP_802_11S)(val);
					acc[key] = apSec;
					break;
				case 'WpaFlags':
				case 'RsnFlags':
					const props = checkSecurityProps(NetworkManager.AP_802_11_SEC)(val);
					acc[key] = props;
					break;
				case 'Frequency':
					acc[key] = (Math.floor(val/100))/10;
					break;
				default:
					acc[key] = val;
			}
			return acc;
		}, {});
		const newNetwork: any = _.omit(network, ['path', 'Flags', 'WpaFlags', 'RsnFlags']);
		newNetwork.security = {
			open: true,
		};
		if (network.Flags.PRIVACY) {
			newNetwork.security.open = false;

			if (_.isEmpty(network.WpaFlags) && _.isEmpty(network.RsnFlags)) {
				newNetwork.security.encryption = 'wep';
			}

			if (!_.isEmpty(network.WpaFlags)) {
				newNetwork.security.encryption = 'wpa';
			}

			if (!_.isEmpty(network.RsnFlags)) {
				newNetwork.security.encryption = 'wpa2';
			}

			if (network.WpaFlags.KEY_MGMT_802_1X || network.RsnFlags.KEY_MGMT_802_1X) {
				newNetwork.security.encryption = 'enterprise';
			}
		}
		return newNetwork;
	});
}

function checkSecurityProps(nmSecurityTypes) {
	return (prop) => {
		const bitFlagVal = _.reverse((prop).toString(2).split(''));
		const flags = _.pickBy(nmSecurityTypes, (sec, k) => {
			const bitSecVal = _.reverse((sec).toString(2).split(''));
			const check = _.filter(_.map(bitFlagVal, (bit, i) => {
				const active = bit === '1' && bit === bitSecVal[i];
				return {active, k};
			}), 'active')[0];
			return !_.isUndefined(check);
		});
		return flags;
	};
}

function stringToArrayOfBytes(str) {
	const bytes = [];
	for (let i = 0; i < str.length; ++i) {
		bytes.push(str.charCodeAt(i));
	}
	return bytes;
}

function getProp(s, prop) {
	const [ key, value ] = s.find(s => s[0] === prop);
	return value;
}
