import React from "react";
import { View, Text, FlatList, Platform } from "react-native";
import tailwind from "twrnc";
import StoreCard from "../StoreCard";

const CategoryList = ({ title, data }) => {
  return Platform.OS === "web" ? (
    <View style={tailwind`absolute top-20 left-40`}>
      <View style={tailwind`text-2xl`}>
        <Text style={tailwind`text-2xl text-gray-900 border-b mx-5 my-3 `}>
          {title}:
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StoreCard store={item} />}
        numColumns={6}
        columnWrapperStyle={tailwind`gap-10`}
        style={tailwind`ml-5`}
      />
    </View>
  ) : (
    <View style={tailwind`flex-1`}>
      <View style={tailwind`text-2xl`}>
        <Text style={tailwind`text-2xl text-gray-900 border-b mx-5 my-3 `}>
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
