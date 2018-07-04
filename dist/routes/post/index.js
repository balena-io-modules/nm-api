"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var activateConnection_1 = require("./activateConnection");
var addAndActivateConnection_1 = require("./addAndActivateConnection");
var deactivateConnection_1 = require("./deactivateConnection");
exports["default"] = __assign({}, activateConnection_1["default"], addAndActivateConnection_1["default"], deactivateConnection_1["default"]);
