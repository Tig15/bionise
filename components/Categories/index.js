import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import tailwind from "twrnc";

const Categories = ({ data }) => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <Pressable
      style={tailwind`rounded-lg bg-zinc-800 `}
      onPress={() => router.push(`/store/${item?.name}`)}
    >
      <Text style={tailwind`pl-2 pr-2 text-lg text-slate-300 font-medium `}>
        {item?.name}
      </Text>
    </Pressable>
  );

  return (
    <View style={tailwind`flex-1 w-full mr-10 flex-row items-center gap-4 `}>
      <Pressable
        style={tailwind`rounded-lg bg-zinc-800 `}
        onPress={() => router.push(`/store`)}
      >
        <Text style={tailwind`pl-2 pr-2 text-lg text-slate-300 font-medium `}>
          All Stores
        </Text>
      </Pressable>
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
