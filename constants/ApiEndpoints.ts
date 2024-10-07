import {BASE_URL} from "@/service/config";

export const APIs = {
    customerLogin: `${BASE_URL}/customer/login`,
    deliveryPartnerLogin: `${BASE_URL}/delivery/login`,
    refreshToken: `${BASE_URL}/refresh-token`,
    getUser: `${BASE_URL}/user`,
    getCategories: `${BASE_URL}/categories`,
    getProductByCategory: (categoryId: string) => `${BASE_URL}/products?category=${categoryId}`,
};
