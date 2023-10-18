import { View, Text } from "react-native";
import React from "react";
import RegForm from "../../../components/RegForm";
import { StatusBar } from "expo-status-bar";
import Header from "../../../components/Header";
import tailwind from "twrnc";

const Register = () => {
  return (
    <View style={tailwind`h-full w-full bg-slate-400 overflow-hidden`}>
      <StatusBar hidden />
      <Header />
      <View style={tailwind`mt-24 items-center`}>
        <RegForm />
      </View>
    </View>
  );
};

export default Register;
