"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_collapsible_1 = require("@r0b0t3d/react-native-collapsible");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var SearchBar_1 = require("@/app/components/dashboard/SearchBar");
function StickySearchBar() {
    var scrollY = (0, react_native_collapsible_1.useCollapsibleContext)().scrollY;
    var animatedShadow = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        var opacity = (0, react_native_reanimated_1.interpolate)(scrollY.value, [0, 140], [0, 1]);
        return { opacity: opacity };
    });
    var backgroundColorChanges = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        var opacity = (0, react_native_reanimated_1.interpolate)(scrollY.value, [1, 80], [0, 1]);
        return { backgroundColor: "rgba(255, 255, 255, ".concat(opacity, ")") };
    });
    // @ts-ignore
    return (<react_native_collapsible_1.StickyView style={[backgroundColorChanges]}>
            <SearchBar_1.default />
            <react_native_reanimated_1.default.View style={[styles.shadow, animatedShadow]}>

            </react_native_reanimated_1.default.View>
        </react_native_collapsible_1.StickyView>);
}
exports.default = StickySearchBar;
var styles = react_native_1.StyleSheet.create({
    shadow: {
        height: 25
    },
});
