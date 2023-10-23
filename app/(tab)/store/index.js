import { View, Text, Platform, FlatList } from "react-native";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sidebar from "../../../components/Sidebar";
import tailwind from "twrnc";
import { allStores } from "../../../data/Storedata";
import CategoryList from "../../../components/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../../../redux/Action/action";

const Stores = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const featuredStores = data[5]?.["procash/featured-stores"];
  const featCat = featuredStores?.categories;

  console.log("Featured Cat", featCat);

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
          <CategoryList title="All Stores" data={featCat} />
        </View>
      </View>
    </>
  );
};

export default Stores;
