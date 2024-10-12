import {Pressable, View} from "react-native";
import {Product} from "@/types/index.dt";
import {useCartStore} from "@/state/cartStore";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Colors} from "@/constants/Colors";
import {RFValue} from "react-native-responsive-fontsize";

function BlinkitAdd({product}: { product: Product }) {
    const count = useCartStore((state) => state.getItemCount(product._id));
    const {addItem, removeItem} = useCartStore();

    return (
        <View className={`flex w-16 items-center justify-center ${count === 0 ? 'bg-white' : 'bg-secondary'} border border-secondary rounded-md`}>
            {
                count === 0 ? (
                    <Pressable onPress={() => addItem(product)} className={'w-full items-center justify-center px-1 py-2'}>
                        <BlinkitText variant={'h9'} fontFamily={Fonts.SemiBold} classes={'text-secondary'}>ADD</BlinkitText>
                    </Pressable>
                ) : (
                    <View className={'flex flex-row w-full justify-between items-center px-1 py-1.5'}>
                        {/** minus */}
                        <Pressable onPress={() => removeItem(product._id)}>
                            <Icon name={'minus'} color={Colors.light.background} size={RFValue(13)}/>
                        </Pressable>
                        <BlinkitText variant={'h8'} fontFamily={Fonts.SemiBold} classes={'text-white'}>{count}</BlinkitText>
                        {/** plus */}
                        <Pressable onPress={() => addItem(product)}>
                            <Icon name={'plus'} color={Colors.light.background} size={RFValue(13)}/>
                        </Pressable>
                    </View>
                )
            }
        </View>
    );
}

export default BlinkitAdd;
