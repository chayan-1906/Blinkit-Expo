/*import {MMKV} from "react-native-mmkv";

export const tokenStorage = new MMKV({
    id: 'token-storage',
    encryptionKey: process.env.BLINKIT_SECRET_KEY,
});

export const storage = new MMKV({
    id: process.env.BLINKIT_STORAGE_ID || '',
    encryptionKey: process.env.BLINKIT_SECRET_KEY,
});

export const mmkvStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value);
    },
    getItem: (key: string) => {
        const value = storage.getString(key);
        return value ?? null;
    },
    removeItem: (key: string) => {
        storage.delete(key);
    }
}*/

import * as SecureStore from 'expo-secure-store';

export async function storeToken() {
    const tokenStorage = process.env.SECRET_KEY ?? '';
    await SecureStore.setItemAsync('token-storage', tokenStorage);
    console.log('🔐token-storage stored:', process.env.SECRET_KEY ?? '', '✅');
}

export async function storeStorageId() {
    await SecureStore.setItemAsync(process.env.BLINKIT_STORAGE_ID ?? '', process.env.BLINKIT_SECRET_KEY ?? '');
    console.log('🔐storage stored:', process.env.BLINKIT_SECRET_KEY ?? '', '✅')
}

export const secureStorage = {
    async getItem(key: string) {
        const value = await SecureStore.getItemAsync(key);
        console.log('🔐 ', key, 'retrieved:', process.env.SECRET_KEY ?? '', '✅');
        return value;
    },
    async setItem(key: string, value: string) {
        await SecureStore.setItemAsync(key, value);
        console.log('🔐 ', key, 'stored:', value, '✅');
    },
    async removeItem(key: string) {
        await SecureStore.deleteItemAsync(key);
        console.log('🔐 ', key, 'deleted ✅');
    },
}
