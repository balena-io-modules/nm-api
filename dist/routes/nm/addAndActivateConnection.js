"use strict";
exports.__esModule = true;
var _ = require("lodash");
exports["default"] = {
    'connect-new-network': {
        method: 'POST',
        handler: function (nm) { return function (req, res) {
            var connection = req.body.value;
            var connectionParam = [
                ['connection', [
                        ['id', ['s', connection.ssid]],
                        ['type', ['s', '802-11-wireless']],
                    ]],
                ['802-11-wireless', [
                        ['ssid', ['ay', [stringToArrayOfBytes(connection.ssid)]]],
                        ['mode', ['s', 'infrastructure']],
                    ]],
                ['802-11-wireless-security', [
                        ['auth-alg', ['s', 'open']],
                        ['key-mgmt', ['s', 'wpa-psk']],
                        ['psk', ['s', connection.passphrase]],
                    ]],
                ['ipv4', [
                        ['method', ['s', 'auto']],
                    ]],
                ['ipv6', [
                        ['method', ['s', 'auto']],
                    ]],
            ];
            var ap = _.find(nm.accessPoints, { Ssid: connection.ssid });
            if (_.isUndefined(ap)) {
                return res
                    .status(500)
                    .json({ err: "Could not find the AccessPoint with SSID: " + connection.ssid });
            }
            var params = [
                connectionParam,
            ];
            nm.callMethod(['Settings'])(['Settings'])(['AddConnection', 'a{sa{sv}}'])(params)
                .then(function (networkSettings) {
                var activateConnection = nm.callMethod()()(['ActivateConnection', 'ooo']);
                activateConnection([networkSettings, nm.wifiDevice.path, '/'])
                    .then(function () {
                    return res
                        .status(200)
                        .json();
                })["catch"](function () {
                    var err = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        err[_i] = arguments[_i];
                    }
                    return res
                        .status(500)
                        .json();
                });
            })["catch"](function (err) {
                return res
                    .status(500)
                    .json(err);
            });
        }; }
    }
};
function stringToArrayOfBytes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
