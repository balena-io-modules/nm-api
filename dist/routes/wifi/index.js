"use strict";
/*
 * Copyright 2018 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var Bluebird = require("bluebird");
var nm_1 = require("../../nm");
exports["default"] = {
    'connect-network': {
        method: 'POST',
        handler: function (nm, req, res) { return __awaiter(_this, void 0, void 0, function () {
            var connection, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        connection = req.body.value;
                        return [4 /*yield*/, nm.connectNetwork(connection)];
                    case 1:
                        _a.sent();
                        res.status(200).json(connection);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        res.status(err_1.code).json(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, Bluebird.resolve()];
                }
            });
        }); }
    },
    'list-nearby-networks': {
        method: 'GET',
        handler: function (nm, req, res) { return __awaiter(_this, void 0, void 0, function () {
            var networks, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, nm.listNearbyNetworks()];
                    case 1:
                        networks = _a.sent();
                        res.status(200).json(networks);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        res.status(err_2.code).json(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, Bluebird.resolve()];
                }
            });
        }); }
    },
    'current-network': {
        method: 'GET',
        handler: function (nm, req, res) { return __awaiter(_this, void 0, void 0, function () {
            var ssid, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, nm.getCurrentNetwork()];
                    case 1:
                        ssid = _a.sent();
                        res.status(200).json({ ssid: ssid });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(err_3.code).json(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, Bluebird.resolve()];
                }
            });
        }); }
    },
    'forget-network': {
        method: 'POST',
        handler: function (nm, req, res) { return __awaiter(_this, void 0, void 0, function () {
            var network, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        network = req.body.value;
                        return [4 /*yield*/, nm.forgetNetwork(network)];
                    case 1:
                        _a.sent();
                        res.status(200).json(network);
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, res.status(err_4.code).json(err_4)];
                    case 3: return [2 /*return*/, Bluebird.resolve()];
                }
            });
        }); }
    },
    'toggle-wifi': {
        method: 'POST',
        handler: function (nm, req, res) { return __awaiter(_this, void 0, void 0, function () {
            var value, newValue, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        value = req.body.value;
                        return [4 /*yield*/, nm.toggleWifi(value)];
                    case 1:
                        newValue = _a.sent();
                        res.status(200).json({ value: newValue });
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        res.status(err_5.code).json(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, Bluebird.resolve()];
                }
            });
        }); }
    },
    'get-wifi-active': {
        method: 'GET',
        handler: function (nm, req, res) { return __awaiter(_this, void 0, void 0, function () {
            var State, active, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, nm.getDeviceStatus(nm.devices.wifi)];
                    case 1:
                        State = _a.sent();
                        active = State && (State !== nm_1.NetworkManager.DEVICE_STATE.DISCONNECTED);
                        res.status(200).json({ active: active });
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _a.sent();
                        res.status(err_6.code).json(err_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, Bluebird.resolve()];
                }
            });
        }); }
    }
};
