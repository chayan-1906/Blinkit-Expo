import {Stack} from "expo-router";

function DashboardLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name={'product-dashboard'}/>
            <Stack.Screen name={'delivery-dashboard'}/>
            <Stack.Screen name={'product-categories'}/>
            <Stack.Screen name={'cart'}/>
            <Stack.Screen name={'order'}/>
            <Stack.Screen name={'order-success'}/>
        </Stack>
    );
}

export default DashboardLayout;
