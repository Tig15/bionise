import { View, Text } from "react-native";
import React from "react";
import LogForm from "../../../components/LogForm";
import tailwind from "twrnc";
import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
      <StatusBar hidden />
      <Header />
      <View style={tailwind`mt-24 items-center`}>
        <LogForm />
      </View>
    </View>
  );
};

export default Login;
