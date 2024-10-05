"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_1 = require("react-native");
function BlinkitSafeAreaView(_a) {
    var children = _a.children, className = _a.className;
    return (<react_native_safe_area_context_1.SafeAreaView className={"flex w-full h-full flex-1 ".concat(className)}>
            <react_native_1.View className={"flex-1 ".concat(className)}>
                {children}
            </react_native_1.View>
        </react_native_safe_area_context_1.SafeAreaView>);
}
exports.default = BlinkitSafeAreaView;
