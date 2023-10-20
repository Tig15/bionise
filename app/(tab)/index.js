import { View, Text, Platform } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sidebar from "../../components/Sidebar";
import Categories from "../../components/Categories";
import tailwind from "twrnc";
import LocationDetector from "../../components/Locationdetector.js/index.js";
import SetToken from "../../components/useStorage/setToken";
import GetToken from "../../components/useStorage/getToken";

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
          <View
            style={tailwind`h-14  p-3 w-[95%] bg-zinc-900 rounded-lg mt-5 ml-3`}
          >
            <Categories />
          </View>
        )}
        <View
          style={
            Platform.OS == "web" ? tailwind`absolute top-20 left-50` : null
          }
        ></View>
      </View>
    </>
  );
};

export default Home;
