import {Image, View} from "react-native";
import {useCartStore} from "@/state/cartStore";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";
import OrderItem from "@/app/components/order/OrderItem";

function OrderList() {
    const cartItems = useCartStore((state) => state.cart);
    const totalItems = cartItems.reduce((acc, cart) => acc + cart?.count, 0);

    return (
        <View className={'bg-white rounded-md mb-4'}>
            <View className={'flex flex-row items-center gap-3 p-3'}>
                <View className={'bg-backgroundSecondary p-3 rounded-md'}>
                    <Image source={require('@/assets/icons/clock.png')} className={'w-7 h-7'}/>
                </View>
                <View>
                    <BlinkitText variant={'h5'} fontFamily={Fonts.SemiBold}>Delivery in 9 minutes</BlinkitText>
                    <BlinkitText variant={'h8'} style={{opacity: 0.5}} fontFamily={Fonts.SemiBold}>Shipment of {totalItems || 0} items</BlinkitText>
                </View>
            </View>

            {cartItems.map((cartItem) => (
                <OrderItem key={cartItem._id} item={cartItem}/>
            ))}
        </View>
    );
}

export default OrderList;
