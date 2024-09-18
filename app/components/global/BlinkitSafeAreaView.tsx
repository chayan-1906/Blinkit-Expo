import {SafeAreaView} from "react-native-safe-area-context";
import {ReactNode} from "react";
import {View} from "react-native";

interface BlinkitSafeAreaViewProps {
    children: ReactNode,
    className?: String,
}

function BlinkitSafeAreaView({children, className}: BlinkitSafeAreaViewProps) {
    return (
        <SafeAreaView className={`flex-1 bg-white ${className}`}>
            <View className={`flex-1 bg-white ${className}`}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default BlinkitSafeAreaView;
