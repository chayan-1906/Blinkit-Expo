"use strict";
/*import {MMKV} from "react-native-mmkv";

export const tokenStorage = new MMKV({
    id: 'token-storage',
    encryptionKey: process.env.BLINKIT_SECRET_KEY,
});

export const storage = new MMKV({
    id: process.env.BLINKIT_STORAGE_ID || '',
    encryptionKey: process.env.BLINKIT_SECRET_KEY,
});

export const mmkvStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value);
    },
    getItem: (key: string) => {
        const value = storage.getString(key);
        return value ?? null;
    },
    removeItem: (key: string) => {
        storage.delete(key);
    }
}*/
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
exports.secureStorage = exports.storeStorageId = exports.storeToken = void 0;
var SecureStore = require("expo-secure-store");
var SecureStorageKeys_1 = require("@/constants/SecureStorageKeys");
function storeToken() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var tokenStorage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    tokenStorage = (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : '';
                    return [4 /*yield*/, SecureStore.setItemAsync('token-storage', tokenStorage)];
                case 1:
                    _c.sent();
                    console.log('🔐token-storage stored:', (_b = process.env.SECRET_KEY) !== null && _b !== void 0 ? _b : '', '✅');
                    return [2 /*return*/];
            }
        });
    });
}
exports.storeToken = storeToken;
function storeStorageId() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, SecureStore.setItemAsync((_a = process.env.BLINKIT_STORAGE_ID) !== null && _a !== void 0 ? _a : '', (_b = process.env.BLINKIT_SECRET_KEY) !== null && _b !== void 0 ? _b : '')];
                case 1:
                    _d.sent();
                    console.log('🔐storage stored:', (_c = process.env.BLINKIT_SECRET_KEY) !== null && _c !== void 0 ? _c : '', '✅');
                    return [2 /*return*/];
            }
        });
    });
}
exports.storeStorageId = storeStorageId;
exports.secureStorage = {
    getItem: function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SecureStore.getItemAsync(key)];
                    case 1:
                        value = _a.sent();
                        console.log('🔐 ', key, 'retrieved:', value !== null && value !== void 0 ? value : '', '✅');
                        return [2 /*return*/, value];
                }
            });
        });
    },
    setItem: function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SecureStore.setItemAsync(key, value)];
                    case 1:
                        _a.sent();
                        console.log('🔐 ', key, 'stored:', value, '✅');
                        return [2 /*return*/];
                }
            });
        });
    },
    removeItem: function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SecureStore.deleteItemAsync(key)];
                    case 1:
                        _a.sent();
                        console.log('🔐 ', key, 'deleted ✅');
                        return [2 /*return*/];
                }
            });
        });
    },
    clearAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys, _i, keys_1, key, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        keys = Object.values(SecureStorageKeys_1.SecureStorageKeys);
                        _i = 0, keys_1 = keys;
                        _a.label = 1;
                    case 1:
                        if (!(_i < keys_1.length)) return [3 /*break*/, 4];
                        key = keys_1[_i];
                        return [4 /*yield*/, SecureStore.deleteItemAsync(key)];
                    case 2:
                        _a.sent();
                        console.log("Deleted secure storage key: ".concat(key));
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('🔐 All secure storage items cleared successfully! ✅');
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.log('Error clearing secure storage ❌:', err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
};
