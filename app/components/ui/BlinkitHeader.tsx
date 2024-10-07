import {SafeAreaView} from "react-native-safe-area-context";
import {BlinkitHeaderProps} from "@/types/index.dt";
import {Pressable, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Colors, Fonts} from "@/utils/Constants";
import {RFValue} from "react-native-responsive-fontsize";
import BlinkitText from "@/app/components/ui/BlinkitText";

function BlinkitHeader({title, search}: BlinkitHeaderProps) {
    return (
        <SafeAreaView>
            <View className={'flex flex-row bg-white items-center justify-between p-3 h-14 border-b border-border'}>
                <Pressable>
                    <Icon name={'chevron-back'} color={Colors.text} size={RFValue(16)}/>
                </Pressable>
                <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold}>{title}</BlinkitText>
                <View>
                    {search && (
                        <Icon name={'search'} color={Colors.text} size={RFValue(16)}/>
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BlinkitHeader;
