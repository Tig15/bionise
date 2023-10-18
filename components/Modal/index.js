import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import tailwind from "twrnc";
import LogForm from "../LogForm";
import RegForm from "../RegForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AuthModal = ({ visible, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (isLogin) => {
    setIsLogin(isLogin);
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View style={tailwind`flex-1 justify-center items-center`}>
        <View style={tailwind`bg-slate-600 w-1/2 h-[70%] p-4 rounded-lg`}>
          <View
            style={tailwind`flex-row justify-center gap-4 items-center mb-4`}
          >
            <Text
              style={[
                tailwind`text-2xl text-blue-200 border w-20 pl-2 rounded cursor-pointer`,
                isLogin ? tailwind`bg-gray-800` : null,
              ]}
              onPress={() => toggleForm(true)}
            >
              Login
            </Text>
            <Text
              style={[
                tailwind`text-2xl text-blue-200 border w-25 pl-2 rounded cursor-pointer`,
                !isLogin ? tailwind`bg-gray-800` : null, // Apply a background color if active
              ]}
              onPress={() => toggleForm(false)}
            >
              Register
            </Text>
          </View>
          <View style={tailwind`items-center top-10`}>
            {isLogin ? <LogForm /> : <RegForm />}
          </View>
          <TouchableOpacity
            style={tailwind`absolute top-2 right-2`}
            onPress={onClose}
          >
            <MaterialCommunityIcons name="close" size={28} color="skyblue" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AuthModal;
