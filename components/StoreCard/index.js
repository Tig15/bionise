import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import tailwind from "twrnc";

const StoreCard = ({ store }) => {
  console.log("Store", store);
  return Platform.OS == "web" ? (
    <TouchableOpacity
      style={tailwind`w-45 h-45 border border-slate-300 mb-2 rounded bg-slate-200`}
    >
      <View>
        <Image
          source={{ uri: store.logo }}
          style={tailwind`w-full h-20 rounded  `}
        />
        <View style={tailwind`flex-1 items-center`}>
          <Text style={tailwind`text-xs text-center uppercase mt-2 `}>
            {store.name}
          </Text>
          <Text
            style={tailwind`text-[7px] font-semibold absolute top-20 right-1`}
          >
            {store.cashback_string}
          </Text>
          <Text
            style={tailwind`text-5xl absolute left-3 top-10 text-slate-300 opacity-40`}
          >
            {store.alpha}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={tailwind`w-40 h-40 border border-slate-300 mb-2 rounded bg-slate-200`}
    >
      <View>
        <Image
          source={{ uri: store.logo }}
          style={tailwind`w-full h-12 rounded `}
        />
        <View style={tailwind``}>
          <Text style={tailwind`text-xs text-center mt-3`}>{store.name}</Text>
          <Text
            style={tailwind`absolute text-[8px] font-medium top-23 right-1`}
          >
            {store.cashback_string}
          </Text>
          <Text
            style={tailwind`text-5xl absolute left-5 top-12 text-slate-300 opacity-80`}
          >
            {store.alpha}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;
