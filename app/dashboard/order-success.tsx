import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";
import {screenWidth} from "@/utils/Scaling";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Colors, Fonts} from "@/utils/Constants";
import {useAuthStore} from "@/state/authStore";
import {useEffect} from "react";
import {useRouter} from "expo-router";
import Routes from "@/constants/Routes";

function OrderSuccess() {
    const {user} = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.replace(Routes.liveTracking);
        }, 2300);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View className={'flex-1 items-center justify-center'}>
            <LottieView
                source={require('@/assets/animations/confirm.json')}
                autoPlay duration={2000} loop={false} speed={1} hardwareAccelerationAndroid
                style={styles.lottieView} enableMergePathsAndroidForKitKatAndAbove
            />
            <BlinkitText variant={'h8'} fontFamily={Fonts.SemiBold} style={styles.orderPlacedText}>ORDER PLACED</BlinkitText>
            <View className={'border-b-2 pb-1 mb-1 border-secondary'}>
                <BlinkitText variant={'h4'} fontFamily={Fonts.SemiBold} style={styles.deliveryText}>Delivery to Home</BlinkitText>
            </View>
            <BlinkitText variant={'h8'} style={styles.addressText} fontFamily={Fonts.Medium}>{user.address || 'Nowhere, Somewhere 😅'}</BlinkitText>
        </View>
    );
}

export default OrderSuccess;

const styles = StyleSheet.create({
    lottieView: {
        width: screenWidth * 0.6,
        height: 150,
    },
    orderPlacedText: {
        opacity: 0.4,
    },
    deliveryText: {
        marginTop: 4,
        borderColor: Colors.secondary,
    },
    addressText: {
        width: '80%',
        opacity: 0.8,
        marginTop: 10,
        textAlign: 'center',
    },
});
