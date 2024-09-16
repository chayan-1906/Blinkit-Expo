import {Stack} from "expo-router";

function AuthLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name={'customer-login'}/>
            <Stack.Screen name={'delivery-partner-login'}/>
        </Stack>
    );
}

export default AuthLayout;
