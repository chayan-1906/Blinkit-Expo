import {GestureHandlerRootView, PanGestureHandler, State} from "react-native-gesture-handler";
import BlinkitSafeAreaView from "@/app/components/global/BlinkitSafeAreaView";
import ProductSlider from "@/app/components/login/ProductSlider";
import {Animated, Image, View} from "react-native";
import {useCallback, useState} from "react";
import {useRouter} from "expo-router";
import routes from "@/constants/Routes";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import BlinkitInput from "@/app/components/ui/BlinkitInput";
import BlinkitButton from "@/app/components/ui/BlinkitButton";

function CustomerLogin() {
    const [gestureSequence, setGestureSequence] = useState<string[]>([]);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleGesture = useCallback(({nativeEvent}: any) => {
        if (nativeEvent.state === State.END) {
            const {translationX, translationY} = nativeEvent;
            let direction = '';
            if (Math.abs(translationX) > Math.abs(translationY)) {
                direction = translationX > 0 ? 'right' : 'left';
            } else {
                direction = translationY > 0 ? 'down' : 'up';
            }

            // console.log(translationX, translationY, direction);
            const newSequence = [...gestureSequence, direction].slice(-5);
            setGestureSequence(newSequence);
            console.log(newSequence);

            if (newSequence.join(' ') === 'up up down left right') {
                setGestureSequence([]);
                router.replace(routes.deliveryPartnerLogin);
            }
        }
    }, [gestureSequence]);

    const handleAuth = useCallback(async () => {

    }, []);

    return (
        <GestureHandlerRootView className={'flex-1'}>
            <BlinkitSafeAreaView>
                <ProductSlider/>
                <PanGestureHandler onHandlerStateChange={handleGesture}>
                    <Animated.ScrollView bounces={false} keyboardDismissMode={'on-drag'} keyboardShouldPersistTaps={'handled'}
                                         contentContainerStyle={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <View className={'flex justify-center items-center w-full px-5 pt-3 bg-white'}>
                            <Image source={require('@/assets/images/logo.png')} resizeMode={'contain'} className={'h-12 w-12 rounded-lg mb-3'}/>
                            <BlinkitText variant={'h2'} fontFamily={Fonts.Bold}>India's last minute app</BlinkitText>
                            <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold} numberOfLines={2} classes={'mt-1 mb-6'} style={{opacity: 0.8}}>Log in or sign up</BlinkitText>
                            <BlinkitInput
                                left={<BlinkitText variant={'h6'} fontFamily={Fonts.SemiBold} classes={'ml-3'}>+ 91</BlinkitText>}
                                value={phoneNumber}
                                onChangeText={(text: string) => setPhoneNumber(text.slice(0.10))}
                                placeholder={'Enter your phone number...'}
                                inputMode={'numeric'}
                                onClear={() => setPhoneNumber('')}
                            />
                            <BlinkitButton title={'Continue'} loading={loading} disabled={phoneNumber.length !== 10} onPress={handleAuth}/>
                        </View>
                    </Animated.ScrollView>
                </PanGestureHandler>
            </BlinkitSafeAreaView>
        </GestureHandlerRootView>
    );
}

export default CustomerLogin;
