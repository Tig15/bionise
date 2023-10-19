import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import { FIREBASE_APP } from "../../firebase/firebaseConfig";
import tailwind from "twrnc";
import LogForm from "../LogForm";
import RegForm from "../RegForm";

export const UserInfo = ({ userInfo }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (isLogin) => {
    setIsLogin(isLogin);
  };

  const router = useRouter();
  const auth = getAuth(FIREBASE_APP);

  const handleLogout = async () => {
    try {
      await signOut(auth);
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
            </View>
            <TouchableOpacity
              onPress={handleLogout}
              style={tailwind`absolute bottom-5 right-5 rounded p-1 bg-slate-900`}
            >
              <Text style={tailwind`text-white text-sm`}>Log-Out</Text>
            </TouchableOpacity>
          </>
        )
      ) : Platform.OS == "web" ? (
        <Text style={tailwind`text-2xl font-light uppercase`}>
          Loading user information...
        </Text>
      ) : (
        <View style={tailwind`flex-1`}>
          <View
            style={tailwind`flex-row items-center justify-center p-2 gap-20 rounded-2 border w-80 mt-4`}
          >
            <Text
              style={[
                tailwind`text-xl text-blue-900 w-16 p-1 pl-2 rounded`,
                isLogin ? tailwind`bg-gray-800 text-blue-200` : null,
              ]}
              onPress={() => toggleForm(true)}
            >
              Login
            </Text>

            <Text
              style={[
                tailwind`text-xl text-blue-900  w-22 p-1 pl-2 rounded`,
                !isLogin ? tailwind`bg-gray-800 text-blue-200` : null,
              ]}
              onPress={() => toggleForm(false)}
            >
              Register
            </Text>
          </View>

          <View style={tailwind`items-center absolute top-30`}>
            {isLogin ? <LogForm /> : <RegForm />}
          </View>
        </View>
      )}
    </View>
  );
};
