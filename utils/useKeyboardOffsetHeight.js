"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
function useKeyboardOffsetHeight() {
    var _a = (0, react_1.useState)(0), keyboardOffsetHeight = _a[0], setKeyboardOffsetHeight = _a[1];
    (0, react_1.useEffect)(function () {
        /** for android */
        var keyboardWillAndroidShowListener = react_native_1.Keyboard.addListener('keyboardDidShow', function (e) {
            setKeyboardOffsetHeight(e.endCoordinates.height);
        });
        var keyboardWillAndroidHideListener = react_native_1.Keyboard.addListener('keyboardDidHide', function (e) {
            setKeyboardOffsetHeight(0);
        });
        /** for iOS */
        var keyboardWilliOSShowListener = react_native_1.Keyboard.addListener('keyboardWillShow', function (e) {
            setKeyboardOffsetHeight(e.endCoordinates.height);
        });
        var keyboardWilliOSHideListener = react_native_1.Keyboard.addListener('keyboardWillHide', function (e) {
            setKeyboardOffsetHeight(0);
        });
        return function () {
            keyboardWillAndroidShowListener.remove();
            keyboardWillAndroidHideListener.remove();
            keyboardWilliOSShowListener.remove();
            keyboardWilliOSHideListener.remove();
        };
    }, []);
    return keyboardOffsetHeight;
}
exports.default = useKeyboardOffsetHeight;
