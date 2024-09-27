import {Text, TouchableOpacity} from "react-native";
import {useAuthStore} from "@/state/authStore";
import BlinkitSafeAreaView from "@/app/components/global/BlinkitSafeAreaView";
import {secureStorage} from "@/state/storage";

function ProductDashboard() {
    const {user} = useAuthStore();

    return (
        <BlinkitSafeAreaView className={'flex gap-4'}>
            <Text className={'text-6xl text-red-400 font-black'}>ProductDashboard</Text>
            <Text>{JSON.stringify(user)}</Text>
            <TouchableOpacity className={'w-fit bg-red-500'} onPress={async () => await secureStorage.clearAll()}>
                <Text className={'text-3xl'}>Logout</Text>
            </TouchableOpacity>
        </BlinkitSafeAreaView>
    );
}

export default ProductDashboard;
