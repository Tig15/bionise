import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../../components/Sidebar";
import tailwind from "twrnc";
import { fifthCat } from "../../../data/Storedata";
import { useLocalSearchParams } from "expo-router";
import CategoryList from "../../../components/CategoryList";

const DoubleCb = () => {
  const { id } = useLocalSearchParams();
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
          <CategoryList title="Double Cashback" data={fifthCat} />
        </View>
      </View>
    </>
  );
};

export default DoubleCb;
