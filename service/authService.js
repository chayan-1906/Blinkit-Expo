"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryPartnerLoginApi = exports.refetchUserApi = exports.refreshTokenApi = exports.customerLoginApi = void 0;
var axios_1 = require("axios");
var storage_1 = require("@/state/storage");
var ApiEndpoints_1 = require("@/constants/ApiEndpoints");
var SecureStorageKeys_1 = require("@/constants/SecureStorageKeys");
var Routes_1 = require("@/constants/Routes");
var expo_router_1 = require("expo-router");
var config_1 = require("@/service/config");
var equals_1 = require("@/utils/functions/equals");
var react_native_1 = require("react-native");
var customerLoginApi = function (phoneNumber) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, response, _a, accessToken, refreshToken, customer, err_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 4, , 5]);
                console.log('customerLoginApi called 🔑', ApiEndpoints_1.APIs.customerLogin);
                requestBody = {
                    phoneNumber: phoneNumber
                };
                console.log('customerLoginApi requestBody ℹ️', requestBody);
                return [4 /*yield*/, axios_1.default.post(ApiEndpoints_1.APIs.customerLogin, requestBody)];
            case 1:
                response = _d.sent();
                _a = response.data, accessToken = _a.accessToken, refreshToken = _a.refreshToken, customer = _a.customer;
                return [4 /*yield*/, storage_1.secureStorage.setItem(SecureStorageKeys_1.SecureStorageKeys.accessToken, accessToken)];
            case 2:
                _d.sent();
                return [4 /*yield*/, storage_1.secureStorage.setItem(SecureStorageKeys_1.SecureStorageKeys.refreshToken, refreshToken)];
            case 3:
                _d.sent();
                /** TODO: Make use of statusCode */
                console.log('customer logged in ✅:', JSON.stringify(customer), ' 🎉');
                return [2 /*return*/, { accessToken: accessToken, refreshToken: refreshToken, customer: customer }];
            case 4:
                err_1 = _d.sent();
                console.log('customerLoginApi ❌:', (_c = (_b = err_1.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.customerLoginApi = customerLoginApi;
var refreshTokenApi = function (router) { return __awaiter(void 0, void 0, void 0, function () {
    var storedRefreshToken, requestBody, response, _a, accessToken, refreshToken, err_2;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, , 7]);
                return [4 /*yield*/, storage_1.secureStorage.getItem('refreshToken')];
            case 1:
                storedRefreshToken = _d.sent();
                console.log('refreshTokenApi called 🔑', ApiEndpoints_1.APIs.refreshToken);
                requestBody = {
                    refreshToken: storedRefreshToken,
                };
                console.log('refreshTokenApi requestBody ℹ️', requestBody);
                return [4 /*yield*/, axios_1.default.post(ApiEndpoints_1.APIs.refreshToken, requestBody)];
            case 2:
                response = _d.sent();
                _a = response.data, accessToken = _a.accessToken, refreshToken = _a.refreshToken;
                return [4 /*yield*/, storage_1.secureStorage.setItem(SecureStorageKeys_1.SecureStorageKeys.accessToken, accessToken)];
            case 3:
                _d.sent();
                return [4 /*yield*/, storage_1.secureStorage.setItem(SecureStorageKeys_1.SecureStorageKeys.refreshToken, refreshToken)];
            case 4:
                _d.sent();
                /** TODO: Make use of statusCode */
                console.log('token refreshed ✅: accessToken -', accessToken, 'refreshToken -', refreshToken, ' 🎉');
                return [2 /*return*/, { accessToken: accessToken, refreshToken: refreshToken }];
            case 5:
                err_2 = _d.sent();
                console.log('refreshTokenApi error ❌:', (_c = (_b = err_2.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error);
                return [4 /*yield*/, storage_1.secureStorage.clearAll()];
            case 6:
                _d.sent();
                router === null || router === void 0 ? void 0 : router.replace(Routes_1.default.customerLogin);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.refreshTokenApi = refreshTokenApi;
var refetchUserApi = function (setUser) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_3;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 4]);
                console.log('refetchUserApi called 🔑');
                return [4 /*yield*/, config_1.appAxios.get(ApiEndpoints_1.APIs.getUser)];
            case 1:
                response = _c.sent();
                setUser(response.data.user);
                /** TODO: Make use of statusCode */
                console.log('user refetched ✅: user -', response, ' 🎉');
                return [2 /*return*/, response.data.user];
            case 2:
                err_3 = _c.sent();
                console.log('refetchUserApi error ❌:', (_b = (_a = err_3.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error);
                return [4 /*yield*/, storage_1.secureStorage.clearAll()];
            case 3:
                _c.sent();
                expo_router_1.router.replace(Routes_1.default.customerLogin);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.refetchUserApi = refetchUserApi;
var deliveryPartnerLoginApi = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, response, _a, accessToken, refreshToken, deliveryPartner, err_4, errorCode;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 4, , 5]);
                console.log('deliveryPartnerLoginApi called 🔑', ApiEndpoints_1.APIs.deliveryPartnerLogin);
                requestBody = {
                    email: email,
                    password: password,
                };
                console.log('deliveryPartnerLoginApi requestBody ℹ️', requestBody);
                return [4 /*yield*/, axios_1.default.post(ApiEndpoints_1.APIs.deliveryPartnerLogin, requestBody)];
            case 1:
                response = _d.sent();
                _a = response.data, accessToken = _a.accessToken, refreshToken = _a.refreshToken, deliveryPartner = _a.deliveryPartner;
                return [4 /*yield*/, storage_1.secureStorage.setItem(SecureStorageKeys_1.SecureStorageKeys.accessToken, accessToken)];
            case 2:
                _d.sent();
                return [4 /*yield*/, storage_1.secureStorage.setItem(SecureStorageKeys_1.SecureStorageKeys.refreshToken, refreshToken)];
            case 3:
                _d.sent();
                /** TODO: Make use of statusCode */
                console.log('deliveryPartner logged in ✅:', JSON.stringify(deliveryPartner), ' 🎉');
                return [2 /*return*/, { accessToken: accessToken, refreshToken: refreshToken, deliveryPartner: deliveryPartner }];
            case 4:
                err_4 = _d.sent();
                errorCode = (_c = (_b = err_4.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error.code;
                console.log('deliveryPartnerLoginApi ❌:', errorCode);
                if ((0, equals_1.default)(errorCode, 'invalidcredentials')) {
                    react_native_1.Alert.alert('Invalid Credentials', 'Please enter correct email and password');
                }
                else if ((0, equals_1.default)(errorCode, 'deliverypartnernotfound')) {
                    react_native_1.Alert.alert('Invalid Credentials', 'No delivery partner found with this email and password');
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deliveryPartnerLoginApi = deliveryPartnerLoginApi;
