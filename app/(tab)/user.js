import { View, Text, Platform } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../components/Sidebar";
import tailwind from "twrnc";
import UserInfo from "../../components/UserInfo";
import withUserInfo from "../../firebase/withUserInfo";
import AuthInfo from "../../components/AuthInfo";

const User = ({ userInfo }) => {
  const isAuthenticated = userInfo !== null;
  return (
    <>
      <StatusBar hidden />
      <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
        <Header />
        {Platform.OS == "web" ? <Sidebar /> : []}
        <View
          style={
            Platform.OS == "web"
              ? tailwind`absolute top-[90px] left-[180px]`
              : tailwind`flex-1`
          }
        >
          {Platform.OS == "web" ? (
            <UserInfo />
          ) : isAuthenticated ? (
            <UserInfo />
          ) : (
            <AuthInfo />
          )}
        </View>
      </View>
    </>
  );
};

export default withUserInfo(User);
