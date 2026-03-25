import { View, TouchableNativeFeedback, Pressable } from "react-native";
import React from "react";

interface OutsideOverlayProps {
  onclose: () => void;
  children: React.ReactNode;
}

const OutsideOverlay = ({ onclose, children }: OutsideOverlayProps) => {
  return (
    <View className="absolute inset-0 z-40">
      <TouchableNativeFeedback onPress={onclose}>
        <View className="flex flex-1 bg-black/40 justify-end">
          <TouchableNativeFeedback>
            <View className="h-11/12 fixed z-50 bg-white rounded-t-2xl p-2 gap-2">
              <Pressable>
                <View className="bg-[#E2E8F0] h-1.5 rounded-2xl w-1/11 mx-auto " />
              </Pressable>
              {children}
            </View>
          </TouchableNativeFeedback>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default OutsideOverlay;
