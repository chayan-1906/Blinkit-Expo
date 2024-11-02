import {APIs} from "@/service/constants";
import {appAxios} from "@/service/config";

export const createOrderApi = async (items: any, totalPrice: number) => {
    try {
        console.log('createOrderApi called 🔑');
        const response = await appAxios.post(APIs.createOrder, {
            items: items,
            branch: '66dca17618751fe1fbd0c98a',
            totalPrice: totalPrice,
        }) as any;

        console.log('order created ✅:', response, ' 🎉');
        return response.data.savedOrder;
    } catch (err: any) {
        console.log('createOrderApi error ❌:', err.response?.data?.error);
        return null;
    }
}
