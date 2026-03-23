import { Text as RNText } from "react-native";
import React from "react";
import { cn } from "@/src/lib/ui";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <RNText className={cn("text-sm font-regular text-black", className)}>
      {children}
    </RNText>
  );
}
