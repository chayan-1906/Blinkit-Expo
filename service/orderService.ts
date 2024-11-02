import {APIs} from "@/service/constants";
import {appAxios} from "@/service/config";
import items from "ajv/lib/vocabularies/applicator/items";

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

export const getOrderByIdApi = async (orderId: string | number) => {
    try {
        console.log('getOrderByIdApi called 🔑', orderId);
        const response = await appAxios.get(APIs.getOrder(orderId)) as any;

        console.log('order fetched ✅:', response, ' 🎉');
        return response.data.order;
    } catch (err: any) {
        console.log('getOrderByIdApi error ❌:', err.response?.data?.error);
        return null;
    }
}
