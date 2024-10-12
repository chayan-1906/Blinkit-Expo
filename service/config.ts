import axios from "axios";

const IP_ADDRESS = '192.168.1.7:4000';

export const BASE_URL = `http://${IP_ADDRESS}/api`;

export const SOCKET_URL = `http://${IP_ADDRESS}/api`;

export const appAxios = axios.create({
    baseURL: BASE_URL,
});
