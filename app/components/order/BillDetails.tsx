import {View} from "react-native";
import BlinkitText from "@/app/components/ui/BlinkitText";
import {Colors, Fonts} from "@/utils/Constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";

function ReportItem({iconName, underline, title, price}: { iconName: string, underline?: boolean, title: string, price: number }) {
    return (
        <View className={'flex flex-row items-center justify-between mb-3'}>
            <View className={'flex flex-row items-center gap-1'}>
                <Icon name={iconName} style={{opacity: 0.7}} size={RFValue(12)} color={Colors.text}/>
                <BlinkitText variant={'h8'} style={{textDecorationLine: underline ? 'underline' : 'none', textDecorationStyle: 'dashed'}}>{title}</BlinkitText>
            </View>
            <BlinkitText variant={'h8'}>₹{price}</BlinkitText>
        </View>
    );
}

function BillDetails({totalItemPrice}: { totalItemPrice: number }) {
    return (
        <View className={'bg-white rounded-md'}>
            <BlinkitText style={{marginHorizontal: 10, marginTop: 15}} fontFamily={Fonts.SemiBold}>Bill Details</BlinkitText>
            <View className={'p-3 pb-0 border-b border-b-border'}>
                <ReportItem iconName={'article'} title={'Items Total'} price={totalItemPrice}/>
                <ReportItem iconName={'pedal-bike'} title={'Delivery Charge'} price={29}/>
                <ReportItem iconName={'shopping-bag'} title={'Handling Charge'} price={2}/>
                <ReportItem iconName={'cloudy-snowing'} title={'Surge Charge'} price={3}/>
            </View>

            <View className={'flex flex-row items-center justify-between my-4 pr-2'}>
                <BlinkitText style={{marginHorizontal: 10}} variant={'h7'} fontFamily={Fonts.SemiBold}>Grand Total</BlinkitText>
                <BlinkitText fontFamily={Fonts.SemiBold}>₹{totalItemPrice + 34}</BlinkitText>
            </View>
        </View>
    );
}

export default BillDetails;
