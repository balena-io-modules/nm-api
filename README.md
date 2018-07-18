# nm-api
[![npm](https://img.shields.io/npm/v/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api)
[![npm license](https://img.shields.io/npm/l/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api)
[![npm downloads](https://img.shields.io/npm/dm/nm-api.svg?style=flat-square)](https://npmjs.com/package/nm-api)
[![build status](https://img.shields.io/travis/resin-io-modules/nm-api/master.svg?style=flat-square)](https://travis-ci.org/resin-io-modules/nm-api)

NetworkManager DBUS API

## Install via [npm](https://npmjs.com)

```console
$ npm install --save nm-api
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

## References

- [NetworkManager DBUS Types](https://developer.gnome.org/NetworkManager/stable/nm-dbus-types.html)
