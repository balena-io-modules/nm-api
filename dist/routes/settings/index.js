"use strict";
exports.__esModule = true;
var Bluebird = require("bluebird");
var _ = require("lodash");
exports["default"] = {
    'current-network': {
        method: 'GET',
        handler: function (nm) { return function (req, res) {
            var getActiveConnections = function () { return nm.callMethod()('org.freedesktop.DBus.Properties')(['Get', 'ss'])(['org.freedesktop.NetworkManager', 'ActiveConnections']); };
            getActiveConnections()
                .then(function (_a) {
                var key = _a[0], connections = _a[1][0];
                var getConnectionProperty = function (prop) { return function (path) {
                    return nm.callMethod(path)('org.freedesktop.DBus.Properties')(['Get', 'ss'])(prop)
                        .then(function (_a) {
                        var key = _a[0], value = _a[1][0];
                        return ({ path: path, type: value.toString() });
                    });
                }; };
                var getConnectionsProperty = function () { return _.map(connections, getConnectionProperty(['org.freedesktop.NetworkManager.Connection.Active', 'Type'])); };
                Bluebird.all(getConnectionsProperty())
                    .then(function (results) {
                    var wifiConnection = _.filter(results, function (_a) {
                        var type = _a.type;
                        return type === '802-11-wireless';
                    })[0];
                    getConnectionProperty(['org.freedesktop.NetworkManager.Connection.Active', 'Connection'])(wifiConnection.path)
                        .then(function (value) {
                        var key = value[0], connection = value[1][0];
                        var deleteConnection = nm.callMethod(connection)(['Settings', 'Connection'])(['Delete', '']);
                        deleteConnection()
                            .then(function () {
                            return res.status(200).json();
                        })["catch"](function () {
                            var err = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                err[_i] = arguments[_i];
                            }
                            return res.status(500).json(err);
                        });
                    });
                })["catch"](function () {
                    var err = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        err[_i] = arguments[_i];
                    }
                    return res.status(500).json(err);
                });
            })["catch"](function (err) {
                return res.status(500).json(err);
            });
        }; }
    },
    'forget-network': {
        method: 'POST',
        handler: function (nm) { return function (req, res) {
            var connection = req.body.value;
            nm.callMethod(['Settings'])(['Settings'])(['ListConnections', ''])()
                .then(function (connections) {
                var getConnectionSettings = function (connPath) {
                    return nm.callMethod(connPath)(['Settings', 'Connection'])(['GetSettings', ''])()
                        .then(function (value) { return ({ connPath: connPath, settings: value }); });
                };
                var getConnectionsSettings = function () { return _.map(connections, getConnectionSettings); };
                Bluebird.all(getConnectionsSettings())
                    .then(function (results) {
                    var wifiConnection = _.filter(results, function (result) {
                        var connectionProps = getProp(result.settings, 'connection');
                        var _a = getProp(connectionProps, 'id'), type = _a[0], id = _a[1][0];
                        return id === connection.ssid;
                    })[0];
                    var deleteConnection = function (connPath) { return nm.callMethod(connPath)(['Settings', 'Connection'])(['Delete', ''])(); };
                    deleteConnection(wifiConnection.connPath)
                        .then(function () {
                        return res.status(200).json();
                    })["catch"](function () {
                        var err = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            err[_i] = arguments[_i];
                        }
                        return res.status(500).json(err);
                    });
                })["catch"](function () {
                    var err = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        err[_i] = arguments[_i];
                    }
                    return res.status(500).json(err);
                });
            });
        }; }
    }
};
function getProp(s, prop) {
    var _a = s.find(function (s) { return s[0] === prop; }), key = _a[0], value = _a[1];
    return value;
}
