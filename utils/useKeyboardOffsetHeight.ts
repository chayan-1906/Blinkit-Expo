import {useEffect, useState} from "react";
import {Keyboard} from "react-native";

function useKeyboardOffsetHeight() {
    const [keyboardOffsetHeight, setKeyboardOffsetHeight] = useState<number>(0);

    useEffect(() => {
        /** for android */
        const keyboardWillAndroidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardOffsetHeight(e.endCoordinates.height);
        });

        const keyboardWillAndroidHideListener = Keyboard.addListener('keyboardDidHide', (e) => {
            setKeyboardOffsetHeight(0);
        });

        /** for iOS */
        const keyboardWilliOSShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
            setKeyboardOffsetHeight(e.endCoordinates.height);
        });

        const keyboardWilliOSHideListener = Keyboard.addListener('keyboardWillHide', (e) => {
            setKeyboardOffsetHeight(0);
        });

        return () => {
            keyboardWillAndroidShowListener.remove();
            keyboardWillAndroidHideListener.remove();
            keyboardWilliOSShowListener.remove();
            keyboardWilliOSHideListener.remove();
        }
    }, []);

    return keyboardOffsetHeight;
}

export default useKeyboardOffsetHeight;
