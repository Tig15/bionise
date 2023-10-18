import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../components/Sidebar";
import tailwind from "twrnc";
import { secondCat } from "../../data/Storedata";
import CategoryList from "../../components/CategoryList.js";

const SecCat = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? <Sidebar /> : []}
        <CategoryList title="Second Categories" data={secondCat} />
      </View>
    </>
  );
};

export default SecCat;
