import { View, Pressable } from "react-native";
import React from "react";
import Text from "./Text";
import { cn } from "@/src/lib/ui";

type TabsProps<T extends readonly string[]> = {
  tabs: T;
  value: T[number];
  onChange: (val: T[number]) => void;
};

function TabNavigator<T extends readonly string[]>({
  tabs,
  value,
  onChange,
}: TabsProps<T>) {
  return (
    <View className="flex flex-row px-2 gap-3">
      {tabs.map((item) => {
        const isActive = item === value;

        return (
          <Pressable className="cursor-pointer" key={item} onPress={() => onChange(item)}>
            <Text
              className={cn(
                "p-2.5 font-bold text-[#64748B]",
                isActive && "border-b-2 border-primary text-primary transition-colors",
              )}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TabNavigator;
