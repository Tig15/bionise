import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import tailwind from "twrnc";

const LocationDetector = () => {
  const [userCountry, setUserCountry] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchUserCountry();
    }, 3000);
  }, []);

  const fetchUserCountry = () => {
    fetch("http://ip-api.com/json")
      .then((response) => response.json())
      .then((data) => {
        const country = data.country;
        console.log("IP Data", data);
        setUserCountry(country);
      })
      .catch((error) => {
        console.error(error);
        setUserCountry("Unknown");
      });
  };

  return (
    <View
      style={
        Platform.OS == "web" ? null : tailwind`w-80 flex-row justify-between`
      }
    >
      {Platform.OS == "web" ? null : <Text>Country:</Text>}
      <Text>{userCountry}</Text>
    </View>
  );
};

export default LocationDetector;
