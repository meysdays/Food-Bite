import { View, TextInput as RNTextInput, TextInputProps } from "react-native";
import React from "react";
import { cn } from "@/src/lib/ui";

interface ITextInputProps extends TextInputProps {
  asView?: boolean;
  inputClassName?: string;
  inputContainerClassName?: string;
  placeholder?: string;
}

const TextInput = React.forwardRef<RNTextInput, ITextInputProps>(
  (
    { asView = true, inputClassName, inputContainerClassName, placeholder, ...props },
    ref,
  ) => {
    const Container = asView ? View : React.Fragment;
    return (
      <Container className={cn("", inputContainerClassName)}>
        <RNTextInput
        placeholder={placeholder}
         placeholderTextColor="#9CA3AF"
          className={cn(
            "placeholder:text-gray-700 font-regular text-sm border pb-3 border-gray-300",
            inputClassName,
          )}
          ref={ref}
          {...props}
        />
      </Container>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput
