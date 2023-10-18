import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tailwind from "twrnc";

const Categories = () => {
  const router = useRouter();

  // Create a data structure for your categories
  const categories = [
    { id: "/store", name: "All" },
    { id: "/store/firstCat", name: "First" },
    { id: "/store/secCat", name: "Second" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(item.id)}
      style={tailwind`border rounded-lg  `}
    >
      <Text style={tailwind`text-lg text-black font-semibold p-1 `}>
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
