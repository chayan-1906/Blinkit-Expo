import {SafeAreaView} from "react-native-safe-area-context";
import {View} from "react-native";
import {BlinkitSafeAreaViewProps} from "@/types/index.dt";

function BlinkitSafeAreaView({children, className}: BlinkitSafeAreaViewProps) {
    return (
        <SafeAreaView className={`flex w-full h-full flex-1 ${className}`}>
            <View className={`flex-1 ${className}`}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default BlinkitSafeAreaView;
