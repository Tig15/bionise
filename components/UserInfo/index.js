import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import withUserInfo from "../../firebase/withUserInfo";

const UserInfo = ({ userInfo }) => {
  const navigation = useNavigation();

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     navigation.navigate("login");
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

  return (
    <View>
      {/* <TouchableOpacity onPress={handleLogout}>
        <Text>LogOut</Text>
      </TouchableOpacity> */}
      {userInfo ? (
        <View>
          <Text>First Name: {userInfo.firstName}</Text>
          <Text>Last Name: {userInfo.lastName}</Text>
        </View>
      ) : (
        <Text>Loading user information...</Text>
      )}
    </View>
  );
};

export default withUserInfo(UserInfo);
