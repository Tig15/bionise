import React from "react";
import { View, Text, FlatList, Platform, Pressable } from "react-native";
import tailwind from "twrnc";
import StoreCard from "../StoreCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const CategoryList = ({ title, data }) => {
  return Platform.OS === "web" ? (
    <View>
      <View style={tailwind`text-2xl w-[20%] `}>
        <Text style={tailwind`text-2xl text-gray-900 pl-2 border-b mx-5 my-3 `}>
          {title}:
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StoreCard store={item} />}
        numColumns={7}
        columnWrapperStyle={tailwind`gap-10`}
        style={tailwind`ml-6`}
      />
    </View>
  ) : (
    <View style={tailwind`flex-1`}>
      <View style={tailwind`text-2xl flex-row  ml-2 items-center`}>
        <Pressable onPress={() => router.replace("/")}>
          <MaterialCommunityIcons name="arrow-left" size={30} />
        </Pressable>
        <Text style={tailwind`text-2xl text-gray-900 border-b mx-3 my-3 `}>
          {title}:
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StoreCard store={item} />}
        numColumns={2}
        columnWrapperStyle={tailwind`gap-6`}
        style={tailwind`ml-5`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;
