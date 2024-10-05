"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var BlinkitText_1 = require("@/app/components/ui/BlinkitText");
var Constants_1 = require("@/utils/Constants");
function BlinkitButton(_a) {
    var title = _a.title, disabled = _a.disabled, loading = _a.loading, onPress = _a.onPress;
    return (<react_native_1.TouchableOpacity className={"flex w-full my-4 p-4 justify-center items-center rounded-lg ".concat(disabled ? 'bg-disabled' : 'bg-secondary')} disabled={disabled} activeOpacity={0.8} onPress={onPress}>
            {loading ? (<react_native_1.ActivityIndicator color={'white'} size={'small'}/>) : (<BlinkitText_1.default variant={'h4'} fontFamily={Constants_1.Fonts.SemiBold} classes={'text-white'}>{title}</BlinkitText_1.default>)}
        </react_native_1.TouchableOpacity>);
}
exports.default = BlinkitButton;
