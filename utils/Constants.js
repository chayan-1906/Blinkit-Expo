"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bottomColors = exports.darkWeatherColors = exports.lightColors = exports.Fonts = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["primary"] = "#F7CA49";
    Colors["primary_light"] = "#FFE141";
    Colors["secondary"] = "#0D8320";
    Colors["text"] = "#363636";
    Colors["disabled"] = "#9197A6";
    Colors["border"] = "#D0D4Dc";
    Colors["backgroundSecondary"] = "#F5F6FB";
})(Colors || (exports.Colors = Colors = {}));
var Fonts;
(function (Fonts) {
    Fonts["Regular"] = "Okra-Regular";
    Fonts["Medium"] = "Okra-Medium";
    Fonts["Light"] = "Okra-MediumLight";
    Fonts["SemiBold"] = "Okra-Bold";
    Fonts["Bold"] = "Okra-ExtraBold";
})(Fonts || (exports.Fonts = Fonts = {}));
exports.lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.8)',
    'rgba(255,255,255,0.7)',
    'rgba(255,255,255,0.6)',
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.003)',
];
exports.darkWeatherColors = [
    'rgba(54, 67, 92, 1)',
    'rgba(54, 67, 92, 0.9)',
    'rgba(54, 67, 92, 0.8)',
    'rgba(54, 67, 92, 0.2)',
    'rgba(54, 67, 92, 0.0)',
];
exports.bottomColors = __spreadArray([], exports.lightColors, true);
