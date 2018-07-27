# nm-api

[![npm](https://img.shields.io/npm/v/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api)
[![npm license](https://img.shields.io/npm/l/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api)
[![npm downloads](https://img.shields.io/npm/dm/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api)
[![build status](https://img.shields.io/travis/resin-io-modules/nm-api/master.svg?style=flat-square)](https://travis-ci.org/resin-io-modules/nm-api)

NetworkManager DBUS API

## Install via [npm](https://npmjs.com)

```console
npm install --save nm-api
```

## Use

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

## HTTP APIs

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
