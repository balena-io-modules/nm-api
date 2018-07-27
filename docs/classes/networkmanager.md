[nm-api](../README.md) > [NetworkManager](../classes/networkmanager.md)

# Class: NetworkManager

## Hierarchy

 [NetworkManagerTypes](networkmanagertypes.md)

**↳ NetworkManager**

## Index

### Constructors

* [constructor](networkmanager.md#constructor)

### Properties

* [accessPoints](networkmanager.md#accesspoints)
* [devices](networkmanager.md#devices)
* [wifiActive](networkmanager.md#wifiactive)

### Methods

* [activateConnection](networkmanager.md#activateconnection)
* [addConnection](networkmanager.md#addconnection)
* [callMethod](networkmanager.md#callmethod)
* [connectDevice](networkmanager.md#connectdevice)
* [connectNetwork](networkmanager.md#connectnetwork)
* [deleteConnection](networkmanager.md#deleteconnection)
* [disconnectDevice](networkmanager.md#disconnectdevice)
* [forgetNetwork](networkmanager.md#forgetnetwork)
* [getAccessPoints](networkmanager.md#getaccesspoints)
* [getActiveConnections](networkmanager.md#getactiveconnections)
* [getApProperties](networkmanager.md#getapproperties)
* [getBus](networkmanager.md#getbus)
* [getConnectionSettings](networkmanager.md#getconnectionsettings)
* [getCurrentNetwork](networkmanager.md#getcurrentnetwork)
* [getDeviceStatus](networkmanager.md#getdevicestatus)
* [getObjectProperty](networkmanager.md#getobjectproperty)
* [getWifiDevice](networkmanager.md#getwifidevice)
* [ignoreScanStatus](networkmanager.md#ignorescanstatus)
* [init](networkmanager.md#init)
* [listConnections](networkmanager.md#listconnections)
* [listNearbyNetworks](networkmanager.md#listnearbynetworks)
* [requestScan](networkmanager.md#requestscan)
* [toggleWifi](networkmanager.md#togglewifi)

### Object literals

* [ACTIVATION_STATE](networkmanager.md#activation_state)
* [ACTIVE_CONNECTION_STATE](networkmanager.md#active_connection_state)
* [ACTIVE_CONNECTION_STATE_REASON](networkmanager.md#active_connection_state_reason)
* [AP_802_11S](networkmanager.md#ap_802_11s)
* [AP_802_11_SEC](networkmanager.md#ap_802_11_sec)
* [BT_CAPABILITY](networkmanager.md#bt_capability)
* [CAPABILITY](networkmanager.md#capability)
* [CHECKPOINT_CREATE](networkmanager.md#checkpoint_create)
* [CONNECTIVITY](networkmanager.md#connectivity)
* [DEVICE_CAP](networkmanager.md#device_cap)
* [DEVICE_MODEM_CAPABILITY](networkmanager.md#device_modem_capability)
* [DEVICE_STATE](networkmanager.md#device_state)
* [DEVICE_STATE_REASON](networkmanager.md#device_state_reason)
* [DEVICE_TYPE](networkmanager.md#device_type)
* [IP_TUNNEL_MODE](networkmanager.md#ip_tunnel_mode)
* [METERED](networkmanager.md#metered)
* [MODE_802_11](networkmanager.md#mode_802_11)
* [ROLLBACK_RESULT](networkmanager.md#rollback_result)
* [SECRET_AGENT_CAPABILITY](networkmanager.md#secret_agent_capability)
* [SECRET_AGENT_GET_SECRETS](networkmanager.md#secret_agent_get_secrets)
* [SETTINGS_UPDATE2](networkmanager.md#settings_update2)
* [STATE](networkmanager.md#state)
* [WIFI_DEVICE_CAP](networkmanager.md#wifi_device_cap)
* [WIMAX_NSP_NETWORK_TYPE](networkmanager.md#wimax_nsp_network_type)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NetworkManager**(): [NetworkManager](networkmanager.md)

*Defined in [nm/index.ts:61](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L61)*

**Returns:** [NetworkManager](networkmanager.md)

___

## Properties

<a id="accesspoints"></a>

###  accessPoints

**● accessPoints**: *`any`[]*

*Defined in [nm/index.ts:49](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L49)*

List of all current found nearby AccessPoints

___
<a id="devices"></a>

###  devices

**● devices**: *`object`*

*Defined in [nm/index.ts:59](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L59)*

Registered Devices

#### Type declaration

 wifi: [Device](../interfaces/device.md)

___
<a id="wifiactive"></a>

###  wifiActive

**● wifiActive**: *`boolean`*

*Defined in [nm/index.ts:54](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L54)*

Flag to identify wether the WiFi is enabled/disabled

___

## Methods

<a id="activateconnection"></a>

###  activateConnection

▸ **activateConnection**(params: *`any`*): `Bluebird`<`any`>

*Defined in [nm/index.ts:185](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L185)*

Activate a given Connection

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `any` |

**Returns:** `Bluebird`<`any`>

___
<a id="addconnection"></a>

###  addConnection

▸ **addConnection**(params: *`any`*): `Bluebird`<`any`>

*Defined in [nm/index.ts:190](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L190)*

Add a new Connectionn

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `any` |

**Returns:** `Bluebird`<`any`>

___
<a id="callmethod"></a>

###  callMethod

▸ **callMethod**(path?: * `string`[] &#124; `string`*): `(Anonymous function)`

*Defined in [nm/index.ts:115](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L115)*

Call a DBUS NetworkManager object's interface method

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` path |  `string`[] &#124; `string`|  [] |

**Returns:** `(Anonymous function)`

___
<a id="connectdevice"></a>

###  connectDevice

▸ **connectDevice**(path: *`any`*): `Bluebird`<`any`>

*Defined in [nm/index.ts:175](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L175)*

Activate a network Device with the first available connection

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `any` |

**Returns:** `Bluebird`<`any`>

___
<a id="connectnetwork"></a>

###  connectNetwork

▸ **connectNetwork**(network: *`any`*): `Promise`<`any`>

*Defined in [nm/index.ts:222](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L222)*

Connect to a network with SSID/Passphrase

**Parameters:**

| Param | Type |
| ------ | ------ |
| network | `any` |

**Returns:** `Promise`<`any`>

___
<a id="deleteconnection"></a>

###  deleteConnection

▸ **deleteConnection**(path: *`any`*): `Bluebird`<`any`>

*Defined in [nm/index.ts:195](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L195)*

Delete a Connection

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `any` |

**Returns:** `Bluebird`<`any`>

___
<a id="disconnectdevice"></a>

###  disconnectDevice

▸ **disconnectDevice**(path: *`any`*): `Bluebird`<`any`>

*Defined in [nm/index.ts:180](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L180)*

Disconnect a network Device

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `any` |

**Returns:** `Bluebird`<`any`>

___
<a id="forgetnetwork"></a>

###  forgetNetwork

▸ **forgetNetwork**(network: *`any`*): `Promise`<`void`>

*Defined in [nm/index.ts:284](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L284)*

Forget a registered network with SSID

**Parameters:**

| Param | Type |
| ------ | ------ |
| network | `any` |

**Returns:** `Promise`<`void`>

___
<a id="getaccesspoints"></a>

###  getAccessPoints

▸ **getAccessPoints**(wifiDevicePath: *`any`*): `Promise`<`any`[]>

*Defined in [nm/index.ts:328](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L328)*

Get the AccessPoints found by a Wireless Device

**Parameters:**

| Param | Type |
| ------ | ------ |
| wifiDevicePath | `any` |

**Returns:** `Promise`<`any`[]>

___
<a id="getactiveconnections"></a>

###  getActiveConnections

▸ **getActiveConnections**(): `Bluebird`<`any`>

*Defined in [nm/index.ts:205](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L205)*

Get the currently active network connections

**Returns:** `Bluebird`<`any`>

___
<a id="getapproperties"></a>

###  getApProperties

▸ **getApProperties**(path: *`any`*): `Promise`<`Object`>

*Defined in [nm/index.ts:348](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L348)*

Get the basic AccessPoint's properties needed to present it to a GUI

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `any` |

**Returns:** `Promise`<`Object`>

___
<a id="getbus"></a>

###  getBus

▸ **getBus**(): `any`

*Defined in [nm/index.ts:87](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L87)*

Return the connection to DBUS system bus

**Returns:** `any`

___
<a id="getconnectionsettings"></a>

###  getConnectionSettings

▸ **getConnectionSettings**(path: *`any`*): `Promise`<`object`>

*Defined in [nm/index.ts:210](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L210)*

Get a Connection's Settings

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `any` |

**Returns:** `Promise`<`object`>

___
<a id="getcurrentnetwork"></a>

###  getCurrentNetwork

▸ **getCurrentNetwork**(): `Promise`<`any`>

*Defined in [nm/index.ts:366](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L366)*

Get the currently active Wireless Connection

**Returns:** `Promise`<`any`>

___
<a id="getdevicestatus"></a>

###  getDeviceStatus

▸ **getDeviceStatus**(device: *[Device](../interfaces/device.md)*): `Promise`<`any`>

*Defined in [nm/index.ts:163](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L163)*

Get a network Device status

**Parameters:**

| Param | Type |
| ------ | ------ |
| device | [Device](../interfaces/device.md) |

**Returns:** `Promise`<`any`>

___
<a id="getobjectproperty"></a>

###  getObjectProperty

▸ **getObjectProperty**(__namedParameters: *[`string`, `string`]*, path: *`any`*): `Promise`<`object`>

*Defined in [nm/index.ts:132](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L132)*

Get an object's property

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | [`string`, `string`] |
| path | `any` |

**Returns:** `Promise`<`object`>

___
<a id="getwifidevice"></a>

###  getWifiDevice

▸ **getWifiDevice**(): `Promise`<[Device](../interfaces/device.md)>

*Defined in [nm/index.ts:144](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L144)*

Get the first WiFi Device available

**Returns:** `Promise`<[Device](../interfaces/device.md)>

___
<a id="ignorescanstatus"></a>

###  ignoreScanStatus

▸ **ignoreScanStatus**(status: *`any`*): `boolean`

*Defined in [nm/index.ts:319](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L319)*

Safety check on common errors when using RequestScan repeatedly, which isn't allowed before 3 seconds from the last scan or when a Wireless Device isn't active

**Parameters:**

| Param | Type |
| ------ | ------ |
| status | `any` |

**Returns:** `boolean`

___
<a id="init"></a>

###  init

▸ **init**(): `Promise`<`this`>

*Defined in [nm/index.ts:77](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L77)*

Get the first WiFi Device available then return this service instance

**Returns:** `Promise`<`this`>

___
<a id="listconnections"></a>

###  listConnections

▸ **listConnections**(): `Promise`<`Object`[]>

*Defined in [nm/index.ts:270](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L270)*

List all currently registered Connections

**Returns:** `Promise`<`Object`[]>

___
<a id="listnearbynetworks"></a>

###  listNearbyNetworks

▸ **listNearbyNetworks**(): `Promise`<`any`[]>

*Defined in [nm/index.ts:301](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L301)*

List all neaby networks

**Returns:** `Promise`<`any`[]>

___
<a id="requestscan"></a>

###  requestScan

▸ **requestScan**(params: *`any`*): `Bluebird`<`any`>

*Defined in [nm/index.ts:200](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L200)*

Request a scan on nearby AccessPoint on the current Wireless Device

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `any` |

**Returns:** `Bluebird`<`any`>

___
<a id="togglewifi"></a>

###  toggleWifi

▸ **toggleWifi**(value: *`boolean`*): `Promise`<`boolean`>

*Defined in [nm/index.ts:98](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/index.ts#L98)*

Toggle WiFi device on/off

Activation is currently made by connecting to the first known wireless network

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `boolean` |   |

**Returns:** `Promise`<`boolean`>

___

## Object literals

<a id="activation_state"></a>

### `<Static>` ACTIVATION_STATE

**ACTIVATION_STATE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[ACTIVATION_STATE](networkmanagertypes.md#activation_state)*

*Defined in [nm/types/index.ts:840](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L840)*

NMActivationStateFlags Since: v1.10
*__enum__*: {Number}

<a id="activation_state.ip4_ready"></a>

####  IP4_READY

**● IP4_READY**: *`null`* =  null

*Defined in [nm/types/index.ts:865](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L865)*

IPv4 setting is completed.
*__type__*: {Number}

___
<a id="activation_state.ip6_ready"></a>

####  IP6_READY

**● IP6_READY**: *`null`* =  null

*Defined in [nm/types/index.ts:870](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L870)*

IPv6 setting is completed.
*__type__*: {Number}

___
<a id="activation_state.is_master"></a>

####  IS_MASTER

**● IS_MASTER**: *`null`* =  null

*Defined in [nm/types/index.ts:850](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L850)*

The device is a master.
*__type__*: {Number}

___
<a id="activation_state.is_slave"></a>

####  IS_SLAVE

**● IS_SLAVE**: *`null`* =  null

*Defined in [nm/types/index.ts:855](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L855)*

The device is a slave.
*__type__*: {Number}

___
<a id="activation_state.layer2_ready"></a>

####  LAYER2_READY

**● LAYER2_READY**: *`null`* =  null

*Defined in [nm/types/index.ts:860](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L860)*

Layer2 is activated and ready.
*__type__*: {Number}

___
<a id="activation_state.master_has_slaves"></a>

####  MASTER_HAS_SLAVES

**● MASTER_HAS_SLAVES**: *`null`* =  null

*Defined in [nm/types/index.ts:876](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L876)*

The master has any slave devices attached. This only makes sense if the device is a master.
*__type__*: {Number}

___
<a id="activation_state.none"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:845](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L845)*

An alias for numeric zero, no flags set.
*__type__*: {Number}

___

___
<a id="active_connection_state"></a>

### `<Static>` ACTIVE_CONNECTION_STATE

**ACTIVE_CONNECTION_STATE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[ACTIVE_CONNECTION_STATE](networkmanagertypes.md#active_connection_state)*

*Defined in [nm/types/index.ts:595](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L595)*

NMActiveConnectionState NOTE: NMActiveConnectionState values indicate the state of a connection to a specific network while it is starting, connected, or disconnecting from that network.
*__enum__*: {Number}

<a id="active_connection_state.activated"></a>

####  ACTIVATED

**● ACTIVATED**: *`number`* = 2

*Defined in [nm/types/index.ts:601](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L601)*

There is a connection to the network

___
<a id="active_connection_state.activating"></a>

####  ACTIVATING

**● ACTIVATING**: *`number`* = 1

*Defined in [nm/types/index.ts:599](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L599)*

A network connection is being prepared

___
<a id="active_connection_state.deactivated"></a>

####  DEACTIVATED

**● DEACTIVATED**: *`number`* = 4

*Defined in [nm/types/index.ts:605](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L605)*

The network connection is disconnected and will be removed

___
<a id="active_connection_state.deactivating"></a>

####  DEACTIVATING

**● DEACTIVATING**: *`number`* = 3

*Defined in [nm/types/index.ts:603](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L603)*

The network connection is being torn down and cleaned up

___
<a id="active_connection_state.unknown"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:597](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L597)*

The state of the connection is unknown

___

___
<a id="active_connection_state_reason"></a>

### `<Static>` ACTIVE_CONNECTION_STATE_REASON

**ACTIVE_CONNECTION_STATE_REASON**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[ACTIVE_CONNECTION_STATE_REASON](networkmanagertypes.md#active_connection_state_reason)*

*Defined in [nm/types/index.ts:613](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L613)*

NMActiveConnectionStateReason Since: v1.8
*__enum__*: {Number}

<a id="active_connection_state_reason.connection_removed"></a>

####  CONNECTION_REMOVED

**● CONNECTION_REMOVED**: *`number`* = 11

*Defined in [nm/types/index.ts:673](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L673)*

The connection was deleted from settings.
*__type__*: {Number}

___
<a id="active_connection_state_reason.connect_timeout"></a>

####  CONNECT_TIMEOUT

**● CONNECT_TIMEOUT**: *`number`* = 6

*Defined in [nm/types/index.ts:648](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L648)*

The connection attempt to the VPN service timed out.
*__type__*: {Number}

___
<a id="active_connection_state_reason.dependency_failed"></a>

####  DEPENDENCY_FAILED

**● DEPENDENCY_FAILED**: *`number`* = 12

*Defined in [nm/types/index.ts:678](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L678)*

Master connection of this connection failed to activate.
*__type__*: {Number}

___
<a id="active_connection_state_reason.device_disconnected"></a>

####  DEVICE_DISCONNECTED

**● DEVICE_DISCONNECTED**: *`number`* = 3

*Defined in [nm/types/index.ts:633](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L633)*

The active connection changed state because the device it was using was disconnected.
*__type__*: {Number}

___
<a id="active_connection_state_reason.device_realize_failed"></a>

####  DEVICE_REALIZE_FAILED

**● DEVICE_REALIZE_FAILED**: *`number`* = 13

*Defined in [nm/types/index.ts:683](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L683)*

Could not create the software device link.
*__type__*: {Number}

___
<a id="active_connection_state_reason.device_removed"></a>

####  DEVICE_REMOVED

**● DEVICE_REMOVED**: *`number`* = 14

*Defined in [nm/types/index.ts:688](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L688)*

The device this connection depended on disappeared.
*__type__*: {Number}

___
<a id="active_connection_state_reason.ip_config_invalid"></a>

####  IP_CONFIG_INVALID

**● IP_CONFIG_INVALID**: *`number`* = 5

*Defined in [nm/types/index.ts:643](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L643)*

The IP config of the active connection was invalid.
*__type__*: {Number}

___
<a id="active_connection_state_reason.login_failed"></a>

####  LOGIN_FAILED

**● LOGIN_FAILED**: *`number`* = 10

*Defined in [nm/types/index.ts:668](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L668)*

Authentication to the server failed.
*__type__*: {Number}

___
<a id="active_connection_state_reason.none-1"></a>

####  NONE

**● NONE**: *`number`* = 1

*Defined in [nm/types/index.ts:623](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L623)*

No reason was given for the active connection state change.
*__type__*: {Number}

___
<a id="active_connection_state_reason.no_secrets"></a>

####  NO_SECRETS

**● NO_SECRETS**: *`number`* = 9

*Defined in [nm/types/index.ts:663](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L663)*

Necessary secrets for the connection were not provided.
*__type__*: {Number}

___
<a id="active_connection_state_reason.service_start_failed"></a>

####  SERVICE_START_FAILED

**● SERVICE_START_FAILED**: *`number`* = 8

*Defined in [nm/types/index.ts:658](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L658)*

Starting the service providing the VPN connection failed.
*__type__*: {Number}

___
<a id="active_connection_state_reason.service_start_timeout"></a>

####  SERVICE_START_TIMEOUT

**● SERVICE_START_TIMEOUT**: *`number`* = 7

*Defined in [nm/types/index.ts:653](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L653)*

A timeout occurred while starting the service providing the VPN connection.
*__type__*: {Number}

___
<a id="active_connection_state_reason.service_stopped"></a>

####  SERVICE_STOPPED

**● SERVICE_STOPPED**: *`number`* = 4

*Defined in [nm/types/index.ts:638](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L638)*

The service providing the VPN connection was stopped.
*__type__*: {Number}

___
<a id="active_connection_state_reason.unknown-1"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:618](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L618)*

The reason for the active connection state change is unknown.
*__type__*: {Number}

___
<a id="active_connection_state_reason.user_disconnected"></a>

####  USER_DISCONNECTED

**● USER_DISCONNECTED**: *`number`* = 2

*Defined in [nm/types/index.ts:628](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L628)*

The active connection changed state because the user disconnected it.
*__type__*: {Number}

___

___
<a id="ap_802_11s"></a>

### `<Static>` AP_802_11S

**AP_802_11S**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[AP_802_11S](networkmanagertypes.md#ap_802_11s)*

*Defined in [nm/types/index.ts:222](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L222)*

NM80211ApFlags
*__enum__*: {Number}

<a id="ap_802_11s.none-2"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:224](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L224)*

Access point has no special capabilities

___
<a id="ap_802_11s.privacy"></a>

####  PRIVACY

**● PRIVACY**: *`number`* = 1

*Defined in [nm/types/index.ts:226](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L226)*

Access point requires authentication and encryption (usually means WEP)

___
<a id="ap_802_11s.wps"></a>

####  WPS

**● WPS**: *`number`* = 2

*Defined in [nm/types/index.ts:228](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L228)*

Access point supports some WPS method

___
<a id="ap_802_11s.wps_pbc"></a>

####  WPS_PBC

**● WPS_PBC**: *`number`* = 4

*Defined in [nm/types/index.ts:230](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L230)*

Access point supports push-button WPS

___
<a id="ap_802_11s.wps_pin"></a>

####  WPS_PIN

**● WPS_PIN**: *`number`* = 8

*Defined in [nm/types/index.ts:232](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L232)*

Access point supports PIN-based WPS

___

___
<a id="ap_802_11_sec"></a>

### `<Static>` AP_802_11_SEC

**AP_802_11_SEC**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[AP_802_11_SEC](networkmanagertypes.md#ap_802_11_sec)*

*Defined in [nm/types/index.ts:241](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L241)*

NM80211ApSecurityFlags
*__enum__*: {Number}

*__description__*: current security requirements of an access point as determined from the access point's beacon

<a id="ap_802_11_sec.group_ccmp"></a>

####  GROUP_CCMP

**● GROUP_CCMP**: *`number`* = 128

*Defined in [nm/types/index.ts:259](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L259)*

AES/CCMP is supported for group/broadcast encryption

___
<a id="ap_802_11_sec.group_tkip"></a>

####  GROUP_TKIP

**● GROUP_TKIP**: *`number`* = 64

*Defined in [nm/types/index.ts:257](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L257)*

TKIP is supported for group/broadcast encryption

___
<a id="ap_802_11_sec.group_wep104"></a>

####  GROUP_WEP104

**● GROUP_WEP104**: *`number`* = 32

*Defined in [nm/types/index.ts:255](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L255)*

104/128-bit WEP is supported for group/broadcast encryption

___
<a id="ap_802_11_sec.group_wep40"></a>

####  GROUP_WEP40

**● GROUP_WEP40**: *`number`* = 16

*Defined in [nm/types/index.ts:253](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L253)*

40/64-bit WEP is supported for group/broadcast encryption

___
<a id="ap_802_11_sec.key_mgmt_802_1x"></a>

####  KEY_MGMT_802_1X

**● KEY_MGMT_802_1X**: *`number`* = 512

*Defined in [nm/types/index.ts:263](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L263)*

802.1x authentication and key management is supported

___
<a id="ap_802_11_sec.key_mgmt_psk"></a>

####  KEY_MGMT_PSK

**● KEY_MGMT_PSK**: *`number`* = 256

*Defined in [nm/types/index.ts:261](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L261)*

WPA/RSN Pre-Shared Key encryption is supported

___
<a id="ap_802_11_sec.none-3"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:243](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L243)*

The access point has no special security requirements

___
<a id="ap_802_11_sec.pair_ccmp"></a>

####  PAIR_CCMP

**● PAIR_CCMP**: *`number`* = 8

*Defined in [nm/types/index.ts:251](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L251)*

AES/CCMP is supported for pairwise/unicast encryption

___
<a id="ap_802_11_sec.pair_tkip"></a>

####  PAIR_TKIP

**● PAIR_TKIP**: *`number`* = 4

*Defined in [nm/types/index.ts:249](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L249)*

TKIP is supported for pairwise/unicast encryption

___
<a id="ap_802_11_sec.pair_wep104"></a>

####  PAIR_WEP104

**● PAIR_WEP104**: *`number`* = 2

*Defined in [nm/types/index.ts:247](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L247)*

104/128-bit WEP is supported for pairwise/unicast encryption

___
<a id="ap_802_11_sec.pair_wep40"></a>

####  PAIR_WEP40

**● PAIR_WEP40**: *`number`* = 1

*Defined in [nm/types/index.ts:245](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L245)*

40/64-bit WEP is supported for pairwise/unicast encryption

___

___
<a id="bt_capability"></a>

### `<Static>` BT_CAPABILITY

**BT_CAPABILITY**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[BT_CAPABILITY](networkmanagertypes.md#bt_capability)*

*Defined in [nm/types/index.ts:300](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L300)*

NMBluetoothCapabilities
*__enum__*: {Number}

*__description__*: Usable capabilities of a Bluetooth device

<a id="bt_capability.dun"></a>

####  DUN

**● DUN**: *`number`* = 1

*Defined in [nm/types/index.ts:304](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L304)*

Device provides Dial-Up Networking capability

___
<a id="bt_capability.nap"></a>

####  NAP

**● NAP**: *`number`* = 2

*Defined in [nm/types/index.ts:306](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L306)*

Device provides Network Access Point capability

___
<a id="bt_capability.none-4"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:302](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L302)*

Device has no usable capabilities

___

___
<a id="capability"></a>

### `<Static>` CAPABILITY

**CAPABILITY**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[CAPABILITY](networkmanagertypes.md#capability)*

*Defined in [nm/types/index.ts:25](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L25)*

NMCapability NOTE: The range 0x7000 - 0x7FFF of capabilities is guaranteed not to be used by upstream NetworkManager. It could thus be used for downstream extensions.
*__enum__*: {Number}

<a id="capability.team"></a>

####  TEAM

**● TEAM**: *`number`* = 1

*Defined in [nm/types/index.ts:27](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L27)*

___

___
<a id="checkpoint_create"></a>

### `<Static>` CHECKPOINT_CREATE

**CHECKPOINT_CREATE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[CHECKPOINT_CREATE](networkmanagertypes.md#checkpoint_create)*

*Defined in [nm/types/index.ts:793](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L793)*

NMCheckpointCreateFlags Since: v1.4
*__enum__*: {Number}

<a id="checkpoint_create.delete_new_connections"></a>

####  DELETE_NEW_CONNECTIONS

**● DELETE_NEW_CONNECTIONS**: *`number`* = 2

*Defined in [nm/types/index.ts:810](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L810)*

Upon rollback, delete any new connection added after the checkpoint Since: v1.6
*__type__*: {Number}

___
<a id="checkpoint_create.destroy_all"></a>

####  DESTROY_ALL

**● DESTROY_ALL**: *`number`* = 1

*Defined in [nm/types/index.ts:804](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L804)*

When creating a new checkpoint, destroy all existing ones.
*__type__*: {Number}

___
<a id="checkpoint_create.disconnect_new_devices"></a>

####  DISCONNECT_NEW_DEVICES

**● DISCONNECT_NEW_DEVICES**: *`number`* = 4

*Defined in [nm/types/index.ts:816](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L816)*

Upon rollback, disconnect any new device appeared after the checkpoint Since: v1.6
*__type__*: {Number}

___
<a id="checkpoint_create.none-5"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:798](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L798)*

No flags
*__type__*: {Number}

___

___
<a id="connectivity"></a>

### `<Static>` CONNECTIVITY

**CONNECTIVITY**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[CONNECTIVITY](networkmanagertypes.md#connectivity)*

*Defined in [nm/types/index.ts:79](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L79)*

NMConnectivityState
*__enum__*: {Number}

<a id="connectivity.full"></a>

####  FULL

**● FULL**: *`number`* = 4

*Defined in [nm/types/index.ts:103](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L103)*

Host is connected to a network, and able to reach the full Internet

___
<a id="connectivity.limited"></a>

####  LIMITED

**● LIMITED**: *`number`* = 3

*Defined in [nm/types/index.ts:98](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L98)*

Host is connected to a network, not able to reach the full Internet, but a captive portal has not been detected

___
<a id="connectivity.none-6"></a>

####  NONE

**● NONE**: *`number`* = 1

*Defined in [nm/types/index.ts:88](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L88)*

Host is not connected to any network

___
<a id="connectivity.portal"></a>

####  PORTAL

**● PORTAL**: *`number`* = 2

*Defined in [nm/types/index.ts:92](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L92)*

Internet connection is hijacked by a captive portal gateway

___
<a id="connectivity.unknown-2"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:84](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L84)*

Network connectivity is unknown; Connectivity checks disabled, or not run yet

___

___
<a id="device_cap"></a>

### `<Static>` DEVICE_CAP

**DEVICE_CAP**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[DEVICE_CAP](networkmanagertypes.md#device_cap)*

*Defined in [nm/types/index.ts:174](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L174)*

NMDeviceCapabilities
*__enum__*: {Number}

<a id="device_cap.carrier_detect"></a>

####  CARRIER_DETECT

**● CARRIER_DETECT**: *`number`* = 2

*Defined in [nm/types/index.ts:180](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L180)*

This device can indicate carrier status

___
<a id="device_cap.is_software"></a>

####  IS_SOFTWARE

**● IS_SOFTWARE**: *`number`* = 3

*Defined in [nm/types/index.ts:182](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L182)*

This device is a software device

___
<a id="device_cap.nm_supported"></a>

####  NM_SUPPORTED

**● NM_SUPPORTED**: *`number`* = 1

*Defined in [nm/types/index.ts:178](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L178)*

NetworkManager supports this device

___
<a id="device_cap.none-7"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:176](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L176)*

Device has no special capabilities

___
<a id="device_cap.sriov"></a>

####  SRIOV

**● SRIOV**: *`number`* = 4

*Defined in [nm/types/index.ts:184](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L184)*

This device supports single-root I/O virtualization

___

___
<a id="device_modem_capability"></a>

### `<Static>` DEVICE_MODEM_CAPABILITY

**DEVICE_MODEM_CAPABILITY**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[DEVICE_MODEM_CAPABILITY](networkmanagertypes.md#device_modem_capability)*

*Defined in [nm/types/index.ts:316](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L316)*

NMDeviceModemCapabilities
*__enum__*: {Number}

*__description__*: Radio access technology families a modem device supports. For more information on the specific access technologies the device supports use the ModemManager D-Bus API

<a id="device_modem_capability.cdma_evdo"></a>

####  CDMA_EVDO

**● CDMA_EVDO**: *`number`* = 2

*Defined in [nm/types/index.ts:322](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L322)*

Modem supports at least one of CDMA 1xRTT, EVDO revision 0, EVDO revision A, or EVDO revision B

___
<a id="device_modem_capability.gsm_umts"></a>

####  GSM_UMTS

**● GSM_UMTS**: *`number`* = 4

*Defined in [nm/types/index.ts:324](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L324)*

Modem supports at least one of GSM, GPRS, EDGE, UMTS, HSDPA, HSUPA, or HSPA+ packet switched data capability

___
<a id="device_modem_capability.lte"></a>

####  LTE

**● LTE**: *`number`* = 8

*Defined in [nm/types/index.ts:326](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L326)*

Modem has LTE data capability

___
<a id="device_modem_capability.none-8"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:318](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L318)*

Modem has no usable capabilities

___
<a id="device_modem_capability.pots"></a>

####  POTS

**● POTS**: *`number`* = 1

*Defined in [nm/types/index.ts:320](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L320)*

Modem uses the analog wired telephone network and is not a wireless/cellular device

___

___
<a id="device_state"></a>

### `<Static>` DEVICE_STATE

**DEVICE_STATE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[DEVICE_STATE](networkmanagertypes.md#device_state)*

*Defined in [nm/types/index.ts:348](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L348)*

NMDeviceState
*__enum__*: {Number}

<a id="device_state.activated-1"></a>

####  ACTIVATED

**● ACTIVATED**: *`number`* = 100

*Defined in [nm/types/index.ts:415](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L415)*

The device has a network connection, either local or global.
*__type__*: {Number}

___
<a id="device_state.config"></a>

####  CONFIG

**● CONFIG**: *`number`* = 50

*Defined in [nm/types/index.ts:385](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L385)*

The device is connecting to the requested network. This may include operations like associating with the WiFi AP, dialing the modem, connecting to the remote Bluetooth device, etc.
*__type__*: {Number}

___
<a id="device_state.deactivating-1"></a>

####  DEACTIVATING

**● DEACTIVATING**: *`number`* = 110

*Defined in [nm/types/index.ts:422](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L422)*

A disconnection from the current network connection was requested, and the device is cleaning up resources used for that connection. The network connection may still be valid.
*__type__*: {Number}

___
<a id="device_state.disconnected"></a>

####  DISCONNECTED

**● DISCONNECTED**: *`number`* = 30

*Defined in [nm/types/index.ts:370](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L370)*

The device can be activated, but is currently idle and not connected to a network.
*__type__*: {Number}

___
<a id="device_state.failed"></a>

####  FAILED

**● FAILED**: *`number`* = 120

*Defined in [nm/types/index.ts:428](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L428)*

The device failed to connect to the requested network and is cleaning up the connection request
*__type__*: {Number}

___
<a id="device_state.ip_check"></a>

####  IP_CHECK

**● IP_CHECK**: *`number`* = 80

*Defined in [nm/types/index.ts:404](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L404)*

The device is checking whether further action is required for the requested network connection. This may include checking whether only local network access is available, whether a captive portal is blocking access to the Internet, etc.
*__type__*: {Number}

___
<a id="device_state.ip_config"></a>

####  IP_CONFIG

**● IP_CONFIG**: *`number`* = 70

*Defined in [nm/types/index.ts:397](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L397)*

The device is requesting IPv4 and/or IPv6 addresses and routing information from the network.
*__type__*: {Number}

___
<a id="device_state.need_auth"></a>

####  NEED_AUTH

**● NEED_AUTH**: *`number`* = 60

*Defined in [nm/types/index.ts:391](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L391)*

The device requires more information to continue connecting to the requested network. This includes secrets like WiFi passphrases, login passwords, PIN codes, etc.
*__type__*: {Number}

___
<a id="device_state.prepare"></a>

####  PREPARE

**● PREPARE**: *`number`* = 40

*Defined in [nm/types/index.ts:378](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L378)*

The device is preparing the connection to the network. This may include operations like changing the MAC address, setting physical link properties, and anything else required to connect to the requested network.
*__type__*: {Number}

___
<a id="device_state.secondaries"></a>

####  SECONDARIES

**● SECONDARIES**: *`number`* = 90

*Defined in [nm/types/index.ts:410](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L410)*

The device is waiting for a secondary connection (like a VPN) which must activated before the device can be activated
*__type__*: {Number}

___
<a id="device_state.unavailable"></a>

####  UNAVAILABLE

**● UNAVAILABLE**: *`number`* = 20

*Defined in [nm/types/index.ts:365](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L365)*

The device is managed by NetworkManager, but is not available for use. Reasons may include the wireless switched off, missing firmware, no ethernet carrier, missing supplicant or modem manager, etc.
*__type__*: {Number}

___
<a id="device_state.unknown-3"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:353](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L353)*

The device's state is unknown
*__type__*: {Number}

___
<a id="device_state.unmanaged"></a>

####  UNMANAGED

**● UNMANAGED**: *`number`* = 10

*Defined in [nm/types/index.ts:358](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L358)*

The device is recognized, but not managed by NetworkManager
*__type__*: {Number}

___

___
<a id="device_state_reason"></a>

### `<Static>` DEVICE_STATE_REASON

**DEVICE_STATE_REASON**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[DEVICE_STATE_REASON](networkmanagertypes.md#device_state_reason)*

*Defined in [nm/types/index.ts:435](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L435)*

NMDeviceStateReason
*__enum__*: {Number}

<a id="device_state_reason.autoip_error"></a>

####  AUTOIP_ERROR

**● AUTOIP_ERROR**: *`number`* = 21

*Defined in [nm/types/index.ts:479](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L479)*

AutoIP service error

___
<a id="device_state_reason.autoip_failed"></a>

####  AUTOIP_FAILED

**● AUTOIP_FAILED**: *`number`* = 22

*Defined in [nm/types/index.ts:481](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L481)*

AutoIP service failed

___
<a id="device_state_reason.autoip_start_failed"></a>

####  AUTOIP_START_FAILED

**● AUTOIP_START_FAILED**: *`number`* = 20

*Defined in [nm/types/index.ts:477](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L477)*

AutoIP service failed to start

___
<a id="device_state_reason.br2684_failed"></a>

####  BR2684_FAILED

**● BR2684_FAILED**: *`number`* = 51

*Defined in [nm/types/index.ts:539](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L539)*

Problem with the RFC 2684 Ethernet over ADSL bridge

___
<a id="device_state_reason.bt_failed"></a>

####  BT_FAILED

**● BT_FAILED**: *`number`* = 44

*Defined in [nm/types/index.ts:525](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L525)*

The Bluetooth connection failed or timed out

___
<a id="device_state_reason.carrier"></a>

####  CARRIER

**● CARRIER**: *`number`* = 40

*Defined in [nm/types/index.ts:517](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L517)*

Carrier/link changed

___
<a id="device_state_reason.config_failed"></a>

####  CONFIG_FAILED

**● CONFIG_FAILED**: *`number`* = 4

*Defined in [nm/types/index.ts:445](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L445)*

The device could not be readied for configuration

___
<a id="device_state_reason.connection_assumed"></a>

####  CONNECTION_ASSUMED

**● CONNECTION_ASSUMED**: *`number`* = 41

*Defined in [nm/types/index.ts:519](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L519)*

The device's existing connection was assumed

___
<a id="device_state_reason.connection_removed-1"></a>

####  CONNECTION_REMOVED

**● CONNECTION_REMOVED**: *`number`* = 38

*Defined in [nm/types/index.ts:513](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L513)*

The device's active connection disappeared

___
<a id="device_state_reason.dcb_fcoe_failed"></a>

####  DCB_FCOE_FAILED

**● DCB_FCOE_FAILED**: *`number`* = 55

*Defined in [nm/types/index.ts:547](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L547)*

DCB or FCoE setup failed

___
<a id="device_state_reason.dependency_failed-1"></a>

####  DEPENDENCY_FAILED

**● DEPENDENCY_FAILED**: *`number`* = 50

*Defined in [nm/types/index.ts:537](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L537)*

A dependency of the connection failed

___
<a id="device_state_reason.dhcp_error"></a>

####  DHCP_ERROR

**● DHCP_ERROR**: *`number`* = 16

*Defined in [nm/types/index.ts:469](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L469)*

DHCP client error

___
<a id="device_state_reason.dhcp_failed"></a>

####  DHCP_FAILED

**● DHCP_FAILED**: *`number`* = 17

*Defined in [nm/types/index.ts:471](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L471)*

DHCP client failed

___
<a id="device_state_reason.dhcp_start_failed"></a>

####  DHCP_START_FAILED

**● DHCP_START_FAILED**: *`number`* = 15

*Defined in [nm/types/index.ts:467](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L467)*

DHCP client failed to start

___
<a id="device_state_reason.firmware_missing"></a>

####  FIRMWARE_MISSING

**● FIRMWARE_MISSING**: *`number`* = 35

*Defined in [nm/types/index.ts:507](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L507)*

Necessary firmware for the device may be missing

___
<a id="device_state_reason.gsm_apn_failed"></a>

####  GSM_APN_FAILED

**● GSM_APN_FAILED**: *`number`* = 29

*Defined in [nm/types/index.ts:495](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L495)*

Failed to select the specified APN

___
<a id="device_state_reason.gsm_pin_check_failed"></a>

####  GSM_PIN_CHECK_FAILED

**● GSM_PIN_CHECK_FAILED**: *`number`* = 34

*Defined in [nm/types/index.ts:505](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L505)*

PIN check failed

___
<a id="device_state_reason.gsm_registration_denied"></a>

####  GSM_REGISTRATION_DENIED

**● GSM_REGISTRATION_DENIED**: *`number`* = 31

*Defined in [nm/types/index.ts:499](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L499)*

Network registration denied

___
<a id="device_state_reason.gsm_registration_failed"></a>

####  GSM_REGISTRATION_FAILED

**● GSM_REGISTRATION_FAILED**: *`number`* = 33

*Defined in [nm/types/index.ts:503](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L503)*

Failed to register with the requested network

___
<a id="device_state_reason.gsm_registration_not_searching"></a>

####  GSM_REGISTRATION_NOT_SEARCHING

**● GSM_REGISTRATION_NOT_SEARCHING**: *`number`* = 30

*Defined in [nm/types/index.ts:497](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L497)*

Not searching for networks

___
<a id="device_state_reason.gsm_registration_timeout"></a>

####  GSM_REGISTRATION_TIMEOUT

**● GSM_REGISTRATION_TIMEOUT**: *`number`* = 32

*Defined in [nm/types/index.ts:501](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L501)*

Network registration timed out

___
<a id="device_state_reason.gsm_sim_not_inserted"></a>

####  GSM_SIM_NOT_INSERTED

**● GSM_SIM_NOT_INSERTED**: *`number`* = 45

*Defined in [nm/types/index.ts:527](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L527)*

GSM Modem's SIM Card not inserted

___
<a id="device_state_reason.gsm_sim_pin_required"></a>

####  GSM_SIM_PIN_REQUIRED

**● GSM_SIM_PIN_REQUIRED**: *`number`* = 46

*Defined in [nm/types/index.ts:529](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L529)*

GSM Modem's SIM Pin required

___
<a id="device_state_reason.gsm_sim_puk_required"></a>

####  GSM_SIM_PUK_REQUIRED

**● GSM_SIM_PUK_REQUIRED**: *`number`* = 47

*Defined in [nm/types/index.ts:531](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L531)*

GSM Modem's SIM Puk required

___
<a id="device_state_reason.gsm_sim_wrong"></a>

####  GSM_SIM_WRONG

**● GSM_SIM_WRONG**: *`number`* = 48

*Defined in [nm/types/index.ts:533](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L533)*

GSM Modem's SIM wrong

___
<a id="device_state_reason.infiniband_mode"></a>

####  INFINIBAND_MODE

**● INFINIBAND_MODE**: *`number`* = 49

*Defined in [nm/types/index.ts:535](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L535)*

InfiniBand device does not support connected mode

___
<a id="device_state_reason.ip_address_duplicate"></a>

####  IP_ADDRESS_DUPLICATE

**● IP_ADDRESS_DUPLICATE**: *`number`* = 64

*Defined in [nm/types/index.ts:565](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L565)*

A duplicate IP address was detected

___
<a id="device_state_reason.ip_config_expired"></a>

####  IP_CONFIG_EXPIRED

**● IP_CONFIG_EXPIRED**: *`number`* = 6

*Defined in [nm/types/index.ts:449](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L449)*

The IP config is no longer valid

___
<a id="device_state_reason.ip_config_unavailable"></a>

####  IP_CONFIG_UNAVAILABLE

**● IP_CONFIG_UNAVAILABLE**: *`number`* = 5

*Defined in [nm/types/index.ts:447](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L447)*

IP configuration could not be reserved (no available address, timeout, etc)

___
<a id="device_state_reason.ip_method_unsupported"></a>

####  IP_METHOD_UNSUPPORTED

**● IP_METHOD_UNSUPPORTED**: *`number`* = 65

*Defined in [nm/types/index.ts:567](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L567)*

The selected IP method is not supported

___
<a id="device_state_reason.modem_available"></a>

####  MODEM_AVAILABLE

**● MODEM_AVAILABLE**: *`number`* = 58

*Defined in [nm/types/index.ts:553](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L553)*

Modem now ready and available

___
<a id="device_state_reason.modem_busy"></a>

####  MODEM_BUSY

**● MODEM_BUSY**: *`number`* = 23

*Defined in [nm/types/index.ts:483](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L483)*

The line is busy

___
<a id="device_state_reason.modem_dial_failed"></a>

####  MODEM_DIAL_FAILED

**● MODEM_DIAL_FAILED**: *`number`* = 27

*Defined in [nm/types/index.ts:491](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L491)*

The dialing attempt failed

___
<a id="device_state_reason.modem_dial_timeout"></a>

####  MODEM_DIAL_TIMEOUT

**● MODEM_DIAL_TIMEOUT**: *`number`* = 26

*Defined in [nm/types/index.ts:489](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L489)*

The dialing request timed out

___
<a id="device_state_reason.modem_failed"></a>

####  MODEM_FAILED

**● MODEM_FAILED**: *`number`* = 57

*Defined in [nm/types/index.ts:551](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L551)*

Modem failed or no longer available

___
<a id="device_state_reason.modem_init_failed"></a>

####  MODEM_INIT_FAILED

**● MODEM_INIT_FAILED**: *`number`* = 28

*Defined in [nm/types/index.ts:493](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L493)*

Modem initialization failed

___
<a id="device_state_reason.modem_manager_unavailable"></a>

####  MODEM_MANAGER_UNAVAILABLE

**● MODEM_MANAGER_UNAVAILABLE**: *`number`* = 52

*Defined in [nm/types/index.ts:541](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L541)*

ModemManager not running

___
<a id="device_state_reason.modem_not_found"></a>

####  MODEM_NOT_FOUND

**● MODEM_NOT_FOUND**: *`number`* = 43

*Defined in [nm/types/index.ts:523](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L523)*

The modem could not be found

___
<a id="device_state_reason.modem_no_carrier"></a>

####  MODEM_NO_CARRIER

**● MODEM_NO_CARRIER**: *`number`* = 25

*Defined in [nm/types/index.ts:487](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L487)*

No carrier could be established

___
<a id="device_state_reason.modem_no_dial_tone"></a>

####  MODEM_NO_DIAL_TONE

**● MODEM_NO_DIAL_TONE**: *`number`* = 24

*Defined in [nm/types/index.ts:485](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L485)*

No dial tone

___
<a id="device_state_reason.new_activation"></a>

####  NEW_ACTIVATION

**● NEW_ACTIVATION**: *`number`* = 60

*Defined in [nm/types/index.ts:557](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L557)*

New connection activation was enqueued

___
<a id="device_state_reason.none-9"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:437](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L437)*

No reason given

___
<a id="device_state_reason.now_managed"></a>

####  NOW_MANAGED

**● NOW_MANAGED**: *`number`* = 2

*Defined in [nm/types/index.ts:441](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L441)*

Device is now managed

___
<a id="device_state_reason.now_unmanaged"></a>

####  NOW_UNMANAGED

**● NOW_UNMANAGED**: *`number`* = 3

*Defined in [nm/types/index.ts:443](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L443)*

Device is now unmanaged

___
<a id="device_state_reason.no_secrets-1"></a>

####  NO_SECRETS

**● NO_SECRETS**: *`number`* = 7

*Defined in [nm/types/index.ts:451](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L451)*

Secrets were required, but not provided

___
<a id="device_state_reason.ovsdb_failed"></a>

####  OVSDB_FAILED

**● OVSDB_FAILED**: *`number`* = 63

*Defined in [nm/types/index.ts:563](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L563)*

Problem communicating with OpenVSwitch database

___
<a id="device_state_reason.parent_changed"></a>

####  PARENT_CHANGED

**● PARENT_CHANGED**: *`number`* = 61

*Defined in [nm/types/index.ts:559](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L559)*

The device's parent changed

___
<a id="device_state_reason.parent_managed_changed"></a>

####  PARENT_MANAGED_CHANGED

**● PARENT_MANAGED_CHANGED**: *`number`* = 62

*Defined in [nm/types/index.ts:561](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L561)*

The device parent's management changed

___
<a id="device_state_reason.ppp_disconnect"></a>

####  PPP_DISCONNECT

**● PPP_DISCONNECT**: *`number`* = 13

*Defined in [nm/types/index.ts:463](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L463)*

PPP service disconnected

___
<a id="device_state_reason.ppp_failed"></a>

####  PPP_FAILED

**● PPP_FAILED**: *`number`* = 14

*Defined in [nm/types/index.ts:465](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L465)*

PPP failed

___
<a id="device_state_reason.ppp_start_failed"></a>

####  PPP_START_FAILED

**● PPP_START_FAILED**: *`number`* = 12

*Defined in [nm/types/index.ts:461](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L461)*

PPP service failed to start

___
<a id="device_state_reason.removed"></a>

####  REMOVED

**● REMOVED**: *`number`* = 36

*Defined in [nm/types/index.ts:509](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L509)*

The device was removed

___
<a id="device_state_reason.secondary_connection_failed"></a>

####  SECONDARY_CONNECTION_FAILED

**● SECONDARY_CONNECTION_FAILED**: *`number`* = 54

*Defined in [nm/types/index.ts:545](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L545)*

A secondary connection of the base connection failed

___
<a id="device_state_reason.shared_failed"></a>

####  SHARED_FAILED

**● SHARED_FAILED**: *`number`* = 19

*Defined in [nm/types/index.ts:475](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L475)*

Shared connection service failed

___
<a id="device_state_reason.shared_start_failed"></a>

####  SHARED_START_FAILED

**● SHARED_START_FAILED**: *`number`* = 18

*Defined in [nm/types/index.ts:473](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L473)*

Shared connection service failed to start

___
<a id="device_state_reason.sim_pin_incorrect"></a>

####  SIM_PIN_INCORRECT

**● SIM_PIN_INCORRECT**: *`number`* = 59

*Defined in [nm/types/index.ts:555](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L555)*

SIM PIN was incorrect

___
<a id="device_state_reason.sleeping"></a>

####  SLEEPING

**● SLEEPING**: *`number`* = 37

*Defined in [nm/types/index.ts:511](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L511)*

NetworkManager went to sleep

___
<a id="device_state_reason.ssid_not_found"></a>

####  SSID_NOT_FOUND

**● SSID_NOT_FOUND**: *`number`* = 53

*Defined in [nm/types/index.ts:543](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L543)*

The WiFi network could not be found

___
<a id="device_state_reason.supplicant_available"></a>

####  SUPPLICANT_AVAILABLE

**● SUPPLICANT_AVAILABLE**: *`number`* = 42

*Defined in [nm/types/index.ts:521](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L521)*

The supplicant is now available

___
<a id="device_state_reason.supplicant_config_failed"></a>

####  SUPPLICANT_CONFIG_FAILED

**● SUPPLICANT_CONFIG_FAILED**: *`number`* = 9

*Defined in [nm/types/index.ts:455](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L455)*

802.1x supplicant configuration failed

___
<a id="device_state_reason.supplicant_disconnect"></a>

####  SUPPLICANT_DISCONNECT

**● SUPPLICANT_DISCONNECT**: *`number`* = 8

*Defined in [nm/types/index.ts:453](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L453)*

802.1x supplicant disconnected

___
<a id="device_state_reason.supplicant_failed"></a>

####  SUPPLICANT_FAILED

**● SUPPLICANT_FAILED**: *`number`* = 10

*Defined in [nm/types/index.ts:457](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L457)*

802.1x supplicant failed

___
<a id="device_state_reason.supplicant_timeout"></a>

####  SUPPLICANT_TIMEOUT

**● SUPPLICANT_TIMEOUT**: *`number`* = 11

*Defined in [nm/types/index.ts:459](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L459)*

802.1x supplicant took too long to authenticate

___
<a id="device_state_reason.teamd_control_failed"></a>

####  TEAMD_CONTROL_FAILED

**● TEAMD_CONTROL_FAILED**: *`number`* = 56

*Defined in [nm/types/index.ts:549](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L549)*

Teamd control failed

___
<a id="device_state_reason.unknown-4"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 1

*Defined in [nm/types/index.ts:439](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L439)*

Unknown error

___
<a id="device_state_reason.user_requested"></a>

####  USER_REQUESTED

**● USER_REQUESTED**: *`number`* = 39

*Defined in [nm/types/index.ts:515](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L515)*

Device disconnected by user or client

___

___
<a id="device_type"></a>

### `<Static>` DEVICE_TYPE

**DEVICE_TYPE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[DEVICE_TYPE](networkmanagertypes.md#device_type)*

*Defined in [nm/types/index.ts:110](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L110)*

NMDeviceType
*__enum__*: {Number}

<a id="device_type.adsl"></a>

####  ADSL

**● ADSL**: *`number`* = 12

*Defined in [nm/types/index.ts:141](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L141)*

ADSL modem

___
<a id="device_type.bond"></a>

####  BOND

**● BOND**: *`number`* = 10

*Defined in [nm/types/index.ts:137](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L137)*

A bond master interface

___
<a id="device_type.bridge"></a>

####  BRIDGE

**● BRIDGE**: *`number`* = 13

*Defined in [nm/types/index.ts:143](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L143)*

A bridge master interface

___
<a id="device_type.bt"></a>

####  BT

**● BT**: *`number`* = 5

*Defined in [nm/types/index.ts:124](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L124)*

A Bluetooth device supporting PAN or DUN access protocols

___
<a id="device_type.dummy"></a>

####  DUMMY

**● DUMMY**: *`number`* = 22

*Defined in [nm/types/index.ts:159](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L159)*

A dummy interface

___
<a id="device_type.ethernet"></a>

####  ETHERNET

**● ETHERNET**: *`number`* = 1

*Defined in [nm/types/index.ts:116](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L116)*

A wired ethernet device

___
<a id="device_type.generic"></a>

####  GENERIC

**● GENERIC**: *`number`* = 14

*Defined in [nm/types/index.ts:114](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L114)*

Generic support for unrecognized device types

___
<a id="device_type.infiniband"></a>

####  INFINIBAND

**● INFINIBAND**: *`number`* = 9

*Defined in [nm/types/index.ts:135](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L135)*

An IP-over-InfiniBand device

___
<a id="device_type.ip_tunnel"></a>

####  IP_TUNNEL

**● IP_TUNNEL**: *`number`* = 17

*Defined in [nm/types/index.ts:149](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L149)*

A IP tunnel interface

___
<a id="device_type.macsec"></a>

####  MACSEC

**● MACSEC**: *`number`* = 21

*Defined in [nm/types/index.ts:157](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L157)*

A MACsec interface

___
<a id="device_type.macvlan"></a>

####  MACVLAN

**● MACVLAN**: *`number`* = 18

*Defined in [nm/types/index.ts:151](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L151)*

A MACVLAN interface

___
<a id="device_type.modem"></a>

####  MODEM

**● MODEM**: *`number`* = 8

*Defined in [nm/types/index.ts:133](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L133)*

A modem supporting analog telephone, CDMA/EVDO, GSM/UMTS, or LTE network access protocols

___
<a id="device_type.olpc_mesh"></a>

####  OLPC_MESH

**● OLPC_MESH**: *`number`* = 6

*Defined in [nm/types/index.ts:126](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L126)*

An OLPC XO mesh networking device

___
<a id="device_type.ovs_bridge"></a>

####  OVS_BRIDGE

**● OVS_BRIDGE**: *`number`* = 26

*Defined in [nm/types/index.ts:167](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L167)*

A OpenVSwitch bridge

___
<a id="device_type.ovs_interface"></a>

####  OVS_INTERFACE

**● OVS_INTERFACE**: *`number`* = 24

*Defined in [nm/types/index.ts:163](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L163)*

A OpenVSwitch interface

___
<a id="device_type.ovs_port"></a>

####  OVS_PORT

**● OVS_PORT**: *`number`* = 25

*Defined in [nm/types/index.ts:165](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L165)*

A OpenVSwitch port

___
<a id="device_type.ppp"></a>

####  PPP

**● PPP**: *`number`* = 23

*Defined in [nm/types/index.ts:161](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L161)*

A PPP interface

___
<a id="device_type.team-1"></a>

####  TEAM

**● TEAM**: *`number`* = 15

*Defined in [nm/types/index.ts:145](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L145)*

A team master interface

___
<a id="device_type.tun"></a>

####  TUN

**● TUN**: *`number`* = 16

*Defined in [nm/types/index.ts:147](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L147)*

A TUN or TAP interface

___
<a id="device_type.unknown-5"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:112](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L112)*

Unknown device

___
<a id="device_type.unused1"></a>

####  UNUSED1

**● UNUSED1**: *`number`* = 3

*Defined in [nm/types/index.ts:120](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L120)*

Not used

___
<a id="device_type.unused2"></a>

####  UNUSED2

**● UNUSED2**: *`number`* = 4

*Defined in [nm/types/index.ts:122](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L122)*

Not used

___
<a id="device_type.veth"></a>

####  VETH

**● VETH**: *`number`* = 20

*Defined in [nm/types/index.ts:155](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L155)*

A VETH interface

___
<a id="device_type.vlan"></a>

####  VLAN

**● VLAN**: *`number`* = 11

*Defined in [nm/types/index.ts:139](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L139)*

An 802.1Q VLAN interface

___
<a id="device_type.vxlan"></a>

####  VXLAN

**● VXLAN**: *`number`* = 19

*Defined in [nm/types/index.ts:153](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L153)*

A VXLAN interface

___
<a id="device_type.wifi-1"></a>

####  WIFI

**● WIFI**: *`number`* = 2

*Defined in [nm/types/index.ts:118](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L118)*

An 802.11 WiFi device

___
<a id="device_type.wimax"></a>

####  WIMAX

**● WIMAX**: *`number`* = 7

*Defined in [nm/types/index.ts:128](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L128)*

An 802.16e Mobile WiMAX broadband device

___

___
<a id="ip_tunnel_mode"></a>

### `<Static>` IP_TUNNEL_MODE

**IP_TUNNEL_MODE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[IP_TUNNEL_MODE](networkmanagertypes.md#ip_tunnel_mode)*

*Defined in [nm/types/index.ts:765](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L765)*

NMIPTunnelMode Since: v1.2
*__enum__*: {Number}

<a id="ip_tunnel_mode.gre"></a>

####  GRE

**● GRE**: *`number`* = 2

*Defined in [nm/types/index.ts:771](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L771)*

GRE tunnel

___
<a id="ip_tunnel_mode.ip6gre"></a>

####  IP6GRE

**● IP6GRE**: *`number`* = 8

*Defined in [nm/types/index.ts:783](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L783)*

IPv6 GRE tunnel

___
<a id="ip_tunnel_mode.ip6ip6"></a>

####  IP6IP6

**● IP6IP6**: *`number`* = 6

*Defined in [nm/types/index.ts:779](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L779)*

IPv6 in IPv6 tunnel

___
<a id="ip_tunnel_mode.ipip"></a>

####  IPIP

**● IPIP**: *`number`* = 1

*Defined in [nm/types/index.ts:769](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L769)*

IP in IP tunnel

___
<a id="ip_tunnel_mode.ipip6"></a>

####  IPIP6

**● IPIP6**: *`number`* = 7

*Defined in [nm/types/index.ts:781](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L781)*

IPv4 in IPv6 tunnel

___
<a id="ip_tunnel_mode.isatap"></a>

####  ISATAP

**● ISATAP**: *`number`* = 4

*Defined in [nm/types/index.ts:775](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L775)*

ISATAP tunnel

___
<a id="ip_tunnel_mode.sit"></a>

####  SIT

**● SIT**: *`number`* = 3

*Defined in [nm/types/index.ts:773](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L773)*

SIT tunnel

___
<a id="ip_tunnel_mode.unknown-6"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:767](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L767)*

Unknown/unset tunnel mode

___
<a id="ip_tunnel_mode.vti"></a>

####  VTI

**● VTI**: *`number`* = 5

*Defined in [nm/types/index.ts:777](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L777)*

VTI tunnel

___
<a id="ip_tunnel_mode.vti6"></a>

####  VTI6

**● VTI6**: *`number`* = 9

*Defined in [nm/types/index.ts:785](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L785)*

IPv6 VTI tunnel

___

___
<a id="metered"></a>

### `<Static>` METERED

**METERED**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[METERED](networkmanagertypes.md#metered)*

*Defined in [nm/types/index.ts:575](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L575)*

NMMetered Since: v1.2
*__enum__*: {Number}

<a id="metered.guess_no"></a>

####  GUESS_NO

**● GUESS_NO**: *`number`* = 4

*Defined in [nm/types/index.ts:585](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L585)*

Not metered, the value was guessed

___
<a id="metered.guess_yes"></a>

####  GUESS_YES

**● GUESS_YES**: *`number`* = 3

*Defined in [nm/types/index.ts:583](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L583)*

Metered, the value was guessed

___
<a id="metered.no"></a>

####  NO

**● NO**: *`number`* = 2

*Defined in [nm/types/index.ts:581](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L581)*

Not metered, the value was statically set

___
<a id="metered.unknown-7"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:577](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L577)*

The metered status is unknown

___
<a id="metered.yes"></a>

####  YES

**● YES**: *`number`* = 1

*Defined in [nm/types/index.ts:579](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L579)*

Metered, the value was statically set

___

___
<a id="mode_802_11"></a>

### `<Static>` MODE_802_11

**MODE_802_11**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[MODE_802_11](networkmanagertypes.md#mode_802_11)*

*Defined in [nm/types/index.ts:271](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L271)*

NM80211Mode
*__enum__*: {Number}

*__description__*: 802.11 mode an access point or device is currently in

<a id="mode_802_11.adhoc"></a>

####  ADHOC

**● ADHOC**: *`number`* = 1

*Defined in [nm/types/index.ts:279](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L279)*

For both devices and access point objects, indicates the object is part of an Ad-Hoc 802.11 network without a central coordinating access point.

___
<a id="mode_802_11.ap"></a>

####  AP

**● AP**: *`number`* = 3

*Defined in [nm/types/index.ts:292](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L292)*

The device is an access point/hotspot. Not valid for access point objects; used only for hotspot mode on the local machine.

___
<a id="mode_802_11.infra"></a>

####  INFRA

**● INFRA**: *`number`* = 2

*Defined in [nm/types/index.ts:286](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L286)*

The device or access point is in infrastructure mode. For devices, this indicates the device is an 802.11 client/station. For access point objects, this indicates the object is an access point that provides connectivity to clients.

___
<a id="mode_802_11.unknown-8"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:273](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L273)*

The device or access point mode is unknown

___

___
<a id="rollback_result"></a>

### `<Static>` ROLLBACK_RESULT

**ROLLBACK_RESULT**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[ROLLBACK_RESULT](networkmanagertypes.md#rollback_result)*

*Defined in [nm/types/index.ts:824](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L824)*

NMRollbackResult Since: v1.4
*__enum__*: {Number}

<a id="rollback_result.err_device_unmanaged"></a>

####  ERR_DEVICE_UNMANAGED

**● ERR_DEVICE_UNMANAGED**: *`number`* = 2

*Defined in [nm/types/index.ts:830](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L830)*

The device is now unmanaged.

___
<a id="rollback_result.err_failed"></a>

####  ERR_FAILED

**● ERR_FAILED**: *`number`* = 3

*Defined in [nm/types/index.ts:832](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L832)*

Other errors during rollback.

___
<a id="rollback_result.err_no_device"></a>

####  ERR_NO_DEVICE

**● ERR_NO_DEVICE**: *`number`* = 1

*Defined in [nm/types/index.ts:828](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L828)*

The device no longer exists.

___
<a id="rollback_result.ok"></a>

####  OK

**● OK**: *`number`* = 0

*Defined in [nm/types/index.ts:826](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L826)*

The rollback succeeded.

___

___
<a id="secret_agent_capability"></a>

### `<Static>` SECRET_AGENT_CAPABILITY

**SECRET_AGENT_CAPABILITY**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[SECRET_AGENT_CAPABILITY](networkmanagertypes.md#secret_agent_capability)*

*Defined in [nm/types/index.ts:747](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L747)*

NMSecretAgentCapabilities NOTE: NMSecretAgentCapabilities indicate various capabilities of the agent
*__enum__*: {Number}

<a id="secret_agent_capability.none-10"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:752](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L752)*

The agent supports no special capabilities
*__type__*: {Number}

___
<a id="secret_agent_capability.vpn_hints"></a>

####  VPN_HINTS

**● VPN_HINTS**: *`number`* = 1

*Defined in [nm/types/index.ts:757](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L757)*

The agent supports passing hints to VPN plugin authentication dialogs.
*__type__*: {Number}

___

___
<a id="secret_agent_get_secrets"></a>

### `<Static>` SECRET_AGENT_GET_SECRETS

**SECRET_AGENT_GET_SECRETS**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[SECRET_AGENT_GET_SECRETS](networkmanagertypes.md#secret_agent_get_secrets)*

*Defined in [nm/types/index.ts:696](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L696)*

NMSecretAgentGetSecretsFlags NOTE: NMSecretAgentGetSecretsFlags values modify the behavior of a GetSecrets request
*__enum__*: {Number}

<a id="secret_agent_get_secrets.allow_interaction"></a>

####  ALLOW_INTERACTION

**● ALLOW_INTERACTION**: *`number`* = 1

*Defined in [nm/types/index.ts:710](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L710)*

Allows the request to interact with the user, possibly prompting via UI for secrets if any are required, or if none are found in persistent storage.
*__type__*: {Number}

___
<a id="secret_agent_get_secrets.none-11"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:703](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L703)*

No special behavior; by default no user interaction is allowed and requests for secrets are fulfilled from persistent storage, or if no secrets are available an error is returned.
*__type__*: {Number}

___
<a id="secret_agent_get_secrets.no_errors"></a>

####  NO_ERRORS

**● NO_ERRORS**: *`number`* = 1073741824

*Defined in [nm/types/index.ts:739](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L739)*

Internal flag, not part of the D-Bus API.
*__type__*: {Number}

___
<a id="secret_agent_get_secrets.only_system"></a>

####  ONLY_SYSTEM

**● ONLY_SYSTEM**: *`number`* = 2147483648

*Defined in [nm/types/index.ts:734](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L734)*

Internal flag, not part of the D-Bus API.
*__type__*: {Number}

___
<a id="secret_agent_get_secrets.request_new"></a>

####  REQUEST_NEW

**● REQUEST_NEW**: *`number`* = 2

*Defined in [nm/types/index.ts:717](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L717)*

Explicitly prompt for new secrets from the user. This flag signals that NetworkManager thinks any existing secrets are invalid or wrong. This flag implies that interaction is allowed.
*__type__*: {Number}

___
<a id="secret_agent_get_secrets.user_requested-1"></a>

####  USER_REQUESTED

**● USER_REQUESTED**: *`number`* = 4

*Defined in [nm/types/index.ts:723](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L723)*

Set if the request was initiated by user-requested action via the D-Bus interface, as opposed to automatically initiated by NetworkManager in response to scan results or carrier changes.
*__type__*: {Number}

___
<a id="secret_agent_get_secrets.wps_pbc_active"></a>

####  WPS_PBC_ACTIVE

**● WPS_PBC_ACTIVE**: *`number`* = 8

*Defined in [nm/types/index.ts:729](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L729)*

Indicates that WPS enrollment is active with PBC method. The agent may suggest that the user pushes a button on the router instead of supplying a PSK.
*__type__*: {Number}

___

___
<a id="settings_update2"></a>

### `<Static>` SETTINGS_UPDATE2

**SETTINGS_UPDATE2**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[SETTINGS_UPDATE2](networkmanagertypes.md#settings_update2)*

*Defined in [nm/types/index.ts:884](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L884)*

NMSettingsUpdate2Flags Since: v1.10.2
*__enum__*: {Number}

<a id="settings_update2.block_autoconnect"></a>

####  BLOCK_AUTOCONNECT

**● BLOCK_AUTOCONNECT**: *`null`* =  null

*Defined in [nm/types/index.ts:942](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L942)*

Usually, when the connection has autoconnect enabled and is modified, it becomes elegible to autoconnect right away. Setting this flag, disables autoconnect until the connection is manually activated.
*__type__*: {Number}

___
<a id="settings_update2.in_memory"></a>

####  IN_MEMORY

**● IN_MEMORY**: *`null`* =  null

*Defined in [nm/types/index.ts:904](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L904)*

To make the connection in-memory only. If the connection was previously persistent, the corresponding file on disk is not deleted but merely the connection is decoupled from the file on disk. If you later delete an in-memory connection, the connection on disk will be deleted as well.
*__type__*: {Number}

___
<a id="settings_update2.in_memory_detached"></a>

####  IN_MEMORY_DETACHED

**● IN_MEMORY_DETACHED**: *`null`* =  null

*Defined in [nm/types/index.ts:917](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L917)*

This is like @NM\_SETTINGS\_UPDATE2\_FLAG\_IN\_MEMORY, but if the connection has a corresponding file on disk, the association between the connection and the file is forgotten but the file is not modified. The difference to %NM\_SETTINGS\_UPDATE2\_FLAG\_IN\_MEMORY is if you later save the connection again to disk, a new file name will be chosen without overwriting the remaining file on disk. Also, if you delete the connection later, the file on disk will not be deleted.
*__type__*: {Number}

___
<a id="settings_update2.in_memory_only"></a>

####  IN_MEMORY_ONLY

**● IN_MEMORY_ONLY**: *`null`* =  null

*Defined in [nm/types/index.ts:924](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L924)*

This is like @NM\_SETTINGS\_UPDATE2\_FLAG\_IN_MEMORY, but if the connection has a corresponding file on disk, the file on disk will be deleted.
*__type__*: {Number}

___
<a id="settings_update2.none-12"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:889](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L889)*

An alias for numeric zero, no flags set.
*__type__*: {Number}

___
<a id="settings_update2.to_disk"></a>

####  TO_DISK

**● TO_DISK**: *`null`* =  null

*Defined in [nm/types/index.ts:894](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L894)*

To persist the connection to disk.
*__type__*: {Number}

___
<a id="settings_update2.volatile"></a>

####  VOLATILE

**● VOLATILE**: *`null`* =  null

*Defined in [nm/types/index.ts:935](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L935)*

This can be specified with either %NM\_SETTINGS\_UPDATE2\_FLAG\_IN\_MEMORY\_DETACHED or %NM\_SETTINGS\_UPDATE2\_FLAG\_IN\_MEMORY\_ONLY. After making the connection in-memory only, the connection is marked as volatile. That means, if the connection is currently not active it will be deleted right away. Otherwise, it is marked to for deletion once the connection deactivates. A volatile connection cannot autoactivate again (because it's about to be deleted), but a manual activation will clear the volatile flag.
*__type__*: {Number}

___

___
<a id="state"></a>

### `<Static>` STATE

**STATE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[STATE](networkmanagertypes.md#state)*

*Defined in [nm/types/index.ts:34](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L34)*

NMState
*__enum__*: {Number}

<a id="state.asleep"></a>

####  ASLEEP

**● ASLEEP**: *`number`* = 10

*Defined in [nm/types/index.ts:44](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L44)*

Networking is not enabled; System is being suspended or resumed

___
<a id="state.connected_global"></a>

####  CONNECTED_GLOBAL

**● CONNECTED_GLOBAL**: *`number`* = 70

*Defined in [nm/types/index.ts:72](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L72)*

Global IPv4 and/or IPv6 Internet connectivity

___
<a id="state.connected_local"></a>

####  CONNECTED_LOCAL

**● CONNECTED_LOCAL**: *`number`* = 50

*Defined in [nm/types/index.ts:62](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L62)*

Only local IPv4 and/or IPv6 connectivity, but no default route to access the Internet

___
<a id="state.connected_site"></a>

####  CONNECTED_SITE

**● CONNECTED_SITE**: *`number`* = 60

*Defined in [nm/types/index.ts:68](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L68)*

Only site-wide IPv4 and/or IPv6 connectivity; Means a default route is available, but the Internet connectivity check did not succeed

___
<a id="state.connecting"></a>

####  CONNECTING

**● CONNECTING**: *`number`* = 40

*Defined in [nm/types/index.ts:57](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L57)*

Network connection is being started

___
<a id="state.disconnected-1"></a>

####  DISCONNECTED

**● DISCONNECTED**: *`number`* = 20

*Defined in [nm/types/index.ts:48](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L48)*

No active network connection

___
<a id="state.disconnecting"></a>

####  DISCONNECTING

**● DISCONNECTING**: *`number`* = 30

*Defined in [nm/types/index.ts:53](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L53)*

Network connections are being cleaned up; Applications should tear down their network sessions

___
<a id="state.unknown-9"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:39](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L39)*

Networking state is unknown; Indicates a daemon error

___

___
<a id="wifi_device_cap"></a>

### `<Static>` WIFI_DEVICE_CAP

**WIFI_DEVICE_CAP**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[WIFI_DEVICE_CAP](networkmanagertypes.md#wifi_device_cap)*

*Defined in [nm/types/index.ts:191](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L191)*

NMDeviceWifiCapabilities
*__enum__*: {Number}

<a id="wifi_device_cap.adhoc-1"></a>

####  ADHOC

**● ADHOC**: *`number`* = 128

*Defined in [nm/types/index.ts:209](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L209)*

Device supports Ad-Hoc mode

___
<a id="wifi_device_cap.ap-1"></a>

####  AP

**● AP**: *`number`* = 64

*Defined in [nm/types/index.ts:207](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L207)*

Device supports Access Point mode

___
<a id="wifi_device_cap.cipher_ccmp"></a>

####  CIPHER_CCMP

**● CIPHER_CCMP**: *`number`* = 8

*Defined in [nm/types/index.ts:201](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L201)*

Device supports AES/CCMP encryption

___
<a id="wifi_device_cap.cipher_tkip"></a>

####  CIPHER_TKIP

**● CIPHER_TKIP**: *`number`* = 4

*Defined in [nm/types/index.ts:199](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L199)*

Device supports TKIP encryption

___
<a id="wifi_device_cap.cipher_wep104"></a>

####  CIPHER_WEP104

**● CIPHER_WEP104**: *`number`* = 2

*Defined in [nm/types/index.ts:197](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L197)*

Device supports 104/128-bit WEP encryption

___
<a id="wifi_device_cap.cipher_wep40"></a>

####  CIPHER_WEP40

**● CIPHER_WEP40**: *`number`* = 1

*Defined in [nm/types/index.ts:195](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L195)*

Device supports 40/64-bit WEP encryption

___
<a id="wifi_device_cap.freq_2ghz"></a>

####  FREQ_2GHZ

**● FREQ_2GHZ**: *`number`* = 512

*Defined in [nm/types/index.ts:213](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L213)*

Device supports 2.4GHz frequencies

___
<a id="wifi_device_cap.freq_5ghz"></a>

####  FREQ_5GHZ

**● FREQ_5GHZ**: *`number`* = 1024

*Defined in [nm/types/index.ts:215](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L215)*

Device supports 5GHz frequencies

___
<a id="wifi_device_cap.freq_valid"></a>

####  FREQ_VALID

**● FREQ_VALID**: *`number`* = 256

*Defined in [nm/types/index.ts:211](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L211)*

Device reports frequency capabilities

___
<a id="wifi_device_cap.none-13"></a>

####  NONE

**● NONE**: *`number`* = 0

*Defined in [nm/types/index.ts:193](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L193)*

Device has no encryption/authentication capabilities

___
<a id="wifi_device_cap.rsn"></a>

####  RSN

**● RSN**: *`number`* = 32

*Defined in [nm/types/index.ts:205](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L205)*

Device supports WPA2/RSN authentication

___
<a id="wifi_device_cap.wpa"></a>

####  WPA

**● WPA**: *`number`* = 16

*Defined in [nm/types/index.ts:203](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L203)*

Device supports WPA1 authentication

___

___
<a id="wimax_nsp_network_type"></a>

### `<Static>` WIMAX_NSP_NETWORK_TYPE

**WIMAX_NSP_NETWORK_TYPE**: *`object`*

*Inherited from [NetworkManagerTypes](networkmanagertypes.md).[WIMAX_NSP_NETWORK_TYPE](networkmanagertypes.md#wimax_nsp_network_type)*

*Defined in [nm/types/index.ts:333](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L333)*

NMWimaxNspNetworkType
*__enum__*: {Number}

<a id="wimax_nsp_network_type.home"></a>

####  HOME

**● HOME**: *`number`* = 1

*Defined in [nm/types/index.ts:337](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L337)*

Home network

___
<a id="wimax_nsp_network_type.partner"></a>

####  PARTNER

**● PARTNER**: *`number`* = 2

*Defined in [nm/types/index.ts:339](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L339)*

Partner network

___
<a id="wimax_nsp_network_type.roaming_partner"></a>

####  ROAMING_PARTNER

**● ROAMING_PARTNER**: *`number`* = 3

*Defined in [nm/types/index.ts:341](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L341)*

Roaming partner network

___
<a id="wimax_nsp_network_type.unknown-10"></a>

####  UNKNOWN

**● UNKNOWN**: *`number`* = 0

*Defined in [nm/types/index.ts:335](https://github.com/resin-io-modules/nm-api/blob/054c5ca/lib/nm/types/index.ts#L335)*

Unknown network type

___

___

