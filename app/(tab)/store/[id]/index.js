import { View, Text, Platform, FlatList } from "react-native";
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

  const storesByCategory = featCat ? featCat.map((category) => category) : [];

  console.log("Separated", storesByCategory);
  const DefaultStoreData = storesByCategory?.filter((a) => a.slug == "/");
  const StoreByCat = storesByCategory?.filter((a) => a.id == id);

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
          <CategoryList data={id != 0 ? StoreByCat[0] : DefaultStoreData[0]} />
        </View>
      </View>
    </>
  );
};

export default SecondLayout;
