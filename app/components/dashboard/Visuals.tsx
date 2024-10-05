import Animated, {interpolate, useAnimatedStyle} from "react-native-reanimated";
import {LinearGradient} from "expo-linear-gradient";
import {darkWeatherColors} from "@/utils/Constants";
import {screenHeight, screenWidth} from "@/utils/Scaling";
import {Image, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";
import {useCollapsibleContext} from "@r0b0t3d/react-native-collapsible";

function Visuals() {
    const {scrollY} = useCollapsibleContext();

    const headerAnimatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 120], [1, 0]);
        return {opacity};
    });

    return (
        <Animated.View className={'absolute'} style={headerAnimatedStyle}>
            <LinearGradient colors={darkWeatherColors} className={'w-full absolute'} style={{height: screenHeight * 0.4}}/>
            <Image source={require('@/assets/images/cloud.png')} resizeMode={'stretch'} style={{width: screenWidth, height: 100}}/>
            <LottieView source={require('@/assets/animations/raining.json')} autoPlay enableMergePathsAndroidForKitKatAndAbove loop style={styles.lottieView}/>
        </Animated.View>
    );
}

export default Visuals;

const styles = StyleSheet.create({
    lottieView: {
        width: '100%',
        height: 150,
        position: 'absolute',
        transform: [{scaleX: -1}],
    },
});
