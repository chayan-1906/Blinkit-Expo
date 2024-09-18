import {GestureHandlerRootView, PanGestureHandler, State} from "react-native-gesture-handler";
import BlinkitSafeAreaView from "@/app/components/global/BlinkitSafeAreaView";
import ProductSlider from "@/app/components/login/ProductSlider";
import {Animated} from "react-native";
import {useCallback, useState} from "react";
import {useRouter} from "expo-router";
import routes from "@/constants/Routes";

function CustomerLogin() {
    const [gestureSequence, setGestureSequence] = useState<string[]>([]);
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

    return (
        <GestureHandlerRootView className={'flex-1'}>
            <BlinkitSafeAreaView>
                <ProductSlider/>
                <PanGestureHandler onHandlerStateChange={handleGesture}>
                    <Animated.ScrollView bounces={false} keyboardDismissMode={'on-drag'} keyboardShouldPersistTaps={'handled'}
                                         contentContainerStyle={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20}}>

                    </Animated.ScrollView>
                </PanGestureHandler>
            </BlinkitSafeAreaView>
        </GestureHandlerRootView>
    );
}

export default CustomerLogin;
