import { View, Text, Platform } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../../components/Sidebar";
import tailwind from "twrnc";
import UserInfo from "../../../components/UserInfo";

const User = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? <Sidebar /> : []}
        <View style={tailwind`absolute top-30 left-50`}>
          <UserInfo />
        </View>
      </View>
    </>
  );
};

export default User;
