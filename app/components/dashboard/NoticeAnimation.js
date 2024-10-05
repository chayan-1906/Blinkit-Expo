"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Scaling_1 = require("@/utils/Scaling");
var Notice_1 = require("@/app/components/dashboard/Notice");
var NOTICE_HEIGHT = -(Scaling_1.NoticeHeight + 12);
function NoticeAnimation(_a) {
    var noticePosition = _a.noticePosition, children = _a.children;
    return (<react_native_1.View className={'flex-1 bg-white'}>
            {/** notice */}
            <react_native_1.Animated.View className={'w-full absolute z-50'} style={{ transform: [{ translateY: noticePosition }] }}>
                <Notice_1.default />
            </react_native_1.Animated.View>

            {/**  */}
            <react_native_1.Animated.View className={'flex-1 w-full'} style={{
            paddingTop: noticePosition.interpolate({ inputRange: [NOTICE_HEIGHT, 0], outputRange: [-20, NOTICE_HEIGHT + 20] })
        }}>
                {children}
            </react_native_1.Animated.View>
        </react_native_1.View>);
}
exports.default = NoticeAnimation;
