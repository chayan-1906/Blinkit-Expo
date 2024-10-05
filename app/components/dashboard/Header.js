"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var BlinkitText_1 = require("@/app/components/ui/BlinkitText");
var Constants_1 = require("@/utils/Constants");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
var authStore_1 = require("@/state/authStore");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
function Header(_a) {
    var showNotice = _a.showNotice;
    var _b = (0, authStore_1.useAuthStore)(), user = _b.user, setUser = _b.setUser;
    return (<react_native_1.View className={"flex flex-row items-center justify-between px-3 ".concat(react_native_1.Platform.OS === 'android' ? 'pt-3' : 'pt-1')}>
            <react_native_1.TouchableOpacity activeOpacity={0.8}>
                <BlinkitText_1.default fontFamily={Constants_1.Fonts.Bold} variant={'h8'} classes={'text-white'}>Delivery in</BlinkitText_1.default>
                <react_native_1.View className={'flex flex-row items-center gap-2'}>
                    <BlinkitText_1.default fontFamily={Constants_1.Fonts.SemiBold} variant={'h2'} classes={'text-white'}>10 minutes</BlinkitText_1.default>
                    <react_native_1.TouchableOpacity className={'bg-[#E8EAF5] rounded-2xl px-2 py-1'} onPress={showNotice}>
                        <BlinkitText_1.default fontSize={(0, react_native_responsive_fontsize_1.RFValue)(8)} fontFamily={Constants_1.Fonts.SemiBold} classes={'text-[#3B4886]'}>⛈️ Rain</BlinkitText_1.default>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>

                <react_native_1.View className={'flex flex-row items-center gap-2'}>
                    <BlinkitText_1.default variant={'h8'} numberOfLines={1} fontFamily={Constants_1.Fonts.Medium} classes={'text-white'}>{(user === null || user === void 0 ? void 0 : user.address) || 'Knowhere, Somewhere 😅'}</BlinkitText_1.default>
                    <MaterialCommunityIcons_1.default name={'menu-down'} color={'white'} size={(0, react_native_responsive_fontsize_1.RFValue)(20)} className={''}/>
                </react_native_1.View>
            </react_native_1.TouchableOpacity>

            <react_native_1.TouchableOpacity>
                <MaterialCommunityIcons_1.default name={'account-circle-outline'} size={(0, react_native_responsive_fontsize_1.RFValue)(36)} color={'white'}/>
            </react_native_1.TouchableOpacity>
        </react_native_1.View>);
}
exports.default = Header;
