import { View } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import { BackIcon } from "@/src/assests/icons";
import Text from "@/src/components/ui/Text";

const ReOrder = () => {
  return (
    <AppScreen>
      <View className="flex flex-row w-14/20 items-center justify-between px-5">
        <BackIcon />
        <Text className="font-bold text-2xl">My Order</Text>
      </View>
      
      <Text>What was wrong?</Text>
    </AppScreen>
  );
};

export default ReOrder;
