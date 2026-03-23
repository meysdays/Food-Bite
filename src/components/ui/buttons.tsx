import { cn } from "@/src/lib/ui";
import React from "react";
import { Pressable, PressableProps, View } from "react-native";
import Animated from "react-native-reanimated";
import Text from "./Text";

interface IButtonProps extends PressableProps {
  children?: React.ReactNode;
  className?: string;
}

function convertChildrenToString(children: React.ReactNode) {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (React.isValidElement(children)) return null;
}

function checkIsValidElement(children: React.ReactNode) {
  return React.isValidElement(children);
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = React.forwardRef<View, IButtonProps>(
  ({ onPress, children, className, ...props }, ref) => {
    const [isPressedIn, setIsPressedIn] = React.useState(false);
    const isValidElement = checkIsValidElement(children);
    const childrenToString = convertChildrenToString(children);

    const handlePressIn = () => {
      setIsPressedIn(true);
    };
    const handlePressOut = () => {
      setIsPressedIn(false);
    };
    return (
      <AnimatedPressable
        ref={ref}
        onPress={onPress}
        className={cn("bg-primary shadow-lg rounded-3xl py-4 disabled:bg-gray-200", className)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{
          transitionProperty: ["transform", "opacity"],
          transitionDuration: 200,
          transform: [{ scale: isPressedIn ? 0.95 : 1 }],
          transitionTimingFunction: "linear",
          opacity: isPressedIn ? 0.7 : 1
        }}
        {...props}
      >
        {isValidElement ? (
          children
        ) : (
          <Text
            className={cn(
              "text-white text-center text-xl font-bold",
              props.disabled && "text-gray-400",
            )}
          >
            {childrenToString}
          </Text>
        )}
      </AnimatedPressable>
    );
  },
);

Button.displayName = "Button";

export default Button;
