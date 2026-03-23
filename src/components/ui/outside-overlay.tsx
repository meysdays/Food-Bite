import { View, TouchableNativeFeedback } from 'react-native'
import React from 'react'

interface OutsideOverlayProps {
    onclose: () => void;
    children: React.ReactNode
}

const OutsideOverlay = ({onclose, children}: OutsideOverlayProps) => {
  return (
    <View className='absolute inset-0 z-40'>
      <TouchableNativeFeedback onPress={onclose}>
        <View className='flex flex-1 bg-black/20 justify-end'>
            <TouchableNativeFeedback>
                <View className='h-19/20 fixed z-50 bg-white rounded-t-2xl p-2 gap-2'>
                    {children}
                </View>
            </TouchableNativeFeedback>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default OutsideOverlay