import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import withUserInfo from "../../firebase/withUserInfo";
import { getAuth, signOut } from "firebase/auth";
import { FIREBASE_APP } from "../../firebase/firebaseConfig";
import tailwind from "twrnc";
import Cookies from "js-cookie";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LocationDetector from "../Locationdetector";

const UserInfo = ({ userInfo }) => {
  const router = useRouter();
  const auth = getAuth(FIREBASE_APP);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      if (Platform.OS === "web") {
        Cookies.remove("email");
        Cookies.remove("rememberMe");
      } else {
        await AsyncStorage.removeItem("email");
        await AsyncStorage.removeItem("rememberMe");
      }

      router.replace("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={tailwind`flex-1 justify-center items-center`}>
      {userInfo ? (
        Platform.OS == "web" ? (
          <View style={tailwind`w-[800px] h-[600px] rounded bg-slate-800`}>
            <View style={tailwind`absolute top-4 left-6`}>
              <Text style={tailwind`text-lg text-white uppercase`}>
                My Profile :
              </Text>
            </View>
            <View style={tailwind`absolute top-20 left-10`}>
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
                }}
                style={tailwind`h-60 w-60 rounded-full`}
              />
            </View>
            <View
              style={tailwind`absolute top-25 left-80  flex-row justify-center items-center gap-5`}
            >
              <Text
                style={tailwind`text-2xl text-white rounded w-20 border-b pl-[9px] border-white`}
              >
                {userInfo.firstName}
              </Text>
              <Text
                style={tailwind`text-2xl text-white rounded w-30 border-b pl-[7px] border-white`}
              >
                {userInfo.lastName}
              </Text>
            </View>
            <View
              style={tailwind`absolute top-140 left-6  flex-row justify-center items-center gap-5`}
            >
              <Text
                style={tailwind`text-xl text-slate-200 rounded w-30  pl-[7px] `}
              >
                <LocationDetector />
              </Text>
            </View>
          </View>
        ) : (
          <>
            <View style={tailwind`absolute top-10`}>
              <TouchableOpacity
                style={tailwind`flex-row justify-between gap-20 mb-2 border p-2 rounded-lg w-85 bg-slate-200 `}
              >
                <Text>First Name: </Text>
                <Text>{userInfo.firstName}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tailwind`flex-row justify-between gap-20 mb-2 border p-2 rounded-lg w-85 bg-slate-200`}
              >
                <Text>Last Name: </Text>
                <Text>{userInfo.lastName}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tailwind`mb-2 border p-2 rounded-lg bg-slate-200`}
              >
                <LocationDetector />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleLogout}
              style={tailwind`absolute bottom-20 right-8 rounded p-1 bg-slate-900`}
            >
              <Text style={tailwind`text-white text-sm`}>Log-Out</Text>
            </TouchableOpacity>
          </>
        )
      ) : (
        <Text
          style={
            Platform.OS == "web"
              ? tailwind`text-2xl font-light uppercase`
              : tailwind`text-lg font-medium`
          }
        >
          Loading user information...
        </Text>
      )}
    </View>
  );
};

export default withUserInfo(UserInfo);
