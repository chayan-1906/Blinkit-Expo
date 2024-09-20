import React from "react";
import {Fonts} from "@/utils/Constants";
import {TextInputProps, TextStyle} from "react-native";


export type LocationType = {
    coords: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
}

export type AskForLocationPermissionProps = {
    // location: LocationType | null;
    setLocation: React.Dispatch<React.SetStateAction<LocationType | null>>;
    // locationError: string | null;
    setLocationError: React.Dispatch<React.SetStateAction<string | null>>;
}

export type BlinkitTextProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9' | 'body',
    fontFamily?: Fonts,
    fontSize?: number,
    style?: TextStyle | TextStyle[],
    classes?: string,
    children?: React.ReactNode,
    numberOfLines?: number,
    onLayout?: (event: object) => void,
}

export type BlinkitInputProps = TextInputProps & {
    left?: React.ReactNode,
    onClear?: () => void,
    right?: boolean,
}

export type BlinkitButtonProps = {
    title: string,
    disabled?: boolean,
    loading?: boolean,
    onPress?: () => void,
}
