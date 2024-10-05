"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var Constants_1 = require("@/utils/Constants");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
var react_native_rolling_bar_1 = require("react-native-rolling-bar");
var BlinkitText_1 = require("@/app/components/ui/BlinkitText");
function SearchBar() {
    return (<react_native_1.TouchableOpacity className={'flex flex-row bg-[#F3F4F7] items-center justify-between rounded-lg border border-border mt-4 mx-3 p-3 overflow-hidden'} activeOpacity={0.8}>
            <Ionicons_1.default name={'search'} color={Constants_1.Colors.text} size={(0, react_native_responsive_fontsize_1.RFValue)(20)}/>
            <react_native_rolling_bar_1.default interval={3000} defaultStyle={false} customStyle={styles.textContainer}>
                <BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.Medium}>Search "sweets"</BlinkitText_1.default>
                <BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.Medium}>Search "milk"</BlinkitText_1.default>
                <BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.Medium}>Search "atta, dal, coke"</BlinkitText_1.default>
                <BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.Medium}>Search "chips"</BlinkitText_1.default>
                <BlinkitText_1.default variant={'h6'} fontFamily={Constants_1.Fonts.Medium}>Search "pooja thali"</BlinkitText_1.default>
            </react_native_rolling_bar_1.default>
            <react_native_1.View className={'w-[1px] h-6 bg-[#DDD] mx-3'}/>
            <Ionicons_1.default name={'mic'} color={Constants_1.Colors.text} size={(0, react_native_responsive_fontsize_1.RFValue)(20)}/>
        </react_native_1.TouchableOpacity>);
}
exports.default = SearchBar;
var styles = react_native_1.StyleSheet.create({
    textContainer: {
        width: '90%',
        paddingLeft: 10,
        // height: 50,
    },
});
