import { View, Text, Pressable } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import {
  BackIcon,
  CancelIcon,
  SearchIcon,
} from "@/src/assests/icons";
import TextInput from "@/src/components/ui/input";
import { SearchData } from "@/data";
import { cn } from "@/src/lib/ui";

const Search = () => {
  return (
    <AppScreen edges={["top"]}>
      <View className="flex flex-row items-center gap-4">
        <View className="bg-primary/20 p-2 rounded-full">
          <BackIcon />
        </View>
        <Text className="font-bold text-xl">Search</Text>
      </View>

      <View className="flex flex-row  items-center px-4 py-2 rounded-full bg-[#F1F5F9] ">
        <SearchIcon />
        <TextInput
          inputContainerClassName="w-11/12"
          inputClassName="border-0 font-medium"
          placeholder="Search for food, groceries, or restaurants"
        />
      </View>

      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-[18px]">Recent Searches</Text>
        <Pressable>
          <Text className="text-[#7E57C2] font-regular">CLEAR ALL</Text>
        </Pressable>
      </View>

      <View className="flex-row flex-wrap gap-2">
        <View className="flex flex-row justify-center items-center gap-2 p-3 rounded-full bg-[#F3E5F5]">
          <Text className="">Spicy Ramen</Text>
          <CancelIcon />
        </View>
        <View className="flex flex-row justify-center items-center gap-2 p-3 rounded-full bg-[#F3E5F5]">
          <Text className="">Healthy Salad</Text>
          <CancelIcon />
        </View>
        <View className="flex flex-row justify-center items-center gap-2 p-3 rounded-full bg-[#F3E5F5]">
          <Text className="">Juice Bar</Text>
          <CancelIcon />
        </View>
      </View>

      <Text className="font-bold text-xl">Top Categories</Text>

      <View className="flex flex-row justify-between flex-wrap gap-3">
        {SearchData.map((item) => (
          <View
            key={item.name}
            style={{ backgroundColor: item.color }}
            className="w-12/25 p-4 rounded-3xl flex-row justify-between overflow-hidden"
          >
            <View className="">
              <item.img />
              <Text className="font-bold ">{item.name}</Text>
            </View>
            <View className="-mr-3 -mb-4">
              <item.imgbag />
            </View>
          </View>
        ))}
      </View>
    </AppScreen>
  );
};

export default Search;
