import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const UserLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default UserLayout;
