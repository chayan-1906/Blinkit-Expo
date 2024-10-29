import axios from "axios";
import {secureStorage} from "@/state/storage";
import {SecureStorageKeys} from "@/constants/SecureStorageKeys";
import {refreshTokenApi} from "@/service/authService";
import {Alert} from "react-native";

const IP_ADDRESS = '192.168.1.13:4000';

export const BASE_URL = `http://${IP_ADDRESS}/api`;

export const SOCKET_URL = `http://${IP_ADDRESS}/api`;

export const appAxios = axios.create({
    baseURL: BASE_URL,
});

export const APIs = {
    customerLogin: `${BASE_URL}/customer/login`,
    deliveryPartnerLogin: `${BASE_URL}/delivery/login`,
    refreshToken: `${BASE_URL}/refresh-token`,
    getUser: `${BASE_URL}/user`,
    getCategories: `${BASE_URL}/categories`,
    getProductByCategory: (categoryId: string) => {
        console.log('APIEndpoints getProductByCategory');
        return `${BASE_URL}/products?categoryId=${categoryId}`;
    },
    createOrder: `${BASE_URL}/orders`,
};

appAxios.interceptors.request.use(async config => {
    const accessToken = await secureStorage.getItem(SecureStorageKeys.accessToken) as string;
    console.log(`accessToken: ${accessToken}`);
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

appAxios.interceptors.response.use(
    response => response,
    async error => {
        if (error.response && error.response.status === 401) {
            try {
                const accessToken = await refreshTokenApi();
                if (accessToken) {
                    error.config.headers.Authorization = `Bearer ${accessToken}`;
                    return axios(error.config);
                }
            } catch (err) {
                console.log('ERROR REFRESHING TOKEN ❌');
            }
        }

        if (error.response && error.response.status !== 401) {
            const errorMessage = error.response.data.message || 'Something went wrong';
            Alert.alert(errorMessage);
        }

        return Promise.resolve(error);
    },
);
