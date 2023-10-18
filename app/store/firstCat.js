import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../components/Sidebar";
import tailwind from "twrnc";
import CategoryList from "../../components/CategoryList.js/index.js";
import { firstCat } from "../../data/Storedata";
import { useLocalSearchParams } from "expo-router";

const FirstCat = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? <Sidebar /> : []}
        <CategoryList title={"First Categories"} data={firstCat} />
      </View>
    </>
  );
};

export default FirstCat;
