"use strict";
exports.__esModule = true;
var _ = require("lodash");
exports["default"] = {
    'connect-new-network': function (serviceInstance) { return function (req, res) {
        var connection = req.body.value;
        // const params = [ // a
        // 	['802-11-wireless', [
        // 		['mode', ['s', 'infrastructure']],
        // 		['security', ['s', '802-11-wireless-security']],
        // 		['ssid', ['ai', [ stringToArrayOfBytes(connection.ssid) ]]], // note that array itself is element of struct
        // 	]],
        // 	['connection', [
        // 		['id', ['s', connection.ssid]],
        // 		['type', ['s', '802-11-wireless']],
        // 	]],
        // 	['802-11-wireless-security', [
        // 		['auth-alg', ['s', 'open']],
        // 		['key-mgmt', ['s', connection.security]],
        // 		['psk', ['s', connection.passphrase]],
        // 	]],
        // 	['ipv4', [
        // 		['method', ['s', 'auto']],
        // 	]],
        // ];
        var params = {
            '802-11-wireless': {
                ssid: Buffer.from(connection.ssid).toString()
            },
            connection: {
                id: connection.ssid,
                type: '802-11-wireless'
            },
            '802-11-wireless-security': {
                'auth-alg': 'open',
                'key-mgmt': 'wpa-psk',
                psk: connection.passphrase
            },
            ipv4: {
                method: 'auto'
            }
        };
        console.log('Connecting to new network', _.omit(connection, 'passphrase'));
        var method = 'AddConnection';
        console.log('method', method);
        serviceInstance[method](params, '/', '/', function (err, path, activeConnection) {
            if (err) {
                console.error('err', err);
                return res
                    .status(500)
                    .send({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(err)
                });
            }
            console.log('YASS!', path, activeConnection);
            return res
                .status(200)
                .send({
                headers: {
                    'Content-Type': 'text/html'
                },
                body: 'Connected to network'
            });
        });
    }; }
};
function stringToArrayOfBytes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
