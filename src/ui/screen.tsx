import { cn } from "@/src/lib/ui";
import React from "react";
import { ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

interface IAppScreenProps extends SafeAreaViewProps {
  children: React.ReactNode;
  className?: string;
  contentContainerClassName?: string;
}

const UniwindSafeAreaView = withUniwind(SafeAreaView);

export default function AppScreen(props: IAppScreenProps) {
  const { children, className, ...rest } = props || {};
  return (
    <UniwindSafeAreaView className={cn("flex-1 bg-white", className)} {...rest}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerClassName={cn(
          "px-5 gap-6",
          rest.contentContainerClassName,
        )}
        showsVerticalScrollIndicator={false}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          {children}
        </GestureHandlerRootView>
      </ScrollView>
    </UniwindSafeAreaView>
  );
}
