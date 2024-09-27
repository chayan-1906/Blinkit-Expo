import {Alert, Keyboard, ScrollView, StyleSheet, View} from "react-native";
import {useCallback, useState} from "react";
import routes from "@/constants/Routes";
import {router} from "expo-router";
import {useAuthStore} from "@/state/authStore";
import {deliveryPartnerLoginApi} from "@/service/authService";
import BlinkitSafeAreaView from "@/app/components/global/BlinkitSafeAreaView";
import {screenHeight} from "@/utils/Scaling";
import LottieView from "lottie-react-native";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import BlinkitInput from "@/app/components/ui/BlinkitInput";
import Icon from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";
import BlinkitButton from "@/app/components/ui/BlinkitButton";

function DeliveryPartnerLogin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const {setUser} = useAuthStore();

    const handleAuth = useCallback(async () => {
        Keyboard.dismiss();
        setLoading(true);
        try {
            const loginResponse = await deliveryPartnerLoginApi(email, password);
            console.log('loginResponse:', loginResponse);
            if (loginResponse?.deliveryPartner) {
                setUser(loginResponse.deliveryPartner);
                router.replace(routes.deliveryDashboard);
            } else {
                console.log('Error logging in ❌');
            }
        } catch (err) {
            console.log('Inside catch of handleAuth ❌', err);
            // Alert.alert('Login failed');
        } finally {
            setLoading(false);
        }
    }, [email, password]);

    return (
        <BlinkitSafeAreaView>
            <ScrollView keyboardShouldPersistTaps={'handled'} keyboardDismissMode={'on-drag'}>
                <View className={'flex flex-1 p-4 items-center'}>
                    {/** lottie */}
                    <View style={styles.lottieContainer}>
                        <LottieView autoPlay loop style={{height: '100%', width: '100%'}} source={require('@/assets/animations/delivery_man.json')}/>
                    </View>

                    <BlinkitText variant={'h3'} fontFamily={Fonts.Bold}>Delivery Partner Portal</BlinkitText>
                    <BlinkitText variant={'h6'} fontFamily={Fonts.SemiBold} classes={''}>Faster than Flash ⚡️</BlinkitText>

                    {/** email */}
                    <BlinkitInput
                        value={email}
                        left={<Icon name={'mail'} color={'#F8890E'} size={RFValue(18)} style={{marginLeft: 10}}/>}
                        onChangeText={setEmail} placeholder={'Email'} inputMode={'email'} autoCapitalize={'none'}
                        right={false}
                    />

                    {/** password */}
                    <BlinkitInput
                        value={password}
                        left={<Icon name={'key'} color={'#F8890E'} size={RFValue(18)} style={{marginLeft: 10}}/>}
                        onChangeText={setPassword} placeholder={'Password'} inputMode={'text'} secureTextEntry
                        right={false}
                    />

                    {/** login button */}
                    <BlinkitButton title={'Login'} loading={loading} disabled={email.length === 0 || password.length === 0} onPress={handleAuth}/>
                </View>
            </ScrollView>
        </BlinkitSafeAreaView>
    );
}

export default DeliveryPartnerLogin;

const styles = StyleSheet.create({
    lottieContainer: {
        height: screenHeight * 0.12,
        width: '100%',
    },
});
