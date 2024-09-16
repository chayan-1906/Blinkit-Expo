import * as Location from "expo-location";
import {AskForLocationPermissionProps, LocationType} from "@/types/index.dt";

export async function askForLocationPermission({setLocation, setLocationError,}: AskForLocationPermissionProps): Promise<void> {
    try {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setLocationError('Permission to access location was denied');
            return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc as LocationType);
    } catch (error) {
        setLocationError('Error while fetching location');
    }
}
