"use strict";
exports.__esModule = true;
var _ = require("lodash");
exports["default"] = {
    'connect-network': function (serviceInstance) { return function (req, res) {
        var connection = req.body.value;
        console.log('Connecting to netwotk', _.omit(connection, 'passphrase'));
        // /org/freedesktop/NetworkManager/Settings/16 /org/freedesktop/NetworkManager/ActiveConnection/13
        // serviceInstance.ActivateConnection('/org/freedesktop/NetworkManager/Settings/16', '/org/freedesktop/NetworkManager/Devices/2', '/', (err, activeConnection) => {
        serviceInstance.ActivateConnection("/org/freedesktop/NetworkManager/Settings/" + req.body.pathN, '/', '/', function (err, activeConnection) {
            if (err) {
                console.error('err', err);
                return res
                    .status(500)
                    .json(err);
            }
            console.log('YASS!', activeConnection);
            return res
                .status(200)
                .send({
                headers: {
                    'Content-Type': 'text/html'
                },
                body: "Connected to network: " + JSON.stringify(activeConnection)
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
