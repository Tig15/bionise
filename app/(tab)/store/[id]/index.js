import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const SecondLayout = () => {
  const { sid } = useLocalSearchParams();
  return (
    <View>
      <Text>SecondLayout:{sid}</Text>
    </View>
  );
};

export default SecondLayout;
