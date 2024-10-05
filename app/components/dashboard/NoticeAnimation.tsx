import {Animated, View} from "react-native";
import {NoticeAnimationProps} from "@/types/index.dt";
import {NoticeHeight} from "@/utils/Scaling";
import Notice from "@/app/components/dashboard/Notice";

const NOTICE_HEIGHT = -(NoticeHeight + 12);

function NoticeAnimation({noticePosition, children}: NoticeAnimationProps) {
    return (
        <View className={'flex-1 bg-white'}>
            {/** notice */}
            <Animated.View className={'w-full absolute z-50'} style={{transform: [{translateY: noticePosition}]}}>
                <Notice/>
            </Animated.View>

            {/**  */}
            <Animated.View
                className={'flex-1 w-full'}
                style={{
                    paddingTop: noticePosition.interpolate({inputRange: [NOTICE_HEIGHT, 0], outputRange: [-20, NOTICE_HEIGHT + 20]})
                }}>
                {children}
            </Animated.View>
        </View>
    );
}

export default NoticeAnimation;
