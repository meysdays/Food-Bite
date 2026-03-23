import { Image, View } from "react-native";
import React from "react";
import AppScreen from "@/src/ui/screen";
import { BackIcon, SettingIcon } from "@/src/assests/icons";
import Text from "../../components/ui/Text";
import { ProfileImg } from "@/src/assests/images";
import Button from "@/src/components/ui/buttons";
import { AccountData } from "@/data";
import AccountSectionComponent from "@/src/components/ui/account-setion";

const Account = () => {
  return (
    <AppScreen edges={["top"]}>
      <View className="flex flex-row justify-between items-center">
        <BackIcon />
        <Text className="font-bold text-xl">My Profile</Text>
        <SettingIcon />
      </View>

      <View className="mx-auto flex flex-col items-center">
        <View className="h-30 w-30 border-4 border-primary/10 rounded-full">
          <Image className="w-full h-full rounded-full" source={ProfileImg} />
        </View>
        <View className="mt-2">
          <Text className="text-center font-extraBold text-2xl">
            Alex Harrison
          </Text>
          <Text className="text-center text-[#64748B] font-regular">
            alex.harrison@example.com
          </Text>
        </View>

        <Button className="bg-[#F1F5F9] shadow-none mt-4"><Text className="mx-6 font-bold">Edit Profile</Text></Button>
      </View>

      <View>
        {AccountData.map((item) =>(
          <AccountSectionComponent
          Icon={item.Icon}
          title={item.title}
          key={item.title}
          />
        ))}
      </View>
    </AppScreen>
  );
};

export default Account;
