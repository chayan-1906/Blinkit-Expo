import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {BlinkitInputProps} from "@/types/index.dt";
import {Colors} from "@/utils/Constants";
import {RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";

function BlinkitInput({left, onClear, right = true, ...props}: BlinkitInputProps) {
    return (
        <View className={'flex flex-row w-full items-center justify-between rounded-lg border-2 my-3 bg-white border-border'} style={styles.flexRow}>
            {left}
            <TextInput className={'w-3/4 h-full py-3.5 font-semibold text-text'} style={styles.inputContainer} placeholderTextColor={'#CCC'} {...props}/>
            <View className={'flex justify-center items-center mr-3'} style={styles.icon}>
                {props.value?.length !== 0 && right && (
                    <TouchableOpacity onPress={onClear}>
                        <Icon name={'close-circle-sharp'} size={RFValue(16)} color={'#CCC'}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

export default BlinkitInput;

const styles = StyleSheet.create({
    flexRow: {
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowColor: Colors.border,
    },
    inputContainer: {
        fontSize: RFValue(12),
    },
    icon: {
        width: '5%',
    }
});
