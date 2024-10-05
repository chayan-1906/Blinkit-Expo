"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_collapsible_1 = require("@r0b0t3d/react-native-collapsible");
var react_native_reanimated_1 = require("react-native-reanimated");
var Header_1 = require("@/app/components/dashboard/Header");
function AnimatedHeader(_a) {
    var showNotice = _a.showNotice;
    var scrollY = (0, react_native_collapsible_1.useCollapsibleContext)().scrollY;
    var headerAnimatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        var opacity = (0, react_native_reanimated_1.interpolate)(scrollY.value, [0, 120], [1, 0]);
        return { opacity: opacity };
    });
    return (<react_native_reanimated_1.default.View style={headerAnimatedStyle} className={'bg-transparent'}>
            <Header_1.default showNotice={showNotice}/>
        </react_native_reanimated_1.default.View>);
}
exports.default = AnimatedHeader;
