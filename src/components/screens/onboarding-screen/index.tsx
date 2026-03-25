import { View, Text, Pressable } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import { ScooterIcon } from "@/src/assests/icons";
import Button from "../../ui/buttons";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const Icon = ScooterIcon;

  const handleSkip = () => {
    router.push("/auth/signup");
  };
  return (
    <AppScreen className="" edges={["top"]}>
      
        <Pressable className="items-end" onPress={() => router.navigate("/(tabs)/home")}>
          <Text className="text-md font-regular text-primary">Skip</Text>
        </Pressable>

      <View className="bg-[#F2F2F2] rounded-2xl border border-[#E5E7EB]">
        <Icon />
      </View>

      <View className="">
        <Text className="text-center font-bold text-4xl">
          Your Cravings, Delivered.
        </Text>
      </View>
      <View className="">
        <Text className="text-center font-regular text-sm text-[#64748B]">
          Explore the best local restaurants.
        </Text>
        <View className="flex flex-row justify-center gap-2">
          <View className="w-6 h-1 bg-primary rounded-full self-center mt-4 mb-6" />
          <View className="w-2 h-2 bg-gray-200 rounded-full self-center mt-4 mb-6" />
          <View className="w-2 h-2 bg-gray-200 rounded-full self-center mt-4 mb-6" />
        </View>
      </View>

      <Button onPress={handleSkip}>Let&apos;s Eat!</Button>
    </AppScreen>
  );
}
