import { View, Text, Platform } from "react-native";
import React, { useEffect } from "react";
import { Stack, Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainLayout = () => {
  return Platform.OS == "web" ? (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="store" />
      <Stack.Screen name="user" />
    </Stack>
  ) : (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconname;

          if (route.name === "index") {
            iconname = "home-outline";
          } else if (route.name === "user") {
            iconname = "account-outline";
          }

          return (
            <MaterialCommunityIcons name={iconname} color={color} size={32} />
          );
        },

        tabBarActiveTintColor: "#BEDAFE",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#1F283B",
          position: "absolute",
          bottom: 20,
          left: 25,
          right: 25,
          borderRadius: 20,
          elevation: 15,
          height: 45,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="store" options={{ href: null }} />
      <Tabs.Screen name="user" />
    </Tabs>
  );
};

export default MainLayout;
