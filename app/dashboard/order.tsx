import BlinkitHeader from "@/app/components/ui/BlinkitHeader";
import {ScrollView, StyleSheet} from "react-native";
import {Colors} from "@/utils/Constants";
import BlinkitSafeAreaView from "@/app/components/global/BlinkitSafeAreaView";
import OrderList from "@/app/components/order/OrderList";

function Order() {
    return (
        <BlinkitSafeAreaView className={'flex-1 bg-white'}>
            <BlinkitHeader title={'Checkout'}/>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <OrderList/>
            </ScrollView>
        </BlinkitSafeAreaView>
    );
}

export default Order;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: Colors.backgroundSecondary,
        padding: 10,
        paddingBottom: 250,
    },
});
