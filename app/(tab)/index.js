import { View, Text, Platform } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sidebar from "../../components/Sidebar";
import Categories from "../../components/Categories";
import tailwind from "twrnc";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? (
          <Sidebar />
        ) : (
          <View style={tailwind`h-10 w-full mt-5 ml-6`}>
            <Categories />
          </View>
        )}
      </View>
    </>
  );
};

export default Home;
