import {Image, View} from "react-native";
import {OrderItemProps} from "@/types/index.dt";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import BlinkitAdd from "@/app/components/ui/BlinkitAdd";

function OrderItem({item}: OrderItemProps) {
    const {_id, product, count} = item || {};

    return (
        <View className={'flex flex-row items-center gap-x-3 p-3 border-t border-t-border'}>
            <View className={'flex justify-center items-center bg-backgroundSecondary p-2 rounded-md w-[16%]'}>
                <Image source={{uri: product?.image}} className={'w-10 h-10'}/>
            </View>
            <View className={'w-[55%]'}>
                <BlinkitText numberOfLines={2} variant={'h8'} fontFamily={Fonts.Medium}>{product?.name}</BlinkitText>
                <BlinkitText variant={'h9'}>{product?.quantity}</BlinkitText>
            </View>
            <View className={'flex w-[20%] items-end'}>
                <BlinkitAdd product={product}/>
                <BlinkitText variant={'h8'} fontFamily={Fonts.Medium} style={{marginTop: 4}}>₹{count * product?.price}</BlinkitText>
            </View>
        </View>
    );
}

export default OrderItem;
