"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appAxios = exports.SOCKET_URL = exports.BASE_URL = void 0;
var axios_1 = require("axios");
var IP_ADDRESS = '192.168.1.9:4000';
exports.BASE_URL = "http://".concat(IP_ADDRESS, "/api");
exports.SOCKET_URL = "http://".concat(IP_ADDRESS, "/api");
exports.appAxios = axios_1.default.create({
    baseURL: exports.BASE_URL,
});
