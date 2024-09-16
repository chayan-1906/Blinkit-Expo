import {MMKV} from "react-native-mmkv";

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
}