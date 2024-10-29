import {ActivityIndicator, TouchableOpacity, View} from "react-native";
import {BlinkitArrowButtonProps} from "@/types/index.dt";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";

function BlinkitArrowButton({title, onPress, price, loading}: BlinkitArrowButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.8} disabled={loading} onPress={onPress}
                          className={`flex flex-row ${price !== 0 ? 'justify-between' : 'justify-center'} items-center rounded-lg my-3 mx-4 bg-secondary p-3`}>
            {price !== 0 && price && (
                <View>
                    <BlinkitText variant={'h7'} fontFamily={Fonts.Medium} style={{color: 'white'}}>₹{price + 34}.0</BlinkitText>
                    <BlinkitText variant={'h9'} fontFamily={Fonts.Medium} style={{color: 'white'}}>TOTAL</BlinkitText>
                </View>
            )}

            <View className={'flex flex-row justify-center items-center'}>
                <BlinkitText variant={'h6'} style={{color: 'white'}} fontFamily={Fonts.Medium}>{title}</BlinkitText>
                {loading ? <ActivityIndicator size={'small'} color={'white'} style={{marginHorizontal: 5}}/> : <Icon name={'arrow-right'} color={'white'} size={RFValue(25)}/>}
            </View>
        </TouchableOpacity>
    );
}

export default BlinkitArrowButton;
