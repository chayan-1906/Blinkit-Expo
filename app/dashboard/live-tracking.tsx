import {ScrollView, StyleSheet, View} from "react-native";
import {useAuthStore} from "@/state/authStore";
import {useCallback, useEffect} from "react";
import {getOrderByIdApi} from "@/service/orderService";
import equals from "@/utils/functions/equals";
import LiveHeader from "@/app/components/order/LiveHeader";
import {Colors} from "@/utils/Constants";
import LiveMap from "@/app/components/map/livemap";

function LiveTracking() {
    const {currentOrder, setCurrentOrder} = useAuthStore();

    let message = 'Packaging your order';
    let time = 'Arriving in 10 minutes';

    if (equals(currentOrder?.status, 'confirmed')) {
        message = 'Arriving soon';
        time = 'Arriving in 8 minutes';
    } else if (equals(currentOrder?.status, 'arriving')) {
        message = 'Order Picked up';
        time = 'Arriving in 6 minutes';
    } else if (equals(currentOrder?.status, 'delivered')) {
        message = 'Order delivered';
        time = 'Fastest Delivery 🚚';
    }

    const fetchOrderDetails = useCallback(async () => {
        const data = await getOrderByIdApi(currentOrder?._id);
        setCurrentOrder(data);
    }, []);

    useEffect(() => {
        if (currentOrder) {
            fetchOrderDetails();
        }
    }, []);

    return (
        <View className={'flex-1 bg-secondary'}>
            <LiveHeader type={'Customer'} title={message} description={time}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <LiveMap/>
            </ScrollView>
        </View>
    );
}

export default LiveTracking;

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 150,
        backgroundColor: Colors.backgroundSecondary,
        padding: 15,
    },
});
