import { Image, ImageSourcePropType, Pressable, View } from "react-native";
import React from "react";
import Text from "./Text";
import { cn } from "@/src/lib/ui";
import { router } from "expo-router";

interface OrderCardProps {
  image: ImageSourcePropType;
  resName: string;
  time: string;
  status: string;
  foodDesc: string;
  amount: string;
  button: string;
}

const handleNavigate = (button: string) => {
  if (button === "Track Order") {
    router.navigate("/order");
    return
  }
  router.navigate('/order/re-order')
};

const OrderCard = ({
  image,
  resName,
  amount,
  foodDesc,
  status,
  time,
  button,
}: OrderCardProps) => {
  return (
    <View className="flex flex-col border border-[#F1F5F9] rounded-3xl p-4">
      <View className="flex flex-row items-start justify-between border-b border-[#F1F5F9] pb-4">
        <View className="flex-row gap-3">
          <View className="w-14 h-14">
            <Image className="w-full h-full rounded-2xl" source={image} />
          </View>
          <View>
            <Text className="font-bold text-xl">{resName}</Text>
            <Text className="text-[#64748B]">{time}</Text>
          </View>
        </View>
        <View
          className={cn(
            "bg-primary/20 py-1 px-3 border border-primary/40 rounded-full",
            status === "Delivered" && "bg-[#F1F5F9]",
          )}
        >
          <Text
            className={cn(
              "text-primary",
              status === "Delivered" && "text-[#64748B]",
            )}
          >
            {status}
          </Text>
        </View>
      </View>
      <View className="py-3 border-b border-[#F1F5F9] pb-4">
        <Text>{foodDesc}</Text>
      </View>
      <View className="flex flex-row justify-between items-center py-3">
        <Text className="font-bold text-xl text-primary">{amount}</Text>
        <Pressable
        onPress={() => handleNavigate(button)}
          className={cn(
            "bg-primary py-2 px-7 rounded-2xl",
            button === "Reorder" && "bg-white border border-primary",
          )}
        >
          <Text
            className={cn(
              "text-white font-bold",
              button === "Reorder" && "text-primary",
            )}
          >
            {button}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderCard;
