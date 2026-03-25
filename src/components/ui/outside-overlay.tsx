import {
  View,
  TouchableNativeFeedback,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface OutsideOverlayProps {
  onclose: () => void;
  children: React.ReactNode;
}

const OutsideOverlay = ({ onclose, children }: OutsideOverlayProps) => {
  const animatedValue = useSharedValue(0);
  const translateY = useSharedValue(0);
  const SCREEN_HEIGHT = Dimensions.get("window").height;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        // translateY: interpolate(
        //   animatedValue.value,
        //   [0, 1],
        //   [SCREEN_HEIGHT * 0.9, 0],
        // ),
        translateY: translateY.value,
        
      },
    ],
  }));

  useEffect(() => {
    animatedValue.value = withTiming(1, { duration: 300 });
  }, []);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationY > 0) {
        translateY.value = e.translationY;
      }
    })
    .onEnd((e) => {
      if (e.translationY > 150) {
        translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 });
        onclose();
      } else {
        translateY.value = withTiming(0, { duration: 200 });
      }
    })
    .runOnJS(true);

  return (
    <View className="absolute inset-0 z-40">
      <TouchableNativeFeedback onPress={onclose}>
        <View className="flex flex-1 bg-black/40 justify-center">
          <Animated.View
            style={[
              {
                height: SCREEN_HEIGHT * 0.98,
                display: "flex",
                alignItems: "stretch",
                marginTop: 110,
              },
              animatedStyle,
            ]}
          >
            <TouchableNativeFeedback>
              <View className="bg-white rounded-t-2xl p-2 gap-2 flex-1">
                <GestureDetector gesture={panGesture}>
                  <View>
                    <View className="bg-[#E2E8F0] h-1.5 rounded-2xl w-1/11 mx-auto " />
                  </View>
                </GestureDetector>
                {children}
              </View>
            </TouchableNativeFeedback>
          </Animated.View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default OutsideOverlay;
