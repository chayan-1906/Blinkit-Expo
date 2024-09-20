import {Text} from "react-native";
import {Colors, Fonts} from "@/utils/Constants";
import React from "react";
import {RFValue} from "react-native-responsive-fontsize";
import {BlinkitTextProps} from "@/types/index.dt";

function BlinkitText({variant = 'body', fontFamily = Fonts.Regular, fontSize, style, classes, children, numberOfLines = 1, onLayout, ...props}: BlinkitTextProps) {
    let computedFontSize: number;
    switch (variant) {
        case 'h1':
            computedFontSize = RFValue(fontSize || 22);
            break;
        case 'h2':
            computedFontSize = RFValue(fontSize || 20);
            break;
        case 'h3':
            computedFontSize = RFValue(fontSize || 18);
            break;
        case 'h4':
            computedFontSize = RFValue(fontSize || 16);
            break;
        case 'h5':
            computedFontSize = RFValue(fontSize || 14);
            break;
        case 'h6':
            computedFontSize = RFValue(fontSize || 12);
            break;
        case 'h7':
            computedFontSize = RFValue(fontSize || 12);
            break;
        case 'h8':
            computedFontSize = RFValue(fontSize || 10);
            break;
        case 'h9':
            computedFontSize = RFValue(fontSize || 9);
            break;
        case 'body':
            computedFontSize = RFValue(fontSize || 12);
            break;
        default:
            computedFontSize = RFValue(fontSize || 12);
            break;
    }

    const fontFamilyStyle = {fontFamily};

    return (
        <Text onLayout={onLayout} numberOfLines={numberOfLines} style={[{fontSize: computedFontSize}, fontFamilyStyle, style]} className={`text-left text-text ${classes}`} {...props}>
            {children}
        </Text>
    );
}

export default BlinkitText;
