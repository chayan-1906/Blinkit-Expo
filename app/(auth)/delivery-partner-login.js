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
var react_native_1 = require("react-native");
var react_1 = require("react");
var Routes_1 = require("@/constants/Routes");
var expo_router_1 = require("expo-router");
var authStore_1 = require("@/state/authStore");
var authService_1 = require("@/service/authService");
var BlinkitSafeAreaView_1 = require("@/app/components/global/BlinkitSafeAreaView");
var Scaling_1 = require("@/utils/Scaling");
var lottie_react_native_1 = require("lottie-react-native");
var BlinkitText_1 = require("@/app/components/ui/BlinkitText");
var Constants_1 = require("@/utils/Constants");
var BlinkitInput_1 = require("@/app/components/ui/BlinkitInput");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
var BlinkitButton_1 = require("@/app/components/ui/BlinkitButton");
function DeliveryPartnerLogin() {
    var _this = this;
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var setUser = (0, authStore_1.useAuthStore)().setUser;
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
                    return [4 /*yield*/, (0, authService_1.deliveryPartnerLoginApi)(email, password)];
                case 2:
                    loginResponse = _a.sent();
                    console.log('loginResponse:', loginResponse);
                    if (loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.deliveryPartner) {
                        setUser(loginResponse.deliveryPartner);
                        expo_router_1.router.replace(Routes_1.default.deliveryDashboard);
                    }
                    else {
                        console.log('Error logging in ❌');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.log('Inside catch of handleAuth ❌', err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [email, password]);
    return (<BlinkitSafeAreaView_1.default>
            <react_native_1.ScrollView keyboardShouldPersistTaps={'handled'} keyboardDismissMode={'on-drag'}>
                <react_native_1.View className={'flex flex-1 p-4 items-center'}>
                    {/** lottie */}
                    <react_native_1.View style={styles.lottieContainer}>
                        <lottie_react_native_1.default autoPlay loop style={{ height: '100%', width: '100%' }} source={require('@/assets/animations/delivery_man.json')}/>
                    </react_native_1.View>

                    <BlinkitText_1.default variant={'h3'} fontFamily={Constants_1.Fonts.Bold}>Delivery Partner Portal</BlinkitText_1.default>
                    <BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.SemiBold} classes={''}>Faster than Flash ⚡️</BlinkitText_1.default>

                    {/** email */}
                    <BlinkitInput_1.default value={email} left={<Ionicons_1.default name={'mail'} color={'#F8890E'} size={(0, react_native_responsive_fontsize_1.RFValue)(18)} style={{ marginLeft: 10 }}/>} onChangeText={setEmail} placeholder={'Email'} inputMode={'email'} autoCapitalize={'none'} right={false}/>

                    {/** password */}
                    <BlinkitInput_1.default value={password} left={<Ionicons_1.default name={'key'} color={'#F8890E'} size={(0, react_native_responsive_fontsize_1.RFValue)(18)} style={{ marginLeft: 10 }}/>} onChangeText={setPassword} placeholder={'Password'} inputMode={'text'} secureTextEntry right={false}/>

                    {/** login button */}
                    <BlinkitButton_1.default title={'Login'} loading={loading} disabled={email.length === 0 || password.length === 0} onPress={handleAuth}/>
                </react_native_1.View>
            </react_native_1.ScrollView>
        </BlinkitSafeAreaView_1.default>);
}
exports.default = DeliveryPartnerLogin;
var styles = react_native_1.StyleSheet.create({
    lottieContainer: {
        height: Scaling_1.screenHeight * 0.12,
        width: '100%',
    },
});
