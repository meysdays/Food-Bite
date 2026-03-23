import { View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import OutsideOverlay from "./outside-overlay";
import Text from "./Text";
import RadioButton from "./radio";
import { MinusIcon, PlusIcon } from "@/src/assests/icons";
import Button from "./buttons";

interface ModalProps {
  onCancel: () => void;
}

const CustomizeModal = ({ onCancel }: ModalProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <OutsideOverlay onclose={onCancel}>
      <Pressable>
        <View className="bg-[#E2E8F0] h-1.5 rounded-2xl w-1/11 mx-auto " />
      </Pressable>

      <View className="w-19/20 h-64 mx-auto ">
        <Image
          className="w-full h-full rounded-3xl"
          resizeMode="cover"
          source={require("../../assests/images/burger2.png")}
        />
      </View>

      <View className="mt-4 mx-2 flex flex-row justify-between ">
        <View>
          <Text className="font-bold text-2xl">Double Truffle Burger</Text>
          <Text className="font-regular w-11/12 text-[#64748B]">
            Premium beef, truffle mayo, caramelised onions.
          </Text>
        </View>
        <View>
          <Text className="text-primary font-bold text-xl">$15.99</Text>
        </View>
      </View>

      <Text className="font-bold text-xl mt-4">Choose Your Cheese</Text>

      <View>
        <RadioButton
          label="Aged Cheddar"
          value="option1"
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
          sides="Included"
        />
        <RadioButton
          label="Swiss Emmental"
          value="option2"
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
          sides="+$0.50"
        />
        <RadioButton
          label="Blue Stilton"
          value="option3"
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
          sides="+$1.00"
        />
      </View>

      <View className="flex flex-row items-center justify-between mx-auto w-1/3 mb-2">
        <View className="border border-[#E2E8F0] px-3 py-4.5 rounded-full">
          <MinusIcon />
        </View>
        <View>
          <Text className="font-bold text-xl">1</Text>
        </View>
        <View className="border border-[#E2E8F0] px-3 py-3 rounded-full">
          <PlusIcon />
        </View>
      </View>

      <Button>Add 1 to Cart • $15.99</Button>
    </OutsideOverlay>
  );
};

export default CustomizeModal;
