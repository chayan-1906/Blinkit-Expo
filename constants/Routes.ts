import {Href} from "expo-router";

const routes: Record<string, Href> = {
    homePath: '/home',
    customerLogin: '/(auth)/customer-login',
    deliveryPartnerLogin: '/(auth)/delivery-partner-login',
}

export default routes;
