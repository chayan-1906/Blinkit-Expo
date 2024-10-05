"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Constants_1 = require("@/utils/Constants");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
function BlinkitInput(_a) {
    var _b;
    var left = _a.left, onClear = _a.onClear, _c = _a.right, right = _c === void 0 ? true : _c, props = __rest(_a, ["left", "onClear", "right"]);
    return (<react_native_1.View className={'flex flex-row w-full items-center justify-between rounded-lg my-3 bg-white border border-border'} style={styles.flexRow}>
            {left}
            <react_native_1.TextInput className={'w-3/4 h-full py-3.5 font-semibold text-text'} style={styles.inputContainer} placeholderTextColor={'#CCC'} {...props}/>
            <react_native_1.View className={'flex justify-center items-center mr-3'} style={styles.icon}>
                {((_b = props.value) === null || _b === void 0 ? void 0 : _b.length) !== 0 && right && (<react_native_1.TouchableOpacity onPress={onClear}>
                        <Ionicons_1.default name={'close-circle-sharp'} size={(0, react_native_responsive_fontsize_1.RFValue)(16)} color={'#CCC'}/>
                    </react_native_1.TouchableOpacity>)}
            </react_native_1.View>
        </react_native_1.View>);
}
exports.default = BlinkitInput;
var styles = react_native_1.StyleSheet.create({
    flexRow: {
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowColor: Constants_1.Colors.border,
        shadowOpacity: 0.8,
    },
    inputContainer: {
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(12),
    },
    icon: {
        width: '5%',
    }
});
