import * as Bluebird from 'bluebird';
import {NetworkManager} from '../../nm';

export default {
	'connect-network': {
		method: 'POST',
		handler: async (nm: NetworkManager, req: any, res: any) => {
			try {
				const connection = req.body.value;
				await nm.connectNetwork(connection);
				res.status(200).json(connection);
			} catch (err) {
				res.status(err.code).json(err);
			}
			return Bluebird.resolve();
		},
	},
	'list-nearby-networks': {
		method: 'GET',
		handler: async (nm: NetworkManager, req: any, res: any) => {
			try {
				const networks = await nm.listNearbyNetworks();
				res.status(200).json(networks);
			} catch (err) {
				res.status(err.code).json(err);
			}
			return Bluebird.resolve();
		},
	},
	'current-network': {
		method: 'GET',
		handler: async (nm: NetworkManager, req: any, res: any) => {
			try {
				const ssid = await nm.getCurrentNetwork();
				res.status(200).json(ssid);
			} catch (err) {
				res.status(err.code).json(err);
			}
			return Bluebird.resolve();
		},
	},
	'forget-network': {
		method: 'POST',
		handler: async (nm: NetworkManager, req: any, res: any) => {
			try {
				const network = req.body.value;
				await nm.forgetNetwork(network);
				res.status(200).json(network);
			} catch (err) {
				return res.status(err.code).json(err);
			}
			return Bluebird.resolve();
		},
	},
	'toggle-wifi': {
		method: 'POST',
		handler: async (nm: NetworkManager, req: any, res: any) => {
			try {
				const value = req.body.value;
				const newValue = await nm.toggleWifi(value);
				res.status(200).json({value: newValue});
			} catch (err) {
				res.status(err.code).json(err);
			}
			return Bluebird.resolve();
		},
	},
	'get-wifi-active': {
		method: 'GET',
		handler: async (nm: NetworkManager, req: any, res: any) => {
			try {
				const {State} = await nm.getDeviceStatus(nm.devices.wifi);
				const active = State && (State !== NetworkManager.DEVICE_STATE.DISCONNECTED);
				res.status(200).json({active});
			} catch (err) {
				res.status(err.code).json(err);
			}
			return Bluebird.resolve();
		},
	},
};
