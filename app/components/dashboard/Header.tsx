import {Platform, TouchableOpacity, View} from "react-native";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import {RFValue} from "react-native-responsive-fontsize";
import {useAuthStore} from "@/state/authStore";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Header({showNotice}: { showNotice: () => void }) {
    const {user, setUser} = useAuthStore();

    return (
        <View className={`flex flex-row items-center justify-between px-3 ${Platform.OS === 'android' ? 'pt-3' : 'pt-1'}`}>
            <TouchableOpacity activeOpacity={0.8}>
                <BlinkitText fontFamily={Fonts.Bold} variant={'h8'} classes={'text-white'}>Delivery in</BlinkitText>
                <View className={'flex flex-row items-center gap-2'}>
                    <BlinkitText fontFamily={Fonts.SemiBold} variant={'h2'} classes={'text-white'}>10 minutes</BlinkitText>
                    <TouchableOpacity className={'bg-[#E8EAF5] rounded-2xl px-2 py-1'} onPress={showNotice}>
                        <BlinkitText fontSize={RFValue(8)} fontFamily={Fonts.SemiBold} classes={'text-[#3B4886]'}>⛈️ Rain</BlinkitText>
                    </TouchableOpacity>
                </View>

                <View className={'flex flex-row items-center gap-2'}>
                    <BlinkitText variant={'h8'} numberOfLines={1} fontFamily={Fonts.Medium} classes={'text-white'}>{user?.address || 'Nowhere, Somewhere 😅'}</BlinkitText>
                    <Icon name={'menu-down'} color={'white'} size={RFValue(20)} className={''}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name={'account-circle-outline'} size={RFValue(36)} color={'white'}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;
