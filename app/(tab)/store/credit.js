import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import tailwind from "twrnc";
import { thirdCat } from "../../../data/Storedata";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import CategoryList from "../../../components/CategoryList";

const Credit = () => {
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
          <CategoryList title="Populars" data={thirdCat} />
        </View>
      </View>
    </>
  );
};

export default Credit;
