import {ScrollView, TouchableOpacity, View} from "react-native";
import {Category, SidebarProps} from "@/types/index.dt";
import {useRef} from "react";
import Animated from "react-native-reanimated";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {RFValue} from "react-native-responsive-fontsize";

function Sidebar({categories, selectedCategory, onCategoryPress}: SidebarProps) {
    const scrollViewRef = useRef<ScrollView>(null);

    return (
        <View className={'w-[24%] bg-white border-r relative bg-yellow-300'}>
            <ScrollView ref={scrollViewRef} contentContainerStyle={{paddingBottom: 50}} showsVerticalScrollIndicator={false}>
                <Animated.View>
                    {
                        categories?.map((category: Category, index: number) => {
                            return (
                                /** category button */
                                <TouchableOpacity key={category._id} activeOpacity={1}
                                                  className={`flex justify-center items-center h-24 px-3 ${selectedCategory?._id === category?._id && 'bg-[#CFFFDB]'}`}
                                                  onPress={() => onCategoryPress(category)}>
                                    {/** image container */}
                                    <View className={'flex justify-center items-center bg-[#F3F4F7] h-1/2  w-3/4 mb-3 rounded-lg overflow-hidden'}>
                                        <Animated.Image source={{uri: category.image}} resizeMode={'cover'} className={'h-[80%] w-[80%]'}/>
                                    </View>
                                    <BlinkitText fontSize={RFValue(7)} style={{textAlign: 'center'}}>{category?.name}</BlinkitText>
                                </TouchableOpacity>
                            );
                        })
                    }

                    {/* indicator - yet to place */}
                    <View className={'absolute flex self-center bg-secondary rounded-t-lg rounded-bl-lg right-0 top-10 w-4 h-20'}>

                    </View>
                </Animated.View>
            </ScrollView>
        </View>
    );
}

export default Sidebar;
