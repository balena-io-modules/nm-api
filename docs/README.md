
nm-api
======

[![npm](https://img.shields.io/npm/v/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api) [![npm license](https://img.shields.io/npm/l/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api) [![npm downloads](https://img.shields.io/npm/dm/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api) [![build status](https://img.shields.io/travis/resin-io-modules/nm-api/master.svg?style=flat-square)](https://travis-ci.org/resin-io-modules/nm-api)

NetworkManager DBUS API

Install via [npm](https://npmjs.com)
------------------------------------

```console
npm install --save nm-api
```

Use
---

To start `nm-api` as an HTTP server:

```javascript
const nm = require(’nm-api’);

const port = Number(process.env.NM_SERVICE_API_PORT);

nm.createHttpServer()
.then((app) => {
  app.listen(port);
  console.log(`NetworkManager HTTP APIs running on port ${port}`);
})
.catch((err) => {
  console.error('Something went wrong when starting nm-api server', err);
});
```

To start `nm-api` as a node module:

```javascript
const nm = require(’nm-api’);

nm.init()
.then((service) => {
  // do stuff with the instance
})
.catch((err) => {
  console.error('Something went wrong when starting nm-api service', err);
});
```

HTTP APIs
---------

### Connect to network

POST `/connect-network`

Headers:

```HTTP
{
  "Accept": "application/json",
  "Content-Type": "application/json"
}
```

Body (JSON):

```JSON
{
  "value": {
    "ssid": "awesome ssid",
    "passphrase": "supersecret"
  }
}
```

Success Response

```HTTP
HTTP/1.1 200 OK
{
  "ssid": "awesome ssid",
  "passphrase": "supersecret"
}
```

Error 404 Response

```HTTP
HTTP/1.1 404 Not Found
{
  "code": 404,
  "message": "Could not find nearby AccessPoints with SSID: awesome ssid",
  "data": {}
}
```

Error 500 Response

```HTTP
HTTP/1.1 500 Internal Server Error
{
  "code": 500,
  "message": "Could not connectNetwork",
  "data": {...}
}
```

### List nearby networks

GET `/list-nearby-networks`

Success Response

```HTTP
HTTP/1.1 200 OK
[
  {
    "Ssid": "awesome ssid",
    "Frequency": "5",
    "security": {
      "open": false,
      "encryption": "wpa"
    }
  }
]
```

Error 500 Response

```HTTP
HTTP/1.1 500 Internal Server Error
{
  "code": 500,
  "message": "Could not listNearbyNetworks",
  "data": {...}
}
```

### Get current activated network

GET `/current-network`

Success Response

```HTTP
HTTP/1.1 200 OK
{
  "ssid": "awesome ssid"
}
```

Error 404 Response

```HTTP
HTTP/1.1 404 Not Found
{
  "code": 404,
  "message": "You're not currently connected to a wireless network",
  "data": {}
}
```

Error 500 Response

```HTTP
HTTP/1.1 500 Internal Server Error
{
  "code": 500,
  "message": "Could not getCurrentNetwork",
  "data": {...}
}
```

### Forget network

POST `/forget-network`

Headers:

```HTTP
{
  "Accept": "application/json",
  "Content-Type": "application/json"
}
```

Body (JSON):

```JSON
{
  "value": {
    "ssid": "awesome ssid"
  }
}
```

Success Response

```HTTP
HTTP/1.1 200 OK
{
  "ssid": "awesome ssid"
}
```

Error 404 Response

```HTTP
HTTP/1.1 404 Not Found
{
  "code": 404,
  "message": "Could not find nearby AccessPoints with SSID: \"awesome ssid\"",
  "data": {}
}
```

Error 500 Response

```HTTP
HTTP/1.1 500 Internal Server Error
{
  "code": 500,
  "message": "Could not forgetNetwork",
  "data": {...}
}
```

### Toggle WiFi

POST `/toggle-wifi`

Headers:

```HTTP
{
  "Accept": "application/json",
  "Content-Type": "application/json"
}
```

Body (JSON):

```JSON
{
  "value": true
}
```

Success Response

```HTTP
HTTP/1.1 200 OK
{
  "value": true
}
```

Error 500 Response

```HTTP
HTTP/1.1 500 Internal Server Error
{
  "code": 500,
  "message": "Could not toggleWifi",
  "data": {...}
}
```

### Get WiFi active flag

GET `/get-wifi-active`

Success Response

```HTTP
HTTP/1.1 200 OK
{
  "active": true
}
```

Error 404 Response

```HTTP
HTTP/1.1 404 Not Found
{
  "code": 404,
  "message": "Could not find a Wireless Device. Connect one & retry",
  "data": {}
}
```

Error 500 Response

```HTTP
HTTP/1.1 500 Internal Server Error
{
  "code": 500,
  "message": "Could not getWifiDevice",
  "data": {...}
}
```

## Index

### Classes

* [NetworkManager](classes/networkmanager.md)
* [NetworkManagerError](classes/networkmanagererror.md)
* [NetworkManagerTypes](classes/networkmanagertypes.md)

### Interfaces

* [AccessPoint](interfaces/accesspoint.md)
* [Device](interfaces/device.md)

### Variables

* [service](#service)
* [systemBus](#systembus)

### Functions

* [checkSecurityProps](#checksecurityprops)
* [createHttpServer](#createhttpserver)
* [exposeAPIs](#exposeapis)
* [findConnection](#findconnection)
* [formatError](#formaterror)
* [getProp](#getprop)
* [makeNetworksReadable](#makenetworksreadable)
* [stringToArrayOfBytes](#stringtoarrayofbytes)

### Object literals

* [routes](#routes)

---

## Variables

<a id="service"></a>

### `<Const>` service

**● service**: *`string`[]* =  [ 'org', 'freedesktop', 'NetworkManager' ]

*Defined in [nm/index.ts:23](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L23)*

___
<a id="systembus"></a>

### `<Const>` systemBus

**● systemBus**: *`any`* =  dbus.systemBus()

*Defined in [nm/index.ts:22](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L22)*

___

## Functions

<a id="checksecurityprops"></a>

###  checkSecurityProps

▸ **checkSecurityProps**(nmSecurityTypes: *`any`*): `(Anonymous function)`

*Defined in [nm/index.ts:518](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L518)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nmSecurityTypes | `any` |  DBUS NetworkManager security props to be checked against (can be NM80211ApFlags or NM80211ApSecurityFlags) |

**Returns:** `(Anonymous function)`

___
<a id="createhttpserver"></a>

###  createHttpServer

▸ **createHttpServer**(): `Promise`<`Application`>

*Defined in [index.ts:25](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/index.ts#L25)*

**Returns:** `Promise`<`Application`>

___
<a id="exposeapis"></a>

###  exposeAPIs

▸ **exposeAPIs**(app: *`express.Application`*, nm: *`any`*, rootApi?: *`string`*, APIs: *`any`*): `void`

*Defined in [index.ts:39](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/index.ts#L39)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| app | `express.Application` | - |
| nm | `any` | - |
| `Default value` rootApi | `string` | &quot;/&quot; |
| APIs | `any` | - |

**Returns:** `void`

___
<a id="findconnection"></a>

###  findConnection

▸ **findConnection**(connections: *`any`*, network: *`any`*): `any`

*Defined in [nm/index.ts:448](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L448)*

Find a network in a list of Connection Settings

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| connections | `any` |  Array of Connection Settings |
| network | `any` |  Object with 'ssid' property |

**Returns:** `any`

___
<a id="formaterror"></a>

###  formatError

▸ **formatError**(code?: *`number`*, message: *`string`*, err?: *`any`*): `any`

*Defined in [nm/index.ts:432](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L432)*

Format an error to be used by exception handlers

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` code | `number` | 400 |  HTTP Code |
| message | `string` | - |  Error message |
| `Default value` err | `any` |  {} |  Error data |

**Returns:** `any`

___
<a id="getprop"></a>

###  getProp

▸ **getProp**(settings: *`any`*, prop: *`any`*): `any`

*Defined in [nm/index.ts:549](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L549)*

Helper function to find a Connection Settings' property

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | `any` |  Settings object |
| prop | `any` |  Property to find |

**Returns:** `any`

___
<a id="makenetworksreadable"></a>

###  makeNetworksReadable

▸ **makeNetworksReadable**(rawNetworks: *`any`*): `any`[]

*Defined in [nm/index.ts:463](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L463)*

Format AccessPoints to be presented on a GUI

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rawNetworks | `any` |  Networks data obtained by getAccessPoints |

**Returns:** `any`[]

___
<a id="stringtoarrayofbytes"></a>

###  stringToArrayOfBytes

▸ **stringToArrayOfBytes**(str: *`any`*): `any`[]

*Defined in [nm/index.ts:536](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/nm/index.ts#L536)*

Helper function to convert a string to an array of bytes

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `any` |

**Returns:** `any`[]

___

## Object literals

<a id="routes"></a>

### `<Const>` routes

**routes**: *`object`*

*Defined in [routes/wifi/index.ts:20](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L20)*

<a id="routes.connect_network"></a>

####  connect-network

**connect-network**: *`object`*

*Defined in [routes/wifi/index.ts:26](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L26)*

Connect to a network by ssid/passphrase
*__param__*: Object containing ssid (string) and passphrase (string) props

<a id="routes.connect_network.method"></a>

####  method

**● method**: *`string`* = "POST"

*Defined in [routes/wifi/index.ts:27](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L27)*

___
<a id="routes.connect_network.handler"></a>

####  handler

▸ **handler**(nm: *[NetworkManager](classes/networkmanager.md)*, req: *`any`*, res: *`any`*): `Promise`<`void`>

*Defined in [routes/wifi/index.ts:28](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| nm | [NetworkManager](classes/networkmanager.md) |
| req | `any` |
| res | `any` |

**Returns:** `Promise`<`void`>

___

___
<a id="routes.current_network"></a>

####  current-network

**current-network**: *`object`*

*Defined in [routes/wifi/index.ts:57](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L57)*

Get the currently active wireless network ssid

<a id="routes.current_network.method-1"></a>

####  method

**● method**: *`string`* = "GET"

*Defined in [routes/wifi/index.ts:58](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L58)*

___
<a id="routes.current_network.handler-1"></a>

####  handler

▸ **handler**(nm: *[NetworkManager](classes/networkmanager.md)*, req: *`any`*, res: *`any`*): `Promise`<`void`>

*Defined in [routes/wifi/index.ts:59](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| nm | [NetworkManager](classes/networkmanager.md) |
| req | `any` |
| res | `any` |

**Returns:** `Promise`<`void`>

___

___
<a id="routes.forget_network"></a>

####  forget-network

**forget-network**: *`object`*

*Defined in [routes/wifi/index.ts:74](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L74)*

Forget a network by ssid
*__param__*: *   @param {Object} value Object containing the ssid prop (string)

<a id="routes.forget_network.method-2"></a>

####  method

**● method**: *`string`* = "POST"

*Defined in [routes/wifi/index.ts:75](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L75)*

___
<a id="routes.forget_network.handler-2"></a>

####  handler

▸ **handler**(nm: *[NetworkManager](classes/networkmanager.md)*, req: *`any`*, res: *`any`*): `Promise`<`any`>

*Defined in [routes/wifi/index.ts:76](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| nm | [NetworkManager](classes/networkmanager.md) |
| req | `any` |
| res | `any` |

**Returns:** `Promise`<`any`>

___

___
<a id="routes.get_wifi_active"></a>

####  get-wifi-active

**get-wifi-active**: *`object`*

*Defined in [routes/wifi/index.ts:108](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L108)*

Get the state of the WiFi Device (active: true/false)

<a id="routes.get_wifi_active.method-3"></a>

####  method

**● method**: *`string`* = "GET"

*Defined in [routes/wifi/index.ts:109](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L109)*

___
<a id="routes.get_wifi_active.handler-3"></a>

####  handler

▸ **handler**(nm: *[NetworkManager](classes/networkmanager.md)*, req: *`any`*, res: *`any`*): `Promise`<`void`>

*Defined in [routes/wifi/index.ts:110](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| nm | [NetworkManager](classes/networkmanager.md) |
| req | `any` |
| res | `any` |

**Returns:** `Promise`<`void`>

___

___
<a id="routes.list_nearby_networks"></a>

####  list-nearby-networks

**list-nearby-networks**: *`object`*

*Defined in [routes/wifi/index.ts:42](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L42)*

List all nearby networks

<a id="routes.list_nearby_networks.method-4"></a>

####  method

**● method**: *`string`* = "GET"

*Defined in [routes/wifi/index.ts:43](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L43)*

___
<a id="routes.list_nearby_networks.handler-4"></a>

####  handler

▸ **handler**(nm: *[NetworkManager](classes/networkmanager.md)*, req: *`any`*, res: *`any`*): `Promise`<`void`>

*Defined in [routes/wifi/index.ts:44](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| nm | [NetworkManager](classes/networkmanager.md) |
| req | `any` |
| res | `any` |

**Returns:** `Promise`<`void`>

___

___
<a id="routes.toggle_wifi"></a>

####  toggle-wifi

**toggle-wifi**: *`object`*

*Defined in [routes/wifi/index.ts:92](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L92)*

Toggle the WiFi Device
*__param__*: boolean

<a id="routes.toggle_wifi.method-5"></a>

####  method

**● method**: *`string`* = "POST"

*Defined in [routes/wifi/index.ts:93](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L93)*

___
<a id="routes.toggle_wifi.handler-5"></a>

####  handler

▸ **handler**(nm: *[NetworkManager](classes/networkmanager.md)*, req: *`any`*, res: *`any`*): `Promise`<`void`>

*Defined in [routes/wifi/index.ts:94](https://github.com/resin-io-modules/nm-api/blob/e38e336/lib/routes/wifi/index.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| nm | [NetworkManager](classes/networkmanager.md) |
| req | `any` |
| res | `any` |

**Returns:** `Promise`<`void`>

___

___

___

