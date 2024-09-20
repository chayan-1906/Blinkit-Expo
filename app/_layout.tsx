import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {StatusBar} from "expo-status-bar";
import 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded] = useFonts({
    OkraMediumLight: require('../assets/fonts/Okra-MediumLight.ttf'),
    Okra: require('../assets/fonts/Okra-Regular.ttf'),
    OkraMedium: require('../assets/fonts/Okra-Medium.ttf'),
    OkraBold: require('../assets/fonts/Okra-Bold.ttf'),
    OkraExtraBold: require('../assets/fonts/Okra-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <>
        <Stack>
          <Stack.Screen name={'index'} options={{headerShown: false}}/>
          <Stack.Screen name={'home'} options={{headerShown: false}}/>
          <Stack.Screen name={'(auth)'} options={{headerShown: false}}/>
        </Stack>
        {/*<StatusBar style={'auto'}/>*/}
        <StatusBar style={'dark'}/>
      </>
  );
}

export default RootLayout;
