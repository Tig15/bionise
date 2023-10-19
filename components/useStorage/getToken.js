import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Cookies from "js-cookie";
import tailwind from "twrnc";

const GetToken = () => {
  const [lastCookieName, setLastCookieName] = useState("");

  useEffect(() => {
    const allCookies = Cookies.get();
    const cookieNames = Object.keys(allCookies);

    if (cookieNames.length > 0) {
      const latestCookieName = cookieNames[cookieNames.length - 1];

      if (latestCookieName !== lastCookieName) {
        setLastCookieName(latestCookieName);
      }
    }
  }, [lastCookieName]);

  return (
    <View style={tailwind`border mt-2 p-2 rounded`}>
      <Text>
        {lastCookieName
          ? `Cookie "${lastCookieName}" has been created.`
          : "No new cookies created."}
      </Text>
    </View>
  );
};

export default GetToken;
