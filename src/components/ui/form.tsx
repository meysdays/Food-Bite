import { View, Text } from 'react-native'
import React from 'react'
import AppScreen from '@/src/ui/screen'
import TextInput from './input';
import { cn } from '@/src/lib/ui';

interface IFormProps {
    title: string;
    placeholder?: string;
    textStyle?: string;
    textInputStyle?: string;
    containerStyle?: string
}

const Form = ({ title, placeholder, textStyle, textInputStyle, containerStyle }: IFormProps) => {
  return (
    
        <View className={cn("gap-2",containerStyle)}>
            <Text className={cn("tracking-wide font-bold",textStyle)}>{title}</Text>
            <TextInput inputClassName="p-4 rounded-2xl text-[18px]" placeholder={placeholder}></TextInput>
        </View>
    
  )
}

export default Form