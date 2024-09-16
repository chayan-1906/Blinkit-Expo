import {SafeAreaView} from "react-native-safe-area-context";
import {Alert, Image, StyleSheet, Text} from "react-native";
import {useRouter} from "expo-router";
import {useEffect, useState} from "react";
import {screenHeight, screenWidth} from "@/utils/Scaling";
import Logo from '@/assets/images/splash_logo.jpeg';
import {LocationType} from "@/types/index.dt";
import {askForLocationPermission} from "@/utils/Location";

function SplashScreen() {
    let router = useRouter();

    const [location, setLocation] = useState<LocationType | null>(null);
    const [locationError, setLocationError] = useState<string | null>(null);

    /** fetch location */
    useEffect(() => {
        askForLocationPermission({setLocation, setLocationError});
    }, []);

    /** alert for locationError */
    useEffect(() => {
        if (locationError) {
            Alert.alert('Location required', 'Sorry, we need location service to give you better shopping experience');
        }
    }, [locationError]);

    /** redirect to home after 3 sec */
    useEffect(() => {
        setTimeout(() => {
            if (location && !locationError) {
                // router.replace(routes.homePath);
            }
        }, 3000);
    }, [location, locationError]);

    return (
        <SafeAreaView className={'flex flex-col flex-1 justify-center items-center bg-primary'}>
            <Image source={Logo} className={''} resizeMode={'contain'} style={styles.logoHeight}/>
            <Text>{JSON.stringify(location)}</Text>
            <Text>{JSON.stringify(locationError)}</Text>
        </SafeAreaView>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    logoHeight: {
        height: screenHeight * 0.70,
        width: screenWidth * 0.70,
    },
});
