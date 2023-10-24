import { View, Text, Platform } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../components/Sidebar";
import Categories from "../../components/Categories";
import tailwind from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../../redux/Action/action";
import LocationDetector from "../../components/Locationdetector";
import CustomSheet from "../../components/BottomSheet";
// import SetToken from "../../components/useStorage/setToken";
// import GetToken from "../../components/useStorage/getToken";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const featuredStores = data[5]?.["procash/featured-stores"];
  const featCat = featuredStores?.categories;

  const sliders = data[3]?.["procash/slider"];
  const slides = sliders?.slides;

  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? (
          <Sidebar data={featCat} />
        ) : (
          <View
            style={tailwind`h-14 p-3 w-[95%] bg-zinc-900 rounded-lg mt-5 ml-3`}
          >
            <Categories data={featCat} />
          </View>
        )}
        <CustomSheet />
      </View>
    </>
  );
};

export default Home;

//
