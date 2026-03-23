import { Pressable, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "@/src/ui/screen";
import {
  LocationIcon,
  NotificationIcon,
  SearchIcon,
} from "@/src/assests/icons";
import Text from "../../components/ui/Text";
import TextInput from "@/src/components/ui/input";
import { Categories } from "@/src/components/screens/home-screen";
import Restuarants from "@/src/components/screens/home-screen/restuarant";
import CustomizeModal from "@/src/components/ui/modal";

const HomeScreen = () => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const Location = LocationIcon;
  const Notification = NotificationIcon;
  const Search = SearchIcon;

  function closeTodoForm() {
    setIsFormVisible(false);
  }
  function openTodoForm() {
    setIsFormVisible(true);
  }
  return (
    <AppScreen edges={["top"]}>
      <View className="flex flex-row justify-between items-center">
        <View className="items-start">
          <Location />
        </View>

        <View className="items-center">
          <Text className="text-[#64748B] font-regular">Deliver to</Text>
          <Text className="text-black font-bold ">San Francisco, CA</Text>
        </View>

        <View className="bg-primary/20 p-2 rounded-full">
          <Notification />
        </View>
      </View>

      {isFormVisible && (
        <CustomizeModal onCancel={closeTodoForm}/>
      )}

      <View className="flex flex-row  items-center px-4 py-2 rounded-full bg-[#F1F5F9] ">
        <Search />
        <TextInput
          inputContainerClassName="w-11/12"
          inputClassName="border-0 font-medium"
          placeholder="Search for food or grocery"
        />
      </View>

      <Categories />
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-2xl">Top Restaurants</Text>

        <Pressable onPress={openTodoForm}>
          <Text className="text-primary text-xl font-regular">View all</Text>
        </Pressable>
      </View>

      <Restuarants/>
    </AppScreen>
  );
};

export default HomeScreen;
