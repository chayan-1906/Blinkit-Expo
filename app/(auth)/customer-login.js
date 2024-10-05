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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var BlinkitSafeAreaView_1 = require("@/app/components/global/BlinkitSafeAreaView");
var ProductSlider_1 = require("@/app/components/login/ProductSlider");
var react_native_1 = require("react-native");
var react_1 = require("react");
var expo_router_1 = require("expo-router");
var Routes_1 = require("@/constants/Routes");
var BlinkitText_1 = require("@/app/components/ui/BlinkitText");
var Constants_1 = require("@/utils/Constants");
var BlinkitInput_1 = require("@/app/components/ui/BlinkitInput");
var BlinkitButton_1 = require("@/app/components/ui/BlinkitButton");
var useKeyboardOffsetHeight_1 = require("@/utils/useKeyboardOffsetHeight");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var authService_1 = require("@/service/authService");
var authStore_1 = require("@/state/authStore");
function CustomerLogin() {
    var _this = this;
    var _a = (0, react_1.useState)([]), gestureSequence = _a[0], setGestureSequence = _a[1];
    var _b = (0, react_1.useState)(''), phoneNumber = _b[0], setPhoneNumber = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var router = (0, expo_router_1.useRouter)();
    var setUser = (0, authStore_1.useAuthStore)().setUser;
    var keyboardOffsetHeight = (0, useKeyboardOffsetHeight_1.default)();
    var animatedValue = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    var handleGesture = (0, react_1.useCallback)(function (_a) {
        var nativeEvent = _a.nativeEvent;
        if (nativeEvent.state === react_native_gesture_handler_1.State.END) {
            var translationX = nativeEvent.translationX, translationY = nativeEvent.translationY;
            var direction = '';
            if (Math.abs(translationX) > Math.abs(translationY)) {
                direction = translationX > 0 ? 'right' : 'left';
            }
            else {
                direction = translationY > 0 ? 'down' : 'up';
            }
            // console.log(translationX, translationY, direction);
            var newSequence = __spreadArray(__spreadArray([], gestureSequence, true), [direction], false).slice(-5);
            setGestureSequence(newSequence);
            console.log(newSequence);
            if (newSequence.join(' ') === 'up up down left right') {
                setGestureSequence([]);
                router.replace(Routes_1.default.deliveryPartnerLogin);
            }
        }
    }, [gestureSequence]);
    var handleAuth = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var loginResponse, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    react_native_1.Keyboard.dismiss();
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, authService_1.customerLoginApi)(phoneNumber)];
                case 2:
                    loginResponse = _a.sent();
                    console.log('loginResponse:', loginResponse);
                    if (loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.customer) {
                        setUser(loginResponse.customer);
                        router.replace(Routes_1.default.productDashboard);
                    }
                    else {
                        console.log('Error logging in ❌');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.log('Inside catch of handleAuth ❌', err_1);
                    react_native_1.Alert.alert('Login failed');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [phoneNumber]);
    (0, react_1.useEffect)(function () {
        if (keyboardOffsetHeight === 0) {
            react_native_1.Animated.timing(animatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
        else {
            react_native_1.Animated.timing(animatedValue, {
                toValue: -keyboardOffsetHeight * 0.84,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [keyboardOffsetHeight]);
    return (<react_native_gesture_handler_1.GestureHandlerRootView className={'flex-1'}>
            <BlinkitSafeAreaView_1.default>
                <ProductSlider_1.default />
                <react_native_gesture_handler_1.PanGestureHandler onHandlerStateChange={handleGesture}>
                    <react_native_1.Animated.ScrollView bounces={false} keyboardDismissMode={'on-drag'} keyboardShouldPersistTaps={'handled'} contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} style={{ transform: [{ translateY: animatedValue }] }}>
                        <expo_linear_gradient_1.LinearGradient colors={Constants_1.bottomColors} className={'w-full pt-20 shadow-2xl shadow-white'}>
                            <react_native_1.View className={'flex justify-center items-center px-5 pt-3 bg-white'}>
                                <react_native_1.Image source={require('@/assets/images/logo.png')} resizeMode={'contain'} className={'h-12 w-12 rounded-lg mb-3'}/>
                                <BlinkitText_1.default variant={'h2'} fontFamily={Constants_1.Fonts.Bold}>India's last minute app</BlinkitText_1.default>
                                <BlinkitText_1.default variant={'h5'} fontFamily={Constants_1.Fonts.SemiBold} numberOfLines={2} classes={'mt-1 mb-6'} style={{ opacity: 0.8 }}>Log in or sign up</BlinkitText_1.default>
                                <BlinkitInput_1.default left={<BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.SemiBold} classes={'ml-3'}>+ 91</BlinkitText_1.default>} value={phoneNumber} onChangeText={function (text) { return setPhoneNumber(text.slice(0.10)); }} placeholder={'Enter your phone number...'} inputMode={'numeric'} onClear={function () { return setPhoneNumber(''); }}/>
                                <BlinkitButton_1.default title={'Continue'} loading={loading} disabled={phoneNumber.length !== 10} onPress={handleAuth}/>
                            </react_native_1.View>
                        </expo_linear_gradient_1.LinearGradient>
                    </react_native_1.Animated.ScrollView>
                </react_native_gesture_handler_1.PanGestureHandler>

                {/** footer */}
                <react_native_1.View className={'flex justify-center items-center pt-3 w-full border-t border-t-border'}>
                    <BlinkitText_1.default variant={'h8'}>By continuing, you agree to our Terms of Service & Privacy Policy</BlinkitText_1.default>
                </react_native_1.View>
            </BlinkitSafeAreaView_1.default>
        </react_native_gesture_handler_1.GestureHandlerRootView>);
}
exports.default = CustomerLogin;
