"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_router_1 = require("expo-router");
function DashboardLayout() {
    return (<expo_router_1.Stack screenOptions={{ headerShown: false }}>
            <expo_router_1.Stack.Screen name={'product-dashboard'}/>
        </expo_router_1.Stack>);
}
exports.default = DashboardLayout;
