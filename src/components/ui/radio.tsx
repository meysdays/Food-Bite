import { View, Pressable } from "react-native";
import React from "react";
import Text from "./Text";
import { cn } from "@/src/lib/ui";

interface RadioButtonProps {
  label: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  value: string;
  sides: string
}

const RadioButton = ({
  label,
  selectedValue,
  onSelect,
  value,
  sides
}: RadioButtonProps) => {
  const isSelected = selectedValue === value;
  return (
    <Pressable
      className="flex flex-row mb-2.5 items-center justify-between border border-[#F1F5F9] p-3 rounded-2xl"
      onPress={() => onSelect(value)}
    >
      <View className="flex flex-row items-center">
        <View
          className={cn(
            "h-6 w-6 border-2 border-[#ccc] rounded-full items-center justify-center",
            isSelected && "border-8 border-primary",
          )}
        >
          {isSelected && <View className="h-1 w-1 rounded-full bg-white" />}
        </View>
        <Text className="ml-3 font-bold text-[14px]">{label}</Text>
      </View>
      <Text className="text-[#94A3B8]">{sides}</Text>
    </Pressable>
  );
};

export default RadioButton;
