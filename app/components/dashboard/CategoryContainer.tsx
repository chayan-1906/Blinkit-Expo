import {Image, View} from "react-native";
import ScalePress from "@/app/components/ui/ScalePress";
import {useRouter} from "expo-router";
import routes from "@/constants/Routes";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";

function CategoryContainer({data}) {
    const router = useRouter();

    const renderItems = (items: any[]) => {
        return (
            <>
                {
                    items.map((item, index) => {
                        return (
                            <ScalePress key={index} onPress={() => router.push(routes.productCategories)} style={{width: '22%', justifyContent: 'center', alignItems: 'center'}}>
                                <View className={'w-full h-20 items-center justify-center rounded-md p-2 bg-[#E5F3F3] mb-2'}>
                                    <Image source={item.image} className={'w-full h-full'} resizeMode={'contain'}/>
                                </View>
                                <BlinkitText variant={'h8'} fontFamily={Fonts.Medium} style={{textAlign: 'center'}} numberOfLines={2}>{item.name}</BlinkitText>
                            </ScalePress>
                        );
                    })
                }
            </>
        );
    }

    return (
        <View className={'my-3'}>
            <View className={'flex flex-row justify-between items-baseline'}>{renderItems(data?.slice(0, 4))}</View>
            <View className={'flex flex-row justify-between items-baseline mb-6'}>{renderItems(data?.slice(4, 8))}</View>
        </View>
    );
}

export default CategoryContainer;
