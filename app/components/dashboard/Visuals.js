"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_reanimated_1 = require("react-native-reanimated");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var Constants_1 = require("@/utils/Constants");
var Scaling_1 = require("@/utils/Scaling");
var react_native_1 = require("react-native");
var lottie_react_native_1 = require("lottie-react-native");
function Visuals() {
    return (<react_native_reanimated_1.default.View className={'absolute'}>
            <expo_linear_gradient_1.LinearGradient colors={Constants_1.darkWeatherColors} className={'w-full absolute'} style={{ height: Scaling_1.screenHeight * 0.4 }}/>
            <react_native_1.Image source={require('@/assets/images/cloud.png')} resizeMode={'stretch'} style={{ width: Scaling_1.screenWidth, height: 100 }}/>
            <lottie_react_native_1.default source={require('@/assets/animations/raining.json')} autoPlay enableMergePathsAndroidForKitKatAndAbove loop style={styles.lottieView}/>
        </react_native_reanimated_1.default.View>);
}
exports.default = Visuals;
var styles = react_native_1.StyleSheet.create({
    lottieView: {
        width: '100%',
        height: 150,
        position: 'absolute',
        transform: [{ scaleX: -1 }],
    },
});
