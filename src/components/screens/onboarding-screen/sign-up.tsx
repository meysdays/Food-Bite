import { Pressable, View } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import { BackIcon } from "@/src/assests/icons";
import Text from "../../ui/Text";
import Form from "../../ui/form";
import Button from "../../ui/buttons";
import { router } from "expo-router";

const Category = [
  {
    name: "NAME",
    placeholder: "Enter your full name",
  },
  {
    name: "EMAIL",
    placeholder: "email@example.com",
  },
  {
    name: "PHONE NUMBER",
    placeholder: "+1(555)000-0000",
  },
];

const SignUpScreen = () => {
  const Icon = BackIcon;
  return (
    <AppScreen className="" edges={["top"]}>
      <View className="items-start">
        <Icon />
      </View>
      <View>
        <Text className="text-4xl font-extraBold">Create Account</Text>
        <Text className="font-regular text-xl text-[#475569] mt-2">
          Join us for a delicious journey
        </Text>
      </View>

      {Category.map((item) => (
        <View key={item.name} className="">
          <Form title={item.name} placeholder={item.placeholder} />
        </View>
      ))}

      <Button className="bg-[#0F172A] mt-8">Sign Up</Button>

      <View className="flex-row justify-center gap-1 my-4 ">
        <Text className="font-medium text-[16px]">Already have an account?</Text>
        <Pressable onPress={() => router.push("/auth/login")}>
          <Text className="text-center text-[16px] text-primary font-medium">Log In</Text>
        </Pressable>
      </View>

      <View className="h-1 w-full bg-linear-to-r from-transparent via-primary to-transparent co"/>
    </AppScreen>
  );
};

export default SignUpScreen;
