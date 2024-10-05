"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Scaling_1 = require("@/utils/Scaling");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var BlinkitText_1 = require("@/app/components/ui/BlinkitText");
var Constants_1 = require("@/utils/Constants");
var react_native_svg_1 = require("react-native-svg");
var dummyData_1 = require("@/utils/dummyData");
function Notice() {
    return (<react_native_1.View style={{ height: Scaling_1.NoticeHeight }}>
            <react_native_1.View className={'bg-[#CCD5E4]'}>
                <react_native_1.View className={'flex justify-center items-center bg-[#CCD5E4]'}>
                    <react_native_safe_area_context_1.SafeAreaView className={''}>
                        <BlinkitText_1.default classes={'text-center text-[#2D3875] mb-2'} variant={'h7'} fontFamily={Constants_1.Fonts.SemiBold}>It's raining near this location</BlinkitText_1.default>
                        <BlinkitText_1.default classes={'mb-2'} variant={'h8'}>Our delivery partners may take longer to reach you</BlinkitText_1.default>
                    </react_native_safe_area_context_1.SafeAreaView>
                </react_native_1.View>
            </react_native_1.View>

            {/** svg*/}
            <react_native_svg_1.default width={'100%'} height={35} fill={'#CCD5E4'} viewBox={'0 0 4000 1000'} preserveAspectRatio={'none'} style={{ transform: [{ rotateX: '180deg' }] }} className={'w-full'}>
                <react_native_svg_1.Defs>
                    <react_native_svg_1.Path id={'wavepath'} d={dummyData_1.wavyData}/>
                </react_native_svg_1.Defs>
                <react_native_svg_1.G>
                    <react_native_svg_1.Use href={'#wavepath'} y={'321'}/>
                </react_native_svg_1.G>
            </react_native_svg_1.default>
        </react_native_1.View>);
}
exports.default = Notice;
