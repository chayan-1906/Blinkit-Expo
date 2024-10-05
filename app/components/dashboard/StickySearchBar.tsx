import {StickyView, useCollapsibleContext} from "@r0b0t3d/react-native-collapsible";
import {StyleSheet, Text} from "react-native";
import Animated, {interpolate, useAnimatedStyle} from "react-native-reanimated";
import SearchBar from "@/app/components/dashboard/SearchBar";

function StickySearchBar() {
    const {scrollY} = useCollapsibleContext();

    const animatedShadow = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 140], [0, 1]);
        return {opacity}
    });

    const backgroundColorChanges = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [1, 80], [0, 1]);
        return {backgroundColor: `rgba(255, 255, 255, ${opacity})`};
    });

    // @ts-ignore
    return (
        <StickyView style={[backgroundColorChanges]}>
            <SearchBar/>
            <Animated.View style={[styles.shadow, animatedShadow]}>

            </Animated.View>
        </StickyView>
    );
}

export default StickySearchBar;

const styles = StyleSheet.create({
    shadow: {
        height: 25
    },
});
