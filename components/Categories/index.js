import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tailwind from "twrnc";

const Categories = () => {
  const router = useRouter();

  // Create a data structure for your categories
  const categories = [
    { id: "/store", name: "All" },
    { id: "/store/featured", name: "Featured" },
    { id: "/store/popular", name: "Popular" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(item.id)}
      style={tailwind`rounded-lg bg-zinc-800 `}
    >
      <Text
        style={tailwind`pt-1 pl-2 pr-2 text-lg text-slate-300 font-medium `}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={tailwind`flex-1 `}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tailwind`gap-4`}
      />
    </View>
  );
};

export default Categories;
