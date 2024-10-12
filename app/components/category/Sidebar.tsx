import {ScrollView, TouchableOpacity, View} from "react-native";
import {Category, SidebarProps} from "@/types/index.dt";
import {useEffect, useRef} from "react";
import Animated, {runOnJS, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {RFValue} from "react-native-responsive-fontsize";

function Sidebar({categories, selectedCategory, onCategoryPress}: SidebarProps) {
    const scrollViewRef = useRef<ScrollView>(null);
    const indicatorPosition = useSharedValue(0);
    const animatedValues = categories.map((category: Category) => useSharedValue(0));

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{translateY: indicatorPosition.value}],
    }));

    useEffect(() => {
        let targetIndex = -1;
        categories?.forEach((category: Category, index: number) => {
            const isSelected = selectedCategory?._id === category?._id;
            animatedValues[index].value = withTiming(isSelected ? 2 : -15, {duration: 500});
            if (isSelected) targetIndex = index;
        });

        if (targetIndex !== -1) {
            indicatorPosition.value = withTiming(targetIndex * 100, {duration: 500});
            runOnJS(() => {
                scrollViewRef.current?.scrollTo({y: targetIndex * 100, animated: true});
            });
        }
    }, [selectedCategory]);

    return (
        <View className={'w-[25%] border-r relative shadow-2xl'}>
            <ScrollView ref={scrollViewRef} contentContainerStyle={{paddingBottom: 50}} showsVerticalScrollIndicator={false}>
                <Animated.View style={indicatorStyle} className={'absolute flex self-center bg-secondary rounded-tl-sm rounded-bl-sm right-0 w-1 h-20'}/>

                <Animated.View>
                    {
                        categories?.map((category: Category, index: number) => {
                            const animatedStyle = useAnimatedStyle(() => ({
                                bottom: animatedValues[index].value,
                            }));

                            return (
                                /** category button */
                                <TouchableOpacity key={category._id} activeOpacity={1}
                                                  className={`flex justify-center items-center h-24 px-3`}
                                                  onPress={() => onCategoryPress(category)}>
                                    {/** image container */}
                                    <View className={`flex justify-center items-center bg-[#F3F4F7] h-1/2  w-3/4 mb-3 rounded-full overflow-hidden`}>
                                        <Animated.Image source={{uri: category.image}} resizeMode={'cover'} style={animatedStyle} className={'h-[80%] w-[80%]'}/>
                                    </View>
                                    <BlinkitText fontSize={RFValue(7)} style={{textAlign: 'center'}}>{category?.name}</BlinkitText>
                                </TouchableOpacity>
                            );
                        })
                    }
                </Animated.View>
            </ScrollView>
        </View>
    );
}

export default Sidebar;
