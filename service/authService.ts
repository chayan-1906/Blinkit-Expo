import axios from "axios";
import {BASE_URL} from "@/service/config";
import {secureStorage} from "@/state/storage";
import {useAuthStore} from "@/state/authStore";

export const customerLoginApi = async (phoneNumber: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/customer/login`, {phoneNumber});
        const {accessToken, refreshToken} = response.data;
        await secureStorage.setItem('accessToken', accessToken);
        await secureStorage.setItem('refreshToken', refreshToken);
        const {setUser} = useAuthStore();
        setUser(response.data.customer);
        /** TODO: Make use of statusCode */
        console.log('user logged in:', JSON.stringify(response.data.customer), ' 🎉');
        return response.data;
    } catch (err) {
        console.log('Login error:', err);
    }
}
