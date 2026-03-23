import { View, Image } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import {
  BackIcon,
  CheckIcon,
  DeliveryIcon,
  MessageIcon,
  PhoneIcon,
  StarIcon,
} from "@/src/assests/icons";
import { MapImg, ProfileImg2 } from "@/src/assests/images";
import Text from "../../ui/Text";

const TrackOrder = () => {
  return (
    <AppScreen contentContainerClassName="px-0" edges={["top"]}>
      <View className="flex flex-row w-14/20 items-center justify-between px-4">
        <BackIcon />
        <Text className="font-bold text-2xl">Track Order</Text>
      </View>
      <Image source={MapImg} />

      <View className="bg-white absolute top-82 w-full h-full rounded-t-3xl p-4">
        <View className="flex flex-col items-center w-11/12">
          <Text className="font-bold text-center text-2xl">
            Your order is 5 minutes away.
          </Text>
          <Text className="text-center text-primary">Arriving at 12:45 PM</Text>
        </View>

        <View className="flex flex-col">
          <View className="flex-row gap-4 mt-1">
            <View>
              <View className="bg-primary/20 flex justify-center p-2 rounded-full">
                <CheckIcon />
              </View>
              <View className="w-0.5 h-6 mx-auto bg-primary" />
            </View>
            <View>
              <Text className="font-bold">Preparing</Text>
              <Text className="text-[#64748B]">
                Order received and being prepared
              </Text>
            </View>
          </View>
          <View className="flex-row gap-4 mt-1">
            <View>
              <View className="bg-primary/20 flex justify-center p-2 rounded-full">
                <CheckIcon />
              </View>
              <View className="w-0.5 h-6 mx-auto bg-primary" />
            </View>
            <View>
              <Text className="font-bold">Picked Up</Text>
              <Text className="text-[#64748B]">
                OCourier has collected your items
              </Text>
            </View>
          </View>
          <View className="flex-row gap-4 mt-1">
            <View>
              <View className="bg-primary flex justify-center py-3 px-2.5 rounded-full">
                <DeliveryIcon />
              </View>
            </View>
            <View>
              <Text className="font-bold text-primary">Out for Delivery</Text>
              <Text className="text-[#64748B]">
                In progress • 1.2 miles away
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-12 bg-primary/10 p-4 border border-primary/20 rounded-2xl">
          <View className="flex flex-row justify-between">
            <View className="flex-row gap-3">
              <View className="w-16 h-16">
                <Image className="w-full h-full rounded-full" source={ProfileImg2} />
              </View>

              <View>
                <Text className="font-bold w-11/12">Ricardo Gomez</Text>
                <View className="flex-row items-center">
                  <StarIcon />
                  <Text>4.9 (2k+ orders)</Text>
                </View>
              </View>
            </View>

            <View className="flex flex-row gap-3">
              <View className="bg-white flex justify-center px-4 h-13 rounded-full border border-black/10">
                <MessageIcon />
              </View>
              <View className="bg-primary flex justify-center px-4 h-12 rounded-full">
                <PhoneIcon />
              </View>
            </View>
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default TrackOrder;
