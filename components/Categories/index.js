import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tailwind from "twrnc";

const Categories = ({ data }) => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={tailwind`rounded-lg bg-zinc-800 `}>
      <Text style={tailwind`pl-2 pr-2 text-lg text-slate-300 font-medium `}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={tailwind`flex-1 w-full mr-10 `}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tailwind`gap-4 `}
      />
    </View>
  );
};

export default Categories;
