import {Stack} from "expo-router";

function DashboardLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name={'product-dashboard'}/>
        </Stack>
    );
}

export default DashboardLayout;
