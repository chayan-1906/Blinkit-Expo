"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_font_1 = require("expo-font");
var expo_router_1 = require("expo-router");
var SplashScreen = require("expo-splash-screen");
var react_1 = require("react");
require("react-native-reanimated");
var expo_status_bar_1 = require("expo-status-bar");
require("react-native-gesture-handler");
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
function RootLayout() {
    var loaded = (0, expo_font_1.useFonts)({
        OkraMediumLight: require('../assets/fonts/Okra-MediumLight.ttf'),
        Okra: require('../assets/fonts/Okra-Regular.ttf'),
        OkraMedium: require('../assets/fonts/Okra-Medium.ttf'),
        OkraBold: require('../assets/fonts/Okra-Bold.ttf'),
        OkraExtraBold: require('../assets/fonts/Okra-ExtraBold.ttf'),
    })[0];
    (0, react_1.useEffect)(function () {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }
    return (<>
        <expo_router_1.Stack>
          <expo_router_1.Stack.Screen name={'index'} options={{ headerShown: false }}/>
          <expo_router_1.Stack.Screen name={'home'} options={{ headerShown: false }}/>
          <expo_router_1.Stack.Screen name={'(auth)'} options={{ headerShown: false }}/>
          <expo_router_1.Stack.Screen name={'dashboard'} options={{ headerShown: false }}/>
        </expo_router_1.Stack>
        {/*<StatusBar style={'auto'}/>*/}
        <expo_status_bar_1.StatusBar style={'dark'}/>
      </>);
}
exports.default = RootLayout;
