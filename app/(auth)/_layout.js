"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_router_1 = require("expo-router");
function AuthLayout() {
    return (<expo_router_1.Stack screenOptions={{ headerShown: false }}>
            <expo_router_1.Stack.Screen name={'customer-login'}/>
            <expo_router_1.Stack.Screen name={'delivery-partner-login'}/>
        </expo_router_1.Stack>);
}
exports.default = AuthLayout;
