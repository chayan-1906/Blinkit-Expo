import React, {ReactNode} from "react";
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

export type BlinkitSafeAreaViewProps = {
    children: ReactNode;
    className?: String;
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

export type BlinkitHeaderProps = {
    title: string,
    search?: boolean,
}

export type BlinkitArrowButtonProps = {
    title: string,
    onPress?: () => void,
    price?: number,
    loading?: boolean,
}

export type SidebarProps = {
    categories: Category[];
    selectedCategory: Category;
    // onCategoryPress: React.Dispatch<React.SetStateAction<Category | null>>;
    onCategoryPress: (category: Category) => void;
}

export type DecodedToken = {
    exp: number,
}

export type NoticeAnimationProps = {
    noticePosition: any;
    children: React.ReactElement;
}

export type LiveHeaderProps = {
    type: 'Customer' | 'Delivery';
    title: string;
    description: string
}


/** models */
export type Category = {
    _id: string;
    name: string;
    image: string;
}

export type Product = {
    _id: string;
    name: string;
    image: string;
    price: number;
    discountPrice: number;
    quantity: string;
}

export interface CartItem {
    _id: string | number;
    product: Product;
    count: number;
}

export interface CartAnimationWrapperProps {
    cartCount: number;
    children: React.ReactNode;
}

export interface OrderItemProps {
    // _id: string | number;
    item: CartItem;
}
