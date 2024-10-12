import {Product} from "@/types/index.dt";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {screenHeight} from "@/utils/Scaling";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {RFValue} from "react-native-responsive-fontsize";
import {Fonts} from "@/utils/Constants";
import BlinkitAdd from "@/app/components/ui/BlinkitAdd";
import {useCartStore} from "@/state/cartStore";

function ProductItem({product, index}: { product: Product, index: number }) {
    const isEvenColumn = index % 2 !== 0;
    const {_id, name, image, price, discountPrice, quantity} = product || {};

    const {clearCart} = useCartStore();

    return (
        <TouchableOpacity className={'w-[45%] rounded-lg bg-white px-3 pt-1 mb-2 ml-2 overflow-hidden'} style={{marginRight: isEvenColumn ? 10 : 0}}>
            <View className={'w-full justify-center items-center '} style={{height: screenHeight * 0.12}}>
                <Image source={{uri: image}} resizeMode={'contain'} className={'h-full w-full aspect-square'}/>
            </View>
            <View className={'flex-1'}>
                <View className={'flex flex-row p-0.5 self-start items-center justify-center rounded-md bg-backgroundSecondary'}>
                    <Image source={require('@/assets/icons/clock.png')} className={'h-4 w-4'}/>
                    <BlinkitText fontSize={RFValue(10)} fontFamily={Fonts.Medium}>8 Mins</BlinkitText>
                </View>
            </View>
            <BlinkitText variant={'h8'} numberOfLines={2} style={{marginVertical: 4}} fontFamily={Fonts.Medium}>{name}</BlinkitText>
            <View className={'flex  flex-row items-center justify-between py-3 mt-auto'}>
                <View className={'flex flex-col'}>
                    <BlinkitText variant={'h8'} fontFamily={Fonts.Medium}>₹{price}</BlinkitText>
                    <BlinkitText variant={'h8'} fontFamily={Fonts.Medium} style={{opacity: 0.8, textDecorationLine: 'line-through'}}>₹{discountPrice}</BlinkitText>
                </View>
                <BlinkitAdd product={product}/>
            </View>

            <TouchableOpacity className={'bg-red-400 p-5'} onPress={clearCart}>
                <Text className={'font-bold'}>Clear Cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default ProductItem;
