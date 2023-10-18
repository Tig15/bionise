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
    <TouchableOpacity onPress={() => router.push(item.id)}>
      <Text style={tailwind`text-lg text-black font-semibold ml-5 mt-[5px] `}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={tailwind`flex-1 rounded border gap-6`}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
