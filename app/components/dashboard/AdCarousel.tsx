import {Image, StyleSheet, View} from "react-native";
import {useSharedValue} from "react-native-reanimated";
import {screenWidth} from "@/utils/Scaling";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import ScalePress from "@/app/components/ui/ScalePress";

function AdCarousel({adData}: { adData: any }) {
    const progressValue = useSharedValue(0);

    const baseOptions = {
        vertical: false,
        width: screenWidth,
        height: screenWidth * 0.50,
    }

    return (
        <View className={'-left-5 mb-3'}>
            <Carousel
                {...baseOptions} loop pagingEnabled snapEnabled autoPlay autoPlayInterval={3000} mode={'parallax'} data={adData}
                modeConfig={{parallaxScrollingOffset: 0, parallaxScrollingScale: 0.94}} renderItem={({item}: any) => {
                return (
                    <ScalePress style={{width: '100%', height: '100%'}}>
                        <Image source={item} className={'w-full h-full rounded-lg'} resizeMode={'cover'}/>
                    </ScalePress>
                );
            }}/>
        </View>
    );
}

export default AdCarousel;
