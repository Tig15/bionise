import React, { useState, useEffect } from "react";
import { Button, Platform, Text, TextInput, View } from "react-native";
import tailwind from "twrnc";
import Cookies from "js-cookie";

const SetToken = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenValue, setTokenValue] = useState("");

  const handleSetToken = () => {
    if (tokenName && tokenValue) {
      Cookies.set(tokenName, tokenValue);
      setTokenName("");
      setTokenValue("");
    }
  };

  return (
    <View style={tailwind`flex-1 mt-6 border rounded p-4`}>
      <Text style={tailwind`text-lg`}>Set Session Token</Text>
      <View style={tailwind`flex-row justify-center items-center gap-6 mt-2`}>
        <TextInput
          placeholder="Cookie Name"
          value={tokenName}
          onChangeText={(text) => setTokenName(text)}
          style={tailwind`border rounded p-1  `}
        />
        <TextInput
          placeholder="Cookie Value"
          value={tokenValue}
          onChangeText={(text) => setTokenValue(text)}
          style={tailwind`border rounded p-1  `}
        />
        <View>
          <Button onPress={handleSetToken} title="Set Token" />
        </View>
      </View>
    </View>
  );
};

export default SetToken;
