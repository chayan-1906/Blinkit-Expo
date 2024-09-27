import axios from "axios";
import {appAxios, BASE_URL} from "@/service/config";
import {secureStorage} from "@/state/storage";
import {SecureStorageKeys} from "@/constants/SecureStorageKeys";
import {refreshTokenApi} from "@/service/authService";
import {Alert} from "react-native";

appAxios.interceptors.request.use(async config => {
    const accessToken = await secureStorage.getItem(SecureStorageKeys.accessToken) as string;
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
