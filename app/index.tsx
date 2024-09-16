import {SafeAreaView} from "react-native-safe-area-context";
import {Image, StyleSheet} from "react-native";
import {useRouter} from "expo-router";
import {useEffect} from "react";
import {screenHeight, screenWidth} from "@/utils/Scaling";
import Logo from '@/assets/images/splash_logo.jpeg';

function SplashScreen() {
    let router = useRouter();

    /** redirect to home after 3 sec */
    useEffect(() => {
        setTimeout(() => {
            // router.push(routes.homePath);
        }, 3000);
    }, []);

    return (
        <SafeAreaView className={'flex flex-col flex-1 justify-center items-center bg-primary'}>
            <Image source={Logo} className={''} resizeMode={'contain'} style={styles.logoHeight}/>
        </SafeAreaView>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    logoHeight: {
        height: screenHeight * 0.70,
        width: screenWidth * 0.70,
    }
});
