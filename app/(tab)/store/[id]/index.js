import { View, Text, Platform } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import CategoryList from "../../../../components/CategoryList";
import tailwind from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../../../../redux/Action/action";

const SecondLayout = () => {
  const { id } = useLocalSearchParams();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const featuredStores = data[5]?.["procash/featured-stores"];
  const featCat = featuredStores?.categories;

  const storesByCategory = featCat
    ? featCat.map((category) => category.stores)
    : [];

  console.log("Separated", storesByCategory);

  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? <Sidebar data={featCat} /> : []}
        <View
          style={
            Platform.OS == "web"
              ? tailwind`absolute w-full h-full top-20 left-45`
              : tailwind`flex-1`
          }
        >
          <CategoryList title={id} data={featCat} />
        </View>
      </View>
    </>
  );
};

export default SecondLayout;
