import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";
import { useNavigation, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthModal from "../Modal";
import withUserInfo from "../../firebase/withUserInfo";
import { getAuth, signOut } from "firebase/auth";
import { FIREBASE_APP } from "../../firebase/firebaseConfig";

const Header = ({ userInfo }) => {
  const router = useRouter();
  const isAuthenticated = userInfo !== null;
  const navigation = useNavigation();

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  const handleLogOut = async () => {
    const auth = getAuth(FIREBASE_APP);
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      console.log("Error Logging Out", error.message);
    }
  };

  const renderAuthenticatedContent = () => {
    return (
      <View style={tailwind`flex-row items-center`}>
        <Text
          style={tailwind`text-slate-100 text-3xl absolute top-4 left-7 uppercase`}
        >
          Bio-Nise
        </Text>
        <TouchableOpacity
          style={tailwind` border w-20 pl-2 border-slate-100 rounded absolute top-[24px] right-[90px] flex-row justify-center items-center gap-1`}
          onPress={toggleDropdownMenu}
        >
          <Text style={tailwind`text-slate-100 text-lg`}>
            {userInfo.firstName}
          </Text>
          {isDropdownMenuOpen ? (
            <MaterialCommunityIcons name="chevron-up" size={20} color="white" />
          ) : (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color="white"
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderDropdownMenu = () => {
    return (
      <View
        style={tailwind`bg-white rounded-md p-5 absolute top-16 right-[50px] w-30 z-10`}
      >
        <TouchableOpacity onPress={() => router.push("user")}>
          <Text style={tailwind`text-slate-800 text-lg mb-2`}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogOut}>
          <Text style={tailwind`text-slate-800 text-lg`}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderUnauthenticatedContent = () => {
    return (
      <View style={tailwind`flex-row items-center`}>
        <Text
          style={tailwind`text-slate-100 text-3xl absolute top-4 left-7 uppercase`}
        >
          Bio-Nise
        </Text>
        <View style={tailwind`flex-row absolute top-[23px] right-20 gap-2`}>
          <TouchableOpacity
            style={tailwind`border border-slate-100 rounded pl-4 w-24`}
            onPress={openModal}
          >
            <Text style={tailwind`text-slate-100 text-lg mr-4`}>Sign-In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind`border border-slate-100 rounded pl-3 w-24 bg-slate-700`}
            onPress={openModal}
          >
            <Text style={tailwind`text-slate-100 text-lg`}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return Platform.OS == "web" ? (
    <View style={tailwind`w-full bg-slate-800 h-18 shadow-lg`}>
      {isAuthenticated
        ? renderAuthenticatedContent()
        : renderUnauthenticatedContent()}

      {isAuthenticated && isDropdownMenuOpen && renderDropdownMenu()}
      <AuthModal visible={isModalVisible} onClose={closeModal} />
    </View>
  ) : (
    <View
      style={tailwind`w-full bg-slate-800 h-15 shadow-xl rounded-br-xl rounded-bl-xl`}
    >
      <Text style={tailwind`text-2xl text-white ml-4 mt-3`}>Bio-nise</Text>
    </View>
  );
};

export default withUserInfo(Header);
