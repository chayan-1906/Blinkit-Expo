import {Image, View} from "react-native";
import React, {useMemo} from "react";
import {imageData} from "@/utils/dummyData";
import AutoScroll from '@homielab/react-native-auto-scroll';
import {screenWidth} from "@/utils/Scaling";

function ProductSlider() {
    const rows = useMemo(() => {
        const result = [];
        for (let i = 0; i < imageData.length; i += 4) {
            result.push(imageData.slice(i, i + 4));
        }
        return result;
    }, [imageData]);

    return (
        <View pointerEvents={'none'}>
            <AutoScroll style={{position: 'absolute', zIndex: -2}} endPaddingWidth={0} duration={10000}>
                <View className={'grid grid-cols-1 justify-center items-center overflow-visible'}>
                    {
                        rows?.map((row: any, rowIndex: number) => {
                            return (
                                <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex}/>
                            );
                        })
                    }
                </View>
            </AutoScroll>
        </View>
    );
}

function Row({row, rowIndex}: { row: typeof imageData, rowIndex: number }) {
    return (
        <View className={'flex flex-row mb-3'}>
            {
                row.map((image, imageIndex) => {
                    const horizontalShift = rowIndex % 2 === 0 ? -18 : 18;

                    return (
                        <View key={imageIndex} className={'mb-3 mx-3 bg-[#E9F7F8] justify-center items-center rounded-2xl'}
                              style={{width: screenWidth * 0.26, height: screenWidth * 0.26, transform: [{translateX: horizontalShift}]}}>
                            <Image source={image} alt={''} resizeMode={'contain'} className={'w-full h-full'}/>
                        </View>
                    );
                })
            }
        </View>
    );
}

const MemoizedRow = React.memo(Row);

export default ProductSlider;
