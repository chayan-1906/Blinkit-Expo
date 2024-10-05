import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Colors, Fonts} from "@/utils/Constants";
import {RFValue} from "react-native-responsive-fontsize";
import RollingBar from "react-native-rolling-bar";
import BlinkitText from "@/app/components/ui/BlinkitText";

function SearchBar() {
    return (
        <TouchableOpacity className={'flex flex-row bg-[#F3F4F7] items-center justify-between rounded-lg border border-border mt-4 mx-3 p-3 overflow-hidden'} activeOpacity={0.8}>
            <Icon name={'search'} color={Colors.text} size={RFValue(20)}/>
            <RollingBar interval={3000} defaultStyle={false} customStyle={styles.textContainer}>
                <BlinkitText variant={'h6'} fontFamily={Fonts.Medium}>Search "sweets"</BlinkitText>
                <BlinkitText variant={'h6'} fontFamily={Fonts.Medium}>Search "milk"</BlinkitText>
                <BlinkitText variant={'h6'} fontFamily={Fonts.Medium}>Search "atta, dal, coke"</BlinkitText>
                <BlinkitText variant={'h6'} fontFamily={Fonts.Medium}>Search "chips"</BlinkitText>
                <BlinkitText variant={'h6'} fontFamily={Fonts.Medium}>Search "pooja thali"</BlinkitText>
            </RollingBar>
            <View className={'w-[1px] h-6 bg-[#DDD] mx-3'}/>
            <Icon name={'mic'} color={Colors.text} size={RFValue(20)}/>
        </TouchableOpacity>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    textContainer: {
        width: '90%',
        paddingLeft: 10,
        // height: 50,
    },
});
