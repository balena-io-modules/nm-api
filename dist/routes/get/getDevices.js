"use strict";
exports.__esModule = true;
exports["default"] = {
    'get-devices': function (serviceInstance) { return function (req, res) {
        serviceInstance.GetDevices(function (err, devices) {
            if (err) {
                console.error('err', err);
                return res
                    .status(500)
                    .json(err);
            }
            return res
                .status(200)
                .json(devices);
        });
    }; }
};
