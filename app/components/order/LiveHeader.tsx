import {SafeAreaView} from "react-native-safe-area-context";
import {LiveHeaderProps} from "@/types/index.dt";
import {Pressable, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {useRouter} from "expo-router";
import Routes from "@/constants/Routes";
import equals from "@/utils/functions/equals";
import {useAuthStore} from "@/state/authStore";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {RFValue} from "react-native-responsive-fontsize";
import {Fonts} from "@/utils/Constants";

function LiveHeader({type, title, description}: LiveHeaderProps) {
    const {currentOrder, setCurrentOrder} = useAuthStore();
    const router = useRouter();
    const isCustomer = type === 'Customer';

    return (
        <SafeAreaView>
            <View className={'flex justify-center items-center py-2'}>
                <Pressable className={'absolute left-5'} onPress={() => {
                    if (isCustomer) {
                        router.replace(Routes.productDashboard);
                        if (equals(currentOrder.status, 'delivered')) {
                            setCurrentOrder(null);
                        }
                        return;
                    }
                    router.replace(Routes.deliveryDashboard);
                }}>
                    <Icon name={'chevron-back'} size={RFValue(16)} color={isCustomer ? '#FFF' : '#000'}/>
                </Pressable>
                <BlinkitText variant={'h8'} fontFamily={Fonts.Medium} style={isCustomer ? {color: 'white'} : {color: 'black'}}>{title}</BlinkitText>
                <BlinkitText variant={'h4'} fontFamily={Fonts.SemiBold} style={isCustomer ? {color: 'white'} : {color: 'black'}}>{description}</BlinkitText>
            </View>
        </SafeAreaView>
    );
}

export default LiveHeader;
