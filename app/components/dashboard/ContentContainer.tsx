import {View} from "react-native";
import {adData, categories} from "@/utils/dummyData";
import AdCarousel from "@/app/components/dashboard/AdCarousel";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import CategoryContainer from "@/app/components/dashboard/CategoryContainer";

function ContentContainer() {
    return (
        <View className={'px-5'}>
            <AdCarousel adData={adData}/>
            <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold}>Grocery & Kitchen</BlinkitText>
            <CategoryContainer data={categories}/>
            <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold}>Bestsellers</BlinkitText>
            <CategoryContainer data={categories}/>
            <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold}>Snacks & Drinks</BlinkitText>
            <CategoryContainer data={categories}/>
            <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold}>Home & Lifestyle</BlinkitText>
            <CategoryContainer data={categories}/>
        </View>
    );
}

export default ContentContainer;
