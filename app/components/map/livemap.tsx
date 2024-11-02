import {StyleSheet, Text, View} from "react-native";
import {screenHeight} from "@/utils/Scaling";

function LiveMap() {
    return (
        <View className={'w-full rounded-xl bg-white overflow-hidden border border-border relative'} style={styles.container}>
            <Text>LiveMap</Text>
            <View className={'flexRow'}>

            </View>
        </View>
    );
}

export default LiveMap;

const styles = StyleSheet.create({
    container: {
        height: screenHeight * 0.35,
    },
});
