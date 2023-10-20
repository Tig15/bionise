import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StoreLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="featured" />
      <Stack.Screen name="popular" />
    </Stack>
  );
};

export default StoreLayout;
