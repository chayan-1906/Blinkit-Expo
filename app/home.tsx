import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity} from "react-native";

function Home() {
    return (
        <SafeAreaView className={'flex flex-col justify-center items-center'}>
            <Text className={'font-bold text-red-500 text-3xl'}>Home</Text>
        </SafeAreaView>
    );
}

export default Home;
