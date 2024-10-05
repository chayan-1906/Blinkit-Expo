"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIs = void 0;
var config_1 = require("@/service/config");
exports.APIs = {
    customerLogin: "".concat(config_1.BASE_URL, "/customer/login"),
    deliveryPartnerLogin: "".concat(config_1.BASE_URL, "/delivery/login"),
    refreshToken: "".concat(config_1.BASE_URL, "/refresh-token"),
    getUser: "".concat(config_1.BASE_URL, "/user"),
};
