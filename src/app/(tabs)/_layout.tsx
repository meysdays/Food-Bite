import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "@/src/components/ui/tab-icon";
import {
  AccountIcon,
  HomeIcon,
  OrderIcon,
  SearchIcon,
} from "@/src/assests/icons";

const TabsLayout = () => {
  // const { bottom } = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          flex: 1,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home" Icon={HomeIcon} focused={focused} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="search"
              Icon={SearchIcon}
              focused={focused}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="order"
              Icon={OrderIcon}
              focused={focused}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="account"
              Icon={AccountIcon}
              focused={focused}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
