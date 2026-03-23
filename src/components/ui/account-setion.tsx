import { View, Text, Pressable } from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import TabIcon from "./tab-icon";
import { ForwardIcon } from "@/src/assests/icons";

interface AccountSectionProps {
  Icon: React.FC<SvgProps>;
  name: string;
  title: string;
}

const AccountSectionComponent = ({
  name,
  Icon,
  title,
}: AccountSectionProps) => {
  return (
    <Pressable>
      <View className="flex flex-row justify-between items-center py-5 border-b border-[#F1F5F9]">
        <View className="flex-row gap-4">
          <TabIcon name={name} Icon={Icon} />
          <View className="">
            <Text className="font-bold">{title}</Text>
          </View>
        </View>
        <ForwardIcon />
      </View>
    </Pressable>
  );
};

export default AccountSectionComponent;
