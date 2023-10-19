import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Platform, Text, View } from "react-native";

const LocationDetector = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userCountry, setUserCountry] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      reverseGeocode(location.coords);
    }
  };

  const reverseGeocode = async (location) => {
    const [address] = await Location.reverseGeocodeAsync(location);
    if (address) {
      const country = address.country;
      setUserCountry(country);
    } else {
      setUserCountry("Unknown");
    }
  };

  return (
    <View>
      <Text>User's Country: {userCountry}</Text>
    </View>
  );
};

export default LocationDetector;
