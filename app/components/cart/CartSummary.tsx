import {Image, TouchableOpacity, View} from "react-native";
import {screenHeight, screenWidth} from "@/utils/Scaling";
import BlinkitText from "@/app/components/ui/BlinkitText";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Colors, Fonts} from "@/utils/Constants";
import {RFValue} from "react-native-responsive-fontsize";
import {useRouter} from "expo-router";
import Routes from "@/constants/Routes";
import routes from "@/constants/Routes";

function CartSummary({cartCount, cartImage}: { cartCount: number, cartImage: string }) {
    const router = useRouter();

    return (
        <View className={'flex flex-row justify-between items-center'} style={{paddingHorizontal: screenWidth * 0.05, paddingBottom: screenHeight * 0.03, paddingTop: screenHeight * 0.014}}>
            <View className={'flex flex-row items-center gap-2'}>
                <Image source={cartImage === null ? require('@/assets/icons/bucket.png') : {uri: cartImage}} alt={'cart-image'} resizeMode={'cover'}
                       className={'flex h-14 w-14 items-center justify-center rounded-md bg-secondary px-1'}/>
                <BlinkitText fontFamily={Fonts.SemiBold}>{cartCount} ITEM{cartCount > 1 ? 'S' : ''}</BlinkitText>
                <Icon name={'arrow-drop-up'} color={Colors.secondary} size={RFValue(25)}/>
            </View>

            <TouchableOpacity className={'flex flex-row justify-center items-center px-4 py-2 rounded-md bg-secondary'} activeOpacity={0.7} onPress={() => router.push(routes.cart)}>
                <BlinkitText classes={'ml-1 text-white'} fontFamily={Fonts.Medium}>Next</BlinkitText>
                <Icon name={'arrow-right'} color={'white'} size={RFValue(22)}/>
            </TouchableOpacity>
        </View>
    );
}

export default CartSummary;
