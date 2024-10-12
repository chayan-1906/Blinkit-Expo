import {Animated as RNAnimated, Platform, TouchableOpacity, View} from "react-native";
import {useAuthStore} from "@/state/authStore";
import NoticeAnimation from "@/app/components/dashboard/NoticeAnimation";
import {NoticeHeight, screenHeight} from "@/utils/Scaling";
import {useEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {CollapsibleContainer, CollapsibleHeaderContainer, CollapsibleScrollView, useCollapsibleContext, withCollapsibleContext,} from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from "@/app/components/dashboard/AnimatedHeader";
import StickySearchBar from "@/app/components/dashboard/StickySearchBar";
import ContentContainer from "@/app/components/dashboard/ContentContainer";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {RFValue} from "react-native-responsive-fontsize";
import {Fonts} from "@/utils/Constants";
import Visuals from "@/app/components/dashboard/Visuals";
import Icon from "react-native-vector-icons/Ionicons";
import Animated, {useAnimatedStyle, withTiming} from "react-native-reanimated";
import withCart from "@/app/components/cart/WithCart";

const NOTICE_HEIGHT = -(NoticeHeight + 18);

function ProductDashboard() {
    const {user} = useAuthStore();
    const [isNoticeOpened, setIsNoticeOpened] = useState(true);
    const noticePosition = useRef(new RNAnimated.Value(NOTICE_HEIGHT)).current;

    const {scrollY, expand} = useCollapsibleContext();
    const previousScroll = useRef<number>(0);

    const backToTopStyle = useAnimatedStyle(() => {
        const isScrollingUp = scrollY.value < previousScroll.current && scrollY.value > 180;
        const opacity = withTiming(isScrollingUp ? 1 : 0, {duration: 300});
        const translateY = withTiming(isScrollingUp ? 0 : 10, {duration: 300});

        previousScroll.current = scrollY.value;
        return {opacity, transform: [{translateY}]};
    });

    const SafeAreaContent = () => {
        return (
            <CollapsibleContainer style={{flex: 1}}>
                <CollapsibleHeaderContainer containerStyle={{backgroundColor: 'transparent'}}>
                    <AnimatedHeader showNotice={() => {
                        slideDown();
                        // setTimeout(() => slideUp(), 3500);
                    }}/>
                    <StickySearchBar/>
                </CollapsibleHeaderContainer>

                <CollapsibleScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    <ContentContainer/>
                    <View className={'bg-[#F8F8F8] p-5'}>
                        <BlinkitText fontSize={RFValue(32)} fontFamily={Fonts.Bold} style={{opacity: 0.2}} numberOfLines={2}>India's last minute app 🥭</BlinkitText>
                        <BlinkitText fontFamily={Fonts.Bold} style={{marginTop: 10, paddingBottom: 100, opacity: 0.2}} numberOfLines={2}>Developed by ❤️ Padmanabha</BlinkitText>
                    </View>
                </CollapsibleScrollView>
            </CollapsibleContainer>
        );
    }

    const slideUp = () => {
        RNAnimated.timing(noticePosition, {
            toValue: NOTICE_HEIGHT,
            duration: 1200,
            useNativeDriver: false,
        }).start();

        setTimeout(() => setIsNoticeOpened(false), 1200);
    }

    const slideDown = () => {
        RNAnimated.timing(noticePosition, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: false,
        }).start();
    }

    useEffect(() => {
        slideDown();
        // const timeoutId = setTimeout(() => slideUp(), 3500);
        // return () => clearTimeout(timeoutId);
    }, []);

    return (
        <NoticeAnimation noticePosition={noticePosition}>
            <>
                <Visuals/>
                {/*{JSON.stringify(noticePosition) !== NOTICE_HEIGHT  && <SafeAreaView/>}*/}
                {/*<SafeAreaView/>*/}

                <Animated.View className={'absolute flex flex-row self-center items-center bg-black rounded-2xl px-3 py-2 z-50'}
                               style={[backToTopStyle, {top: Platform.OS === 'ios' ? screenHeight * 0.18 : 100}]}>
                    <TouchableOpacity onPress={() => {
                        scrollY.value = 0;
                        expand();
                    }} className={'flex flex-row items-center gap-2'}>
                        <Icon name={'arrow-up-circle-outline'} color={'white'} size={RFValue(12)}/>
                        <BlinkitText variant={'h9'} style={{color: 'white'}} fontFamily={Fonts.SemiBold}>Back to top</BlinkitText>
                    </TouchableOpacity>
                </Animated.View>

                {
                    isNoticeOpened ? (
                        <SafeAreaContent/>
                    ) : (
                        <SafeAreaView className={'flex-1 pt-0'} style={{marginTop: 0, paddingTop: 0}}>
                            <SafeAreaContent/>
                        </SafeAreaView>
                    )
                }
            </>
        </NoticeAnimation>
    );
}

export default withCart(withCollapsibleContext(ProductDashboard));
