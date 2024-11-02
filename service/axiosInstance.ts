import axios from "axios";
import {BASE_URL} from "@/service/constants";

export const appAxios = axios.create({
    baseURL: BASE_URL,
});

console.log('appAxios initialized ✅:', appAxios);
