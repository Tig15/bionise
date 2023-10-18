import { View, Text, Platform } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainLayout = () => {
  return Platform.OS == "web" ? (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="store" />
      <Stack.Screen name="user" />
    </Stack>
  ) : (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={20} />,
        }}
      />
      <Tabs.Screen name="store" options={{ href: null }} />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: "User",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="face-man-profile" size={20} />
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
