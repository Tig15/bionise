import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import tailwind from "twrnc";

const SingleStore = ({ store, visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={tailwind`flex-1 justify-center items-center`}>
        <View
          style={
            Platform.OS == "web"
              ? tailwind`w-140 h-150 bg-slate-200 rounded-3xl p-4`
              : tailwind`w-full h-full bg-slate-200 rounded p-4`
          }
        >
          <View style={tailwind`items-center mt-10`}>
            <View style={tailwind`w-[320px] h-[100px] mb-4`}>
              <Image
                source={{ uri: store.logo }}
                style={tailwind`w-full h-full rounded-lg `}
              />
            </View>
            <Text
              style={tailwind`text-xl uppercase text-center text-slate-900 font-semibold`}
            >
              {store.name}
            </Text>
            <Text style={tailwind`text-[10px] text-gray-600 mb-4`}>
              {store.cashback_string}
            </Text>
            <Text style={tailwind`text-base text-center text-slate-600`}>
              {store.description}
            </Text>
          </View>
          {Platform.OS == "web" ? (
            <TouchableOpacity
              style={tailwind`w-9 h-9 border rounded-full pl-1 pt-1 absolute right-6 top-4`}
              onPress={onClose}
            >
              <MaterialCommunityIcons name="close" size={26} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={tailwind`bg-blue-500 p-2 rounded mt-5`}
              onPress={onClose}
            >
              <Text style={tailwind`text-white text-center`}>Close</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default SingleStore;
