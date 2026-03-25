import { View, ImageSourcePropType, Image, Pressable } from "react-native";
import React from "react";
import Text from "./Text";
import { useAppContext } from "@/src/context";

interface CardProps {
  id: number;
  img: ImageSourcePropType;
  imgLogo: ImageSourcePropType;
  foodName: string;
  restuarant: string;
  time: string;
  distance: string;
}

const Card = ({
  id,
  img,
  imgLogo,
  foodName,
  restuarant,
  time,
  distance,
}: CardProps) => {
  const {openModal} =useAppContext()
  return (
    <Pressable onPress={() => openModal(id)} className="flex flex-col mb-4">
      
      <View className="h-50 w-full rounded-xl overflow-hidden">
        <Image
          source={img}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="flex flex-row items-center mt-3">

        <View className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 justify-center items-center mr-3">
          <Image
            source={imgLogo}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>

        <View className="flex-1">
          <Text className="text-base font-bold">{foodName}</Text>
          <Text className="text-slate-500 text-sm">{restuarant}</Text>
        </View>

        <View className="items-end">
          <Text className="font-bold text-sm">{time}</Text>
          <Text className="text-slate-400 text-xs">{distance}</Text>
        </View>

      </View>
    </Pressable>
  );
};

export default Card;
