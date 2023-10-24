import { View, Text } from "react-native";
import React, { useMemo, useRef } from "react";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import tailwind from "twrnc";

const CustomSheet = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "80%"], []);

  const bottomSheetRef = useRef(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{
        backgroundColor: "skyblue",
      }}
      backgroundStyle={tailwind`bg-slate-600`}
    >
      <BottomSheetTextInput
        style={tailwind`w-90 ml-4 mt-5 bg-slate-500 h-10 rounded-xl`}
      />
    </BottomSheet>
  );
};

export default CustomSheet;
