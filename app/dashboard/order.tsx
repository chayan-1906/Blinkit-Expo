import BlinkitHeader from "@/app/components/ui/BlinkitHeader";
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Colors, Fonts} from "@/utils/Constants";
import OrderList from "@/app/components/order/OrderList";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {RFValue} from "react-native-responsive-fontsize";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {useCartStore} from "@/state/cartStore";
import BillDetails from "@/app/components/order/BillDetails";
import {hocStyles} from "@/styles/GlobalStyles";
import {useAuthStore} from "@/state/authStore";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";

function Order() {
    const {getTotalPrice, cart, clearCart} = useCartStore();
    const {user} = useAuthStore();

    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView className={'flex-1 flex bg-white'}>
            <BlinkitHeader title={'Checkout'}/>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/** ordered list */}
                <OrderList/>

                {/** coupons */}
                <View className={'flex flex-row justify-between items-center bg-white pr-2 rounded-md'}>
                    <View className={'flex flex-row p-3 items-center gap-3'}>
                        <Image source={require('@/assets/icons/coupon.png')} style={{width: 25, height: 25}}/>
                        <BlinkitText variant={'h6'} fontFamily={Fonts.SemiBold}>Use Coupons</BlinkitText>
                    </View>
                    <Icon name={'chevron-right'} size={RFValue(16)} color={Colors.text}/>
                </View>

                {/** bill details */}
                <BillDetails totalItemPrice={getTotalPrice()}/>

                {/** cancellation policy */}
                <View className={'flex bg-white p-2 rounded-md'}>
                    <BlinkitText variant={'h8'} fontFamily={Fonts.SemiBold}>Cancellation Policy</BlinkitText>
                    <BlinkitText variant={'h9'} numberOfLines={5} fontFamily={Fonts.SemiBold} style={{marginTop: 4, opacity: 0.6}}>
                        Orders can't be cancelled once packed for delivery, in case of unexpected delays a refund will be provided, if applicable
                    </BlinkitText>
                </View>
            </ScrollView>

            <View style={hocStyles.cartContainer}>
                <View className={`my-4 ${Platform.OS === 'ios' ? 'mb-7' : 'mb-3'}`}>
                    <View className={'flex flex-row justify-between items-center px-3 pb-3 border-b border-border'}>
                        <View className={'flex flex-row gap-2'}>
                            {/** home icon */}
                            <Image source={require('@/assets/icons/home.png')} style={{width: 20, height: 20}}/>

                            {/** address */}
                            <View className={'w-[75%]'}>
                                <BlinkitText variant={'h8'} fontFamily={Fonts.Medium}>Delivering to Home</BlinkitText>
                                <BlinkitText variant={'h9'} numberOfLines={2} style={{opacity: 0.6}}>{user?.address}</BlinkitText>
                            </View>
                        </View>

                        {/** change */}
                        <TouchableOpacity>
                            <BlinkitText variant={'h8'} style={{color: Colors.secondary}} fontFamily={Fonts.Medium}>Change</BlinkitText>
                        </TouchableOpacity>
                    </View>

                    {/** payment gateway */}
                    <View className={'flex flex-row justify-between items-center pl-4'}>
                        <View style={{width: '30%'}}>
                            <BlinkitText variant={'h6'} fontFamily={Fonts.Regular}>💰 PAY USING</BlinkitText>
                            <BlinkitText variant={'h9'} fontFamily={Fonts.Regular} style={{marginTop: 2}}>Cash on Delivery</BlinkitText>
                        </View>

                        <View className={'w-[70%]'}>
                            {/*<ArrowButton loading={loading} price={getTotalPrice()} title={'Place Order'} onPress={() => {}}/>*/}
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Order;

const styles = StyleSheet.create({
    scrollContainer: {
        gap: 16,
        padding: 10,
        backgroundColor: Colors.backgroundSecondary,
        paddingBottom: 70,
    },
});
