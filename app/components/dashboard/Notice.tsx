import {View} from "react-native";
import {NoticeHeight} from "@/utils/Scaling";
import {SafeAreaView} from "react-native-safe-area-context";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import Svg, {Defs, G, Path, Use} from "react-native-svg";
import {wavyData} from "@/utils/dummyData";

function Notice() {
    return (
        <View style={{height: NoticeHeight}}>
            <View className={'bg-[#CCD5E4]'}>
                <View className={'flex justify-center items-center bg-[#CCD5E4]'}>
                    <SafeAreaView className={''}>
                        <BlinkitText classes={'text-center text-[#2D3875] mb-2'} variant={'h7'} fontFamily={Fonts.SemiBold}>It's raining near this location</BlinkitText>
                        <BlinkitText classes={'mb-2'} variant={'h8'}>Our delivery partners may take longer to reach you</BlinkitText>
                    </SafeAreaView>
                </View>
            </View>

            {/** svg*/}
            <Svg width={'100%'} height={35} fill={'#CCD5E4'} viewBox={'0 0 4000 1000'} preserveAspectRatio={'none'} style={{transform: [{rotateX: '180deg'}]}} className={'w-full'}>
                <Defs>
                    <Path id={'wavepath'} d={wavyData}/>
                </Defs>
                <G>
                    <Use href={'#wavepath'} y={'321'}/>
                </G>
            </Svg>
        </View>
    );
}

export default Notice;
