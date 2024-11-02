const IP_ADDRESS = '192.168.1.105:4000';

export const BASE_URL = `http://${IP_ADDRESS}/api`;

export const SOCKET_URL = `http://${IP_ADDRESS}/api`;

export const APIs = {
    customerLogin: `${BASE_URL}/customer/login`,
    deliveryPartnerLogin: `${BASE_URL}/delivery/login`,
    refreshToken: `${BASE_URL}/refresh-token`,
    getUser: `${BASE_URL}/user`,
    getCategories: `${BASE_URL}/categories`,
    getProductByCategory: (categoryId: string) => {
        return `${BASE_URL}/products?categoryId=${categoryId}`;
    },
    createOrder: `${BASE_URL}/orders`,
    getOrder: (orderId: string | number) => `${BASE_URL}/orders?orderId=${orderId}`,
};
