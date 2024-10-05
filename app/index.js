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
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var Scaling_1 = require("@/utils/Scaling");
var Location_1 = require("@/utils/Location");
var authStore_1 = require("@/state/authStore");
var storage_1 = require("@/state/storage");
var Routes_1 = require("@/constants/Routes");
var jwt_decode_1 = require("jwt-decode");
var authService_1 = require("@/service/authService");
var equals_1 = require("@/utils/functions/equals");
function SplashScreen() {
    var _this = this;
    var router = (0, expo_router_1.useRouter)();
    var _a = (0, authStore_1.useAuthStore)(), user = _a.user, setUser = _a.setUser;
    var tokenCheck = function () { return __awaiter(_this, void 0, void 0, function () {
        var accessToken, refreshToken, decodedAccessToken, decodedRefreshToken, currentTime, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.secureStorage.getItem('accessToken')];
                case 1:
                    accessToken = _a.sent();
                    return [4 /*yield*/, storage_1.secureStorage.getItem('refreshToken')];
                case 2:
                    refreshToken = _a.sent();
                    console.log('access token:', accessToken);
                    if (!accessToken) return [3 /*break*/, 8];
                    decodedAccessToken = (0, jwt_decode_1.jwtDecode)(accessToken);
                    decodedRefreshToken = (0, jwt_decode_1.jwtDecode)(refreshToken);
                    currentTime = Date.now() / 1000;
                    if ((decodedRefreshToken === null || decodedRefreshToken === void 0 ? void 0 : decodedRefreshToken.exp) < currentTime) {
                        router.replace(Routes_1.default.customerLogin);
                        react_native_1.Alert.alert('Session Expired', 'Please login again');
                        return [2 /*return*/, false];
                    }
                    if (!((decodedAccessToken === null || decodedAccessToken === void 0 ? void 0 : decodedAccessToken.exp) < currentTime)) return [3 /*break*/, 7];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, (0, authService_1.refreshTokenApi)(router)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, authService_1.refetchUserApi)(setUser)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log('Inside catch of refresh token ❌:', err_1);
                    react_native_1.Alert.alert('Error', 'There is an error refreshing token!');
                    return [2 /*return*/, false];
                case 7:
                    if ((0, equals_1.default)(user === null || user === void 0 ? void 0 : user.role, 'customer')) {
                        router.replace(Routes_1.default.productDashboard);
                    }
                    else if ((0, equals_1.default)(user === null || user === void 0 ? void 0 : user.role, 'deliverypartner')) {
                        router.replace(Routes_1.default.deliveryDashboard);
                    }
                    return [2 /*return*/, true];
                case 8:
                    router.replace(Routes_1.default.customerLogin);
                    return [2 /*return*/, false];
            }
        });
    }); };
    var _b = (0, react_1.useState)(null), location = _b[0], setLocation = _b[1];
    var _c = (0, react_1.useState)(null), locationError = _c[0], setLocationError = _c[1];
    /** fetch location */
    (0, react_1.useEffect)(function () {
        (0, Location_1.askForLocationPermission)({ setLocation: setLocation, setLocationError: setLocationError });
    }, []);
    /** alert for locationError */
    (0, react_1.useEffect)(function () {
        if (locationError) {
            react_native_1.Alert.alert('Location required', 'Sorry, we need location service to give you better shopping experience');
        }
        else {
            tokenCheck();
        }
    }, [locationError]);
    /** redirect to home after 3 sec */
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (location && !locationError) {
                // router.replace(routes.homePath);
            }
        }, 3000);
    }, [location, locationError]);
    return (<react_native_safe_area_context_1.SafeAreaView className={'flex flex-col flex-1 justify-center items-center bg-primary'}>
        </react_native_safe_area_context_1.SafeAreaView>);
}
exports.default = SplashScreen;
var styles = react_native_1.StyleSheet.create({
    logoHeight: {
        height: Scaling_1.screenHeight * 0.70,
        width: Scaling_1.screenWidth * 0.70,
    },
});
