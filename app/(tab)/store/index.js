import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sidebar from "../../../components/Sidebar";
import tailwind from "twrnc";
import { allStores } from "../../../data/Storedata";
import CategoryList from "../../../components/CategoryList";

const Stores = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? <Sidebar /> : []}
        <View
          style={
            Platform.OS == "web"
              ? tailwind`absolute w-full h-full top-20 left-45`
              : tailwind`flex-1`
          }
        >
          <CategoryList title="All Stores" data={allStores} />
        </View>
      </View>
    </>
  );
};

export default Stores;
