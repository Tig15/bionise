import { View, Text, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Sidebar from "../../components/Sidebar";
import tailwind from "twrnc";
import UserInfo from "../../components/UserInfo";
import AuthInfo from "../../components/AuthInfo";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_APP } from "../../firebase/firebaseConfig";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(FIREBASE_APP);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  console.log("User", user);

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
          ) : user ? (
            <UserInfo />
          ) : (
            <View style={tailwind`flex-1 justify-center items-center`}>
              <AuthInfo />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default User;
