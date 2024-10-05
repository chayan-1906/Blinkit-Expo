"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeHeight = exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
exports.screenWidth = react_native_1.Dimensions.get('window').width;
exports.screenHeight = react_native_1.Dimensions.get('window').height;
exports.NoticeHeight = react_native_1.Platform.OS === 'ios' ? exports.screenHeight * 0.10 : exports.screenHeight * 0.07;
