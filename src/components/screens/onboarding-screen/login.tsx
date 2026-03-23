import { View, Text, Pressable } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import { AppleIcon, BackIcon, GoogleIcon } from "@/src/assests/icons";
import Form from "../../ui/form";
import Button from "../../ui/buttons";
import { router } from "expo-router";

const LoginScreen = () => {
  const Icon = BackIcon;
  const Google = GoogleIcon;
  const Apple = AppleIcon;

  const Category = [
    {
      name: "EMAIL OR PHONE",
      placeholder: "Enter your email or phone number",
    },
  ];
  return (
    <AppScreen>
      <View className="items-start">
        <Pressable onPress={() => router.back}>
        <Icon />
        </Pressable>
      </View>
      <View className="mt-8">
        <Text className="text-4xl font-bold">Welcome Back</Text>
        <Text className="font-regular text-[18px] text-[#475569] mt-2">
          Enter your details to sign in to your account and start exploring
          local favorites.
        </Text>
      </View>

      {Category.map((item) => (
        <View key={item.name} className="mt-4">
          <Form
            textStyle="text-[#64748B]"
            title={item.name}
            placeholder={item.placeholder}
          />
        </View>
      ))}

      <Button onPress={() => router.navigate("/(tabs)/home")} className="bg-[#0F172A]">Continue</Button>

      <View className="flex-row justify-center items-center gap-2 my-6">
        <View className="w-1/2 h-0.5 bg-[#E2E8F0]" />
        <Text className="font-regular">OR</Text>
        <View className="w-1/2 h-0.5 bg-[#E2E8F0]" />
      </View>

      <View className="gap-3">
        <Button className=" flex items-center bg-transparent shadow-none border border-[#E2E8F0] text-black">
          <View className="flex-row items-center">
            <Apple />
            <Text className="font-bold text-[18px]">Continue with Apple</Text>
          </View>
        </Button>
        <Button className=" flex items-center bg-transparent shadow-none border border-[#E2E8F0] text-black">
          <View className="flex-row items-center gap-1">
            <Google />
            <Text className="font-bold text-[18px]">Continue with Google</Text>
          </View>
        </Button>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;
