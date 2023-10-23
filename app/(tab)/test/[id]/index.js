import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Test = (props) => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Test: {id}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
