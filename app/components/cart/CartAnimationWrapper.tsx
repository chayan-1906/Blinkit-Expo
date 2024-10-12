import {Animated} from "react-native";
import {hocStyles} from "@/styles/GlobalStyles";
import {CartAnimationWrapperProps} from "@/types/index.dt";
import {useEffect, useRef, useState} from "react";
import {opacity} from "react-native-reanimated/lib/typescript/reanimated2/Colors";

function CartAnimationWrapper({cartCount, children}: CartAnimationWrapperProps) {
    const slideAnimation = useRef(new Animated.Value(0)).current;
    const [hasAnimated, setHasAnimated] = useState(false);

    const slideUpStyle = {
        transform: [
            {
                translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                }),
            },
        ],
        opacity: slideAnimation
    };

    useEffect(() => {
        if (cartCount > 0 && !hasAnimated) {
            Animated.timing(slideAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setHasAnimated(true);
            });
        } else if (cartCount === 0 && hasAnimated) {
            Animated.timing(slideAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setHasAnimated(false);
            });
        }
    }, [cartCount, hasAnimated]);

    return (
        <Animated.View style={[hocStyles.cartContainer, slideUpStyle]}>
            {children}
        </Animated.View>
    );
}

export default CartAnimationWrapper;
