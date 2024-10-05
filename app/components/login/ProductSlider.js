"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = require("react");
var dummyData_1 = require("@/utils/dummyData");
var react_native_auto_scroll_1 = require("@homielab/react-native-auto-scroll");
var Scaling_1 = require("@/utils/Scaling");
function ProductSlider() {
    var rows = (0, react_1.useMemo)(function () {
        var result = [];
        for (var i = 0; i < dummyData_1.imageData.length; i += 4) {
            result.push(dummyData_1.imageData.slice(i, i + 4));
        }
        return result;
    }, [dummyData_1.imageData]);
    return (<react_native_1.View pointerEvents={'none'}>
            <react_native_auto_scroll_1.default style={{ position: 'absolute', zIndex: -2 }} endPaddingWidth={0} duration={10000}>
                <react_native_1.View className={'grid grid-cols-1 justify-center items-center overflow-visible'}>
                    {rows === null || rows === void 0 ? void 0 : rows.map(function (row, rowIndex) {
            return (<MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex}/>);
        })}
                </react_native_1.View>
            </react_native_auto_scroll_1.default>
        </react_native_1.View>);
}
function Row(_a) {
    var row = _a.row, rowIndex = _a.rowIndex;
    return (<react_native_1.View className={'flex flex-row mb-3'}>
            {row.map(function (image, imageIndex) {
            var horizontalShift = rowIndex % 2 === 0 ? -18 : 18;
            return (<react_native_1.View key={imageIndex} className={'mb-3 mx-3 bg-[#E9F7F8] justify-center items-center rounded-2xl'} style={{ width: Scaling_1.screenWidth * 0.26, height: Scaling_1.screenWidth * 0.26, transform: [{ translateX: horizontalShift }] }}>
                            <react_native_1.Image source={image} alt={''} resizeMode={'contain'} className={'w-full h-full'}/>
                        </react_native_1.View>);
        })}
        </react_native_1.View>);
}
var MemoizedRow = react_1.default.memo(Row);
exports.default = ProductSlider;
