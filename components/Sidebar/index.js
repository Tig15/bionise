import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import tailwind from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Sidebar = ({ data }) => {
  const router = useRouter();
  const [showStoreOptions, setShowStoreOptions] = useState(false);

  const storeShow = () => {
    setShowStoreOptions(!showStoreOptions);
  };

  const renderCatName = ({ item }) => {
    return (
      <Pressable onPress={() => router.push(`/store/${item?.name}`)}>
        <Text style={tailwind`text-base text-slate-100  ml-5`}>
          {item?.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={tailwind`h-[776px] bg-slate-600 w-42 gap-6`}>
      <Pressable onPress={() => router.push("/")}>
        <Text style={tailwind`text-xl text-slate-100 ml-6 mt-4`}>Home</Text>
      </Pressable>

      <Pressable onPress={storeShow} style={tailwind`flex-row items-center`}>
        <Text style={tailwind`text-xl text-slate-100 ml-6 mt-2`}>Store</Text>
        <View style={tailwind`ml-[6px] mt-[7px]`}>
          <Entypo
            name={showStoreOptions ? "chevron-up" : "chevron-down"}
            size={22}
            color="white"
          />
        </View>
      </Pressable>

      {showStoreOptions && (
        <View style={tailwind`bg-gray-700 p-1`}>
          <FlatList data={data} renderItem={renderCatName} />
        </View>
      )}
    </View>
  );
};

export default Sidebar;
