import {ActivityIndicator, TouchableOpacity} from "react-native";
import {BlinkitButtonProps} from "@/types/index.dt";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Fonts} from "@/utils/Constants";

function BlinkitButton({title, disabled, loading, onPress}: BlinkitButtonProps) {
    return (
        <TouchableOpacity className={`flex w-full my-4 p-4 justify-center items-center rounded-lg ${disabled ? 'bg-disabled' : 'bg-secondary'}`} disabled={disabled} activeOpacity={0.8}
                          onPress={onPress}>
            {
                loading ? (
                    <ActivityIndicator color={'white'} size={'small'}/>
                ) : (
                    <BlinkitText variant={'h4'} fontFamily={Fonts.SemiBold} classes={'text-white'}>{title}</BlinkitText>
                )
            }
        </TouchableOpacity>
    );
}

export default BlinkitButton;
