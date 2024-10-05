import {Href} from "expo-router";

const routes: Record<string, Href> = {
    homePath: '/home',
    customerLogin: '/(auth)/customer-login',
    deliveryPartnerLogin: '/(auth)/delivery-partner-login',
    productDashboard: '/dashboard/product-dashboard',
    deliveryDashboard: '/dashboard/delivery-dashboard',
    productCategories: '/dashboard/delivery-dashboard',
}

export default routes;
