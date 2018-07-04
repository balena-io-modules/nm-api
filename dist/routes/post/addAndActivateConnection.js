"use strict";
exports.__esModule = true;
exports["default"] = {
    'connect-new-network': function (nm) { return function (req, res) {
        var connection = req.body.value;
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
        nm.callMethod(['Settings'], 'ListConnections', '', [])
            .then(function (networks) {
            // serviceInstance.ListConnections((err, ...data) => {
            console.log('networks', networks);
            return res
                .status(200)
                .json(networks);
        })["catch"](function (err) {
            return res
                .status(500)
                .json(err);
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
