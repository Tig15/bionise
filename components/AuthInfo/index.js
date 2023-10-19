import { View, Text } from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";
import LogForm from "../LogForm";
import RegForm from "../RegForm";

const AuthInfo = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (isLogin) => {
    setIsLogin(isLogin);
  };

  return (
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
  );
};

export default AuthInfo;
