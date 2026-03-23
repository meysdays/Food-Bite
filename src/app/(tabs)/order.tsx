import { View, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import AppScreen from "@/src/ui/screen";
import { BackIcon } from "@/src/assests/icons";
import Text from "../../components/ui/Text";
import TabNavigator from "@/src/components/ui/tab";
import OrderCard from "@/src/components/ui/order-card";
import { ActiveOrders, PastOrders } from "@/data";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedReaction,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TABS = ["Active", "Past"] as const;
type Tab = (typeof TABS)[number];

const Order = () => {
  const [tab, setTab] = useState<Tab>("Active");

  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);

  // 🔗 Sync UI → React state (only for TabNavigator)
  useAnimatedReaction(
    () => currentIndex.value,
    (value) => {
      runOnJS(setTab)(TABS[value]);
    },
  );

  // 🎯 Gesture (drag + inertia + snapping)
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = -currentIndex.value * SCREEN_WIDTH + e.translationX;
    })
    .onEnd((e) => {
      const velocity = e.velocityX;
      const threshold = SCREEN_WIDTH / 2;

      let nextIndex = currentIndex.value;

      if (e.translationX < -threshold || velocity < -500) {
        nextIndex += 1;
      } else if (e.translationX > threshold || velocity > 500) {
        nextIndex -= 1;
      }

      // Clamp
      nextIndex = Math.max(0, Math.min(TABS.length - 1, nextIndex));

      currentIndex.value = nextIndex;

      // Snap
      translateX.value = withSpring(-nextIndex * SCREEN_WIDTH, {
        damping: 15,
        stiffness: 120,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // 🧠 Tab click → move swipe
  const handleTabChange = (selectedTab: Tab) => {
    const index = TABS.indexOf(selectedTab);
    currentIndex.value = index;
    translateX.value = withSpring(-index * SCREEN_WIDTH);
  };

  return (
    <AppScreen edges={["top"]} contentContainerClassName="px-0">
      {/* Header */}
      <View className="flex flex-row w-14/20 items-center justify-between px-5">
        <BackIcon />
        <Text className="font-bold text-2xl">My Orders</Text>
      </View>

      {/* Tabs */}
      <View className="border-b border-primary/10 w-full">
        <TabNavigator tabs={TABS} value={tab} onChange={handleTabChange} />
      </View>

      {/* Swipe Container */}
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: SCREEN_WIDTH * TABS.length,
            },
            animatedStyle,
          ]}
        >
          {/* ACTIVE TAB */}
          <View style={{ width: SCREEN_WIDTH }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-5">
                <Text className="-mt-2 font-bold tracking-widest text-[#64748B]">
                  ACTIVE ORDERS
                </Text>

                {ActiveOrders.map((item) => (
                  <OrderCard key={item.resName} {...item} />
                ))}

                <Text className="font-bold tracking-widest text-[#64748B] py-4">
                  PAST ORDERS
                </Text>

                {PastOrders.map((item) => (
                  <OrderCard key={item.resName} {...item} />
                ))}
              </View>
            </ScrollView>
          </View>

          {/* PAST TAB */}
          <View style={{ width: SCREEN_WIDTH }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-5">
                <Text className="font-bold text-lg">Past Orders</Text>

                {PastOrders.map((item) => (
                  <OrderCard key={item.resName} {...item} />
                ))}
              </View>
            </ScrollView>
          </View>
        </Animated.View>
      </GestureDetector>
    </AppScreen>
  );
};

export default Order;
