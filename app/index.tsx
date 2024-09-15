import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";
import routes from "@/constants/Routes";

function Index() {
    let router = useRouter();

    return (
        <SafeAreaView className={'flex flex-col justify-center items-center'}>
            <Text className={'font-bold text-red-500 text-3xl'}>Index</Text>
            <TouchableOpacity className={'p-3 rounded-xl bg-pink-400'} onPress={() => router.push(routes.homePath)}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Index;
