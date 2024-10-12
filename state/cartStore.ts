import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {secureStorage} from "@/state/storage";
import {CartItem, Product} from "@/types/index.dt";
import cart from "@/app/dashboard/cart";

interface cartStore {
    cart: CartItem[],
    addItem: (item: Product) => void,
    removeItem: (id: string | number) => void,
    clearCart: () => void,
    getItemCount: (id: string | number) => number,
    getTotalPrice: () => number,
}

export const useCartStore = create<cartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            addItem: (item: Product) => {
                const currentCart = get().cart;
                const existingItemIndex = currentCart.findIndex((cartItem) => cartItem?._id === item?._id);
                console.log('Item exists ❓:', existingItemIndex >= 0);
                // when item exists
                if (existingItemIndex >= 0) {
                    const updatedCart = [...currentCart];
                    updatedCart[existingItemIndex] = {
                        ...updatedCart[existingItemIndex],
                        count: updatedCart[existingItemIndex].count + 1,
                    };
                    set({cart: updatedCart});
                } else {
                    console.log('item', item);
                    set({
                        cart: [
                            ...currentCart,
                            {_id: item._id, product: item, count: 1}
                        ],
                    });
                }
            },
            clearCart: () => set({cart: []}),
            removeItem: (id) => {
                const currentCart = get().cart;
                const existingItemIndex = currentCart.findIndex((cartItem) => cartItem?._id === id);
                if (existingItemIndex >= 0) {
                    const updatedCart = [...currentCart];
                    const existingItem = updatedCart[existingItemIndex];
                    if (existingItem.count > 1) {
                        updatedCart[existingItemIndex] = {...existingItem, count: existingItem?.count - 1};
                    } else {
                        updatedCart.splice(existingItemIndex, 1);
                    }
                    set({cart: updatedCart});
                }
            },
            getItemCount: (id) => {
                const currentItem = get().cart.find((cartItem) => cartItem?._id === id);
                return currentItem ? currentItem?.count : 0;
            },
            getTotalPrice: () => {
                return get().cart.reduce((total, cartItem) => total + cartItem.product.price * cartItem.count, 0);
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => secureStorage),
        }
    )
)
