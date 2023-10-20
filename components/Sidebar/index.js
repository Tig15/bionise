import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tailwind from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Sidebar = () => {
  const router = useRouter();
  const [showStoreOptions, setShowStoreOptions] = useState(false);

  const storeShow = () => {
    setShowStoreOptions(!showStoreOptions);
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
          <Pressable onPress={() => router.push("/store")}>
            <Text style={tailwind`text-base text-slate-100  ml-5`}>All</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/store/featured")}>
            <Text style={tailwind`text-base text-slate-100 mt-2 ml-5`}>
              Featured
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/store/popular")}>
            <Text style={tailwind`text-base text-slate-100 mt-2 ml-5`}>
              Popular
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/store/credit")}>
            <Text style={tailwind`text-base text-slate-100 mt-2 ml-5`}>
              Credit
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/store/doubleCb")}>
            <Text style={tailwind`text-base text-slate-100 mt-2 ml-5`}>
              Double Cashback
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/store/onlineService")}>
            <Text style={tailwind`text-base text-slate-100 mt-2 ml-5`}>
              Online Service
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Sidebar;
