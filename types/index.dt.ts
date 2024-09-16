import React from "react";

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
