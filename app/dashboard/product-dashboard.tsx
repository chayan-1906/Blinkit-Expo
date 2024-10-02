import {Animated, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useAuthStore} from "@/state/authStore";
import {secureStorage} from "@/state/storage";
import NoticeAnimation from "@/app/components/dashboard/NoticeAnimation";
import {NoticeHeight} from "@/utils/Scaling";
import {useEffect, useRef} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Visuals from "@/app/components/dashboard/Visuals";
import {CollapsibleContainer, CollapsibleHeaderContainer, withCollapsibleContext,} from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from "@/app/components/dashboard/AnimatedHeader";

const NOTICE_HEIGHT = -(NoticeHeight + 12);

function ProductDashboard() {
    const {user} = useAuthStore();

    const noticePosition = useRef(new Animated.Value(NOTICE_HEIGHT)).current;

    const slideUp = () => {
        Animated.timing(noticePosition, {
            toValue: NOTICE_HEIGHT,
            duration: 1200,
            useNativeDriver: false,
        }).start();
    }

    const slideDown = () => {
        Animated.timing(noticePosition, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: false,
        }).start();
    }

    useEffect(() => {
        slideDown();
        const timeoutId = setTimeout(() => slideUp(), 3500);
        return () => clearTimeout(timeoutId);
    }, []);

    // @ts-ignore
    return (
        <NoticeAnimation noticePosition={noticePosition}>
            <>
                <Visuals/>
                <SafeAreaView/>

                <CollapsibleContainer style={{flex: 1}}>
                    <CollapsibleHeaderContainer containerStyle={styles.transparent}>
                        <AnimatedHeader showNotice={() => {
                            slideDown();
                            setTimeout(() => slideUp(), 3500);
                        }}/>
                    </CollapsibleHeaderContainer>
                    <View>
                        <Text>Body content</Text>
                    </View>
                </CollapsibleContainer>

                {/*<Text className={'text-6xl text-red-400 font-black'}>ProductDashboard</Text>*/}
                <TouchableOpacity className={'mt-20 w-fit bg-red-500'} onPress={async () => await secureStorage.clearAll()}>
                    <Text className={'text-3xl'}>Logout</Text>
                </TouchableOpacity>
            </>
        </NoticeAnimation>
    );
}

export default withCollapsibleContext(ProductDashboard);

const styles = StyleSheet.create({
    transparent: {
        backgroundColor: 'transparent',
    },
});
