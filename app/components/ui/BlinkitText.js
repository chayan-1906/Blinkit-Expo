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
var react_1 = require("react");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
function BlinkitText(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'body' : _b, _c = _a.fontFamily, fontFamily = _c === void 0 ? Constants_1.Fonts.Regular : _c, fontSize = _a.fontSize, style = _a.style, classes = _a.classes, children = _a.children, _d = _a.numberOfLines, numberOfLines = _d === void 0 ? 1 : _d, onLayout = _a.onLayout, props = __rest(_a, ["variant", "fontFamily", "fontSize", "style", "classes", "children", "numberOfLines", "onLayout"]);
    var computedFontSize;
    switch (variant) {
        case 'h1':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 22);
            break;
        case 'h2':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 20);
            break;
        case 'h3':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 18);
            break;
        case 'h4':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 16);
            break;
        case 'h5':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 14);
            break;
        case 'h6':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 12);
            break;
        case 'h7':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 12);
            break;
        case 'h8':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 10);
            break;
        case 'h9':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 9);
            break;
        case 'body':
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 12);
            break;
        default:
            computedFontSize = (0, react_native_responsive_fontsize_1.RFValue)(fontSize || 12);
            break;
    }
    var fontFamilyStyle = { fontFamily: fontFamily };
    return (<react_native_1.Text onLayout={onLayout} numberOfLines={numberOfLines} style={[{ fontSize: computedFontSize }, fontFamilyStyle, style]} className={"text-left text-text ".concat(classes)} {...props}>
            {children}
        </react_native_1.Text>);
}
exports.default = BlinkitText;
