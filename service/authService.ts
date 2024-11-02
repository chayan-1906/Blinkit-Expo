import axios from "axios";
import {secureStorage} from "@/state/storage";
import {SecureStorageKeys} from "@/constants/SecureStorageKeys";
import routes from "@/constants/Routes";
import {router, Router} from "expo-router";
import {appAxios} from "@/service/axiosInstance";
import {Alert} from "react-native";
import equals from "@/utils/functions/equals";
import {APIs} from "@/service/constants";

export const customerLoginApi = async (phoneNumber: string) => {
    try {
        console.log('customerLoginApi called 🔑', APIs.customerLogin);
        const requestBody = {
            phoneNumber
        };
        console.log('customerLoginApi requestBody ℹ️', requestBody);
        const response = await axios.post(APIs.customerLogin, requestBody);
        const {accessToken, refreshToken, customer} = response.data;
        await secureStorage.setItem(SecureStorageKeys.accessToken, accessToken);
        await secureStorage.setItem(SecureStorageKeys.refreshToken, refreshToken);
        /** TODO: Make use of statusCode */
        console.log('customer logged in ✅:', JSON.stringify(customer), ' 🎉');
        return {accessToken, refreshToken, customer};
    } catch (err: any) {
        console.log('customerLoginApi ❌:', err.response?.data?.error);
    }
}

export const refreshTokenApi = async (router?: Router) => {
    try {
        const storedRefreshToken = await secureStorage.getItem('refreshToken');
        console.log('refreshTokenApi called 🔑', APIs.refreshToken);
        const requestBody = {
            refreshToken: storedRefreshToken,
        };
        console.log('refreshTokenApi requestBody ℹ️', requestBody);
        const response = await axios.post(APIs.refreshToken, requestBody);
        const {accessToken, refreshToken} = response.data;
        await secureStorage.setItem(SecureStorageKeys.accessToken, accessToken);
        await secureStorage.setItem(SecureStorageKeys.refreshToken, refreshToken);
        /** TODO: Make use of statusCode */
        console.log('token refreshed ✅: accessToken -', accessToken, 'refreshToken -', refreshToken, ' 🎉');
        return {accessToken, refreshToken};
    } catch (err: any) {
        console.log('refreshTokenApi error ❌:', err.response?.data?.error);
        await secureStorage.clearAll();
        router?.replace(routes.customerLogin);
    }
}

export const refetchUserApi = async (setUser: any) => {
    try {
        console.log('refetchUserApi called 🔑');
        const response = await appAxios.get(APIs.getUser) as any;
        setUser(response.data.user);

        /** TODO: Make use of statusCode */
        console.log('user refetched ✅: user -', response, ' 🎉');
        return response.data.user;
    } catch (err: any) {
        console.log('refetchUserApi error ❌:', err.response?.data?.error);
        await secureStorage.clearAll();
        router.replace(routes.customerLogin);
    }
}

export const deliveryPartnerLoginApi = async (email: string, password: string) => {
    try {
        console.log('deliveryPartnerLoginApi called 🔑', APIs.deliveryPartnerLogin);
        const requestBody = {
            email, password,
        };
        console.log('deliveryPartnerLoginApi requestBody ℹ️', requestBody);
        const response = await axios.post(APIs.deliveryPartnerLogin, requestBody);
        const {accessToken, refreshToken, deliveryPartner} = response.data;
        await secureStorage.setItem(SecureStorageKeys.accessToken, accessToken);
        await secureStorage.setItem(SecureStorageKeys.refreshToken, refreshToken);
        /** TODO: Make use of statusCode */
        console.log('deliveryPartner logged in ✅:', JSON.stringify(deliveryPartner), ' 🎉');
        return {accessToken, refreshToken, deliveryPartner};
    } catch (err: any) {
        const errorCode = err.response?.data?.error.code;
        console.log('deliveryPartnerLoginApi ❌:', errorCode);
        if (equals(errorCode, 'invalidcredentials')) {
            Alert.alert('Invalid Credentials', 'Please enter correct email and password')
        } else if (equals(errorCode, 'deliverypartnernotfound')) {
            Alert.alert('Invalid Credentials', 'No delivery partner found with this email and password');
        }
    }
}
