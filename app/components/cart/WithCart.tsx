import React from "react";
import {useCartStore} from "@/state/cartStore";
import {View} from "react-native";
import CartAnimationWrapper from "@/app/components/cart/CartAnimationWrapper";
import CartSummary from "@/app/components/cart/CartSummary";

const withCart = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithCartComponent = (props) => {
        const cartStore = useCartStore((state) => state.cart);
        const cartCount = cartStore.reduce((acc, item) => acc + item.count, 0);

        return (
            <View className={'flex-1'}>
                <WrappedComponent {...props}/>
                <CartAnimationWrapper cartCount={cartCount}>
                    <CartSummary cartCount={cartCount} cartImage={cartCount > 0 ? cartStore![0].product.image || null : null}/>
                </CartAnimationWrapper>
            </View>
        );
    }

    return WithCartComponent;
};

export default withCart;
