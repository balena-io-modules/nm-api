"use strict";
exports.__esModule = true;
exports["default"] = {
    'disconnect-network': function (serviceInstance) { return function (req, res) {
        serviceInstance.DeactivateConnection("/org/freedesktop/NetworkManager/Settings/" + req.body.pathN, '/org/freedesktop/NetworkManager/Devices/2', '/', function (err, id) {
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
            console.log('YASS!');
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
