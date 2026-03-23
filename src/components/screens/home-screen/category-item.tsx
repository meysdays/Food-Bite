import { View, Image, Pressable, ImageSourcePropType } from "react-native";
import React from "react";
import Text from "../../ui/Text";
import { cn } from "@/src/lib/ui";

interface CategoryItemProps {
  name: string;
  imageUrl: ImageSourcePropType;
  id: string;
  selected: boolean;
}

const CategoryItem = ({
  name,
  imageUrl,
  id,
  selected,
}: CategoryItemProps) => {
  return (
    <Pressable
      className={cn(
        "p-2 rounded-2xl",
        selected && "border-green-600"
      )}
    >
      <View
        className={cn(
          "items-center p-2 gap-1 rounded-xl",
          selected && "bg-green-50"
        )}
      >
        <View className="size-14 rounded-3xl overflow-hidden">
          <Image
            source={imageUrl}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </View>
        <Text className="text-center">
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
