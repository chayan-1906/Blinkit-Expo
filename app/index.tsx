import {SafeAreaView} from "react-native-safe-area-context";
import {Alert, StyleSheet} from "react-native";
import {useRouter} from "expo-router";
import {useEffect, useState} from "react";
import {screenHeight, screenWidth} from "@/utils/Scaling";
import {DecodedToken, LocationType} from "@/types/index.dt";
import {askForLocationPermission} from "@/utils/Location";
import {useAuthStore} from "@/state/authStore";
import {secureStorage} from "@/state/storage";
import routes from "@/constants/Routes";
import {jwtDecode} from "jwt-decode";
import {refetchUserApi, refreshTokenApi} from "@/service/authService";
import equals from "@/utils/functions/equals";

function SplashScreen() {
    const router = useRouter();
    const {user, setUser} = useAuthStore();

    const tokenCheck = async () => {
        const accessToken = await secureStorage.getItem('accessToken') as string;
        const refreshToken = await secureStorage.getItem('refreshToken') as string;

        console.log('access token:', accessToken);
        if (accessToken) {
            const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
            const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);

            const currentTime = Date.now() / 1000;
            if (decodedRefreshToken?.exp < currentTime) {
                router.replace(routes.customerLogin);
                Alert.alert('Session Expired', 'Please login again');
                return false;
            }
            if (decodedAccessToken?.exp < currentTime) {
                try {
                    await refreshTokenApi(router);
                    await refetchUserApi(setUser);
                } catch (err) {
                    console.log('Inside catch of refresh token ❌:', err);
                    Alert.alert('Error', 'There is an error refreshing token!');
                    return false;
                }
            }

            if (equals(user?.role, 'customer')) {
                router.replace(routes.productDashboard);
            } else if (equals(user?.role, 'deliverypartner')) {
                router.replace(routes.deliveryDashboard);
            }

            return true;
        }
        router.replace(routes.customerLogin);
        return false;
    }

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
        } else {
            tokenCheck();
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
