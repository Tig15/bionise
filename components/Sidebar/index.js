import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";

const Sidebar = () => {
  const router = useRouter();
  const [showStoreOptions, setShowStoreOptions] = useState(false);

  const storeShow = () => {
    setShowStoreOptions(!showStoreOptions);
    router.push("/store");
  };

  const navigation = useNavigation();

  return (
    <View style={tailwind`h-[786px] bg-slate-600 w-38 gap-6`}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={tailwind`text-xl text-slate-100 ml-6 mt-4`}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={storeShow}
        style={tailwind`flex-row items-center`}
      >
        <Text style={tailwind`text-xl text-slate-100 ml-6 mt-2`}>Store</Text>
        <View style={tailwind`ml-[6px] mt-[7px]`}>
          <Entypo
            name={showStoreOptions ? "chevron-up" : "chevron-down"}
            size={22}
            color="white"
          />
        </View>
      </TouchableOpacity>

      {showStoreOptions && (
        <View style={tailwind` bg-gray-700 p-2`}>
          <TouchableOpacity onPress={() => router.push("/store")}>
            <Text style={tailwind`text-lg text-slate-100  ml-5`}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/store/firstCat")}>
            <Text style={tailwind`text-lg text-slate-100 mt-2 ml-5`}>
              First
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/store/secCat")}>
            <Text style={tailwind`text-lg text-slate-100 mt-2 ml-5`}>
              Second
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Sidebar;
