import { View } from "react-native";
import React, { useEffect, useState } from "react";
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
} from "react-native-reanimated";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

const TABS = ["Active", "Past"] as const;

type Tab = (typeof TABS)[number];

const Order = () => {
  const [tab, setTab] = useState<Tab>("Active");
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);

  // const currentIndex = TABS.indexOf(tab);

  // const animatedValue = useSharedValue(1);

  useEffect(() => {
    currentIndex.value = TABS.indexOf(tab);
  }, [tab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedValue.value }],
    };
  });

  const updateTab = (index: number) => {
    if (index >= 0 && index < TABS.length) {
      setTab(TABS[index]);
    }
  };

  const flingLeftGesture = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      if (currentIndex.value < TABS.length - 1) {
        const nextIndex = currentIndex.value + 1;

        animatedValue.value = withSpring(0);

        // runOnJS(updateTab)(nextIndex);
        updateTab(nextIndex);
      }
    })
    .runOnJS(true);

  const flingRightGesture = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(() => {
      if (currentIndex.value > 0) {
        const nextIndex = currentIndex.value - 1;

        animatedValue.value = withSpring(1);

        // runOnJS(updateTab)(nextIndex);
        updateTab(nextIndex);
      }
    })
    .runOnJS(true);

  const multiGesture = Gesture.Simultaneous(
    flingRightGesture,
    flingLeftGesture,
  );

  return (
    <AppScreen edges={["top"]} contentContainerClassName="px-0">
      <View className="flex flex-row w-14/20 items-center justify-between px-5">
        <BackIcon />
        <Text className="font-bold text-2xl">My Orders</Text>
      </View>

      <View className="border-b border-primary/10 w-full">
        <TabNavigator tabs={TABS} value={tab} onChange={setTab} />
      </View>

      <GestureDetector gesture={multiGesture}>
        <Animated.View style={animatedStyle}>
          <View className="flex flex-1 px-5">
            {tab === "Active" ? (
              <View className="">
                <Text className="-mt-2 font-bold tracking-widest text-[#64748B]">
                  ACTIVE ORDERS
                </Text>
                {ActiveOrders.map((item) => (
                  <OrderCard
                    key={item.resName}
                    image={item.image}
                    resName={item.resName}
                    time={item.time}
                    status={item.status}
                    foodDesc={item.foodDesc}
                    amount={item.amount}
                    button={item.button}
                  />
                ))}

                <Text className="font-bold tracking-widest text-[#64748B] py-4">
                  PAST ORDERS
                </Text>

                {PastOrders.map((item) => (
                  <OrderCard
                    key={item.resName}
                    image={item.image}
                    resName={item.resName}
                    time={item.time}
                    status={item.status}
                    foodDesc={item.foodDesc}
                    amount={item.amount}
                    button={item.button}
                  />
                ))}
              </View>
            ) : (
              <View className="">
                <Text className="font-bold tracking-widest text-[#64748B] py-4">
                  PAST ORDERS
                </Text>

                {PastOrders.map((item) => (
                  <OrderCard
                    key={item.resName}
                    image={item.image}
                    resName={item.resName}
                    time={item.time}
                    status={item.status}
                    foodDesc={item.foodDesc}
                    amount={item.amount}
                    button={item.button}
                  />
                ))}
              </View>
            )}
          </View>
          {/* {tab === "Past" && <Text>Past Content</Text>} */}
        </Animated.View>
      </GestureDetector>
    </AppScreen>
  );
};

export default Order;
