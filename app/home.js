"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_1 = require("react-native");
function Home() {
    return (<react_native_safe_area_context_1.SafeAreaView className={'flex flex-col justify-center items-center'}>
            <react_native_1.Text className={'font-bold text-red-500 text-3xl'}>Home</react_native_1.Text>
        </react_native_safe_area_context_1.SafeAreaView>);
}
exports.default = Home;
