import {Animated, ScrollView, View} from "react-native";
import {useAuthStore} from "@/state/authStore";
import NoticeAnimation from "@/app/components/dashboard/NoticeAnimation";
import {NoticeHeight} from "@/utils/Scaling";
import {useEffect, useRef} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {CollapsibleContainer, CollapsibleFlatList, CollapsibleHeaderContainer, CollapsibleScrollView, withCollapsibleContext,} from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from "@/app/components/dashboard/AnimatedHeader";
import StickySearchBar from "@/app/components/dashboard/StickySearchBar";
import ContentContainer from "@/app/components/dashboard/ContentContainer";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {RFValue} from "react-native-responsive-fontsize";
import {Fonts} from "@/utils/Constants";
import {data} from "@remix-run/router/utils";
import Visuals from "@/app/components/dashboard/Visuals";

const NOTICE_HEIGHT = -(NoticeHeight + 18);

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

    return (
        <NoticeAnimation noticePosition={noticePosition}>
            <>
                <Visuals/>
                {/*{JSON.stringify(noticePosition) !== NOTICE_HEIGHT  && <SafeAreaView/>}*/}
                {/*<SafeAreaView/>*/}

                <SafeAreaView className={'flex-1'}>
                    <CollapsibleContainer style={{flex: 1}}>
                        <CollapsibleHeaderContainer containerStyle={{backgroundColor: 'transparent'}}>
                            <AnimatedHeader showNotice={() => {
                                slideDown();
                                setTimeout(() => slideUp(), 3500);
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
                </SafeAreaView>
            </>
        </NoticeAnimation>
    );
}

export default withCollapsibleContext(ProductDashboard);
