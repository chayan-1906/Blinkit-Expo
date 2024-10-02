import Animated from "react-native-reanimated";
import {LinearGradient} from "expo-linear-gradient";
import {darkWeatherColors} from "@/utils/Constants";
import {screenHeight, screenWidth} from "@/utils/Scaling";
import {Image, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";

function Visuals() {
    return (
        <Animated.View className={'absolute'}>
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