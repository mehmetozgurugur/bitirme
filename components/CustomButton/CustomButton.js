import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const CustomButton = ({texta, onPress, type}) => {
  const navigation = useNavigation();

  return (
  <TouchableOpacity onPress={onPress}  >
    <View 
    
    className="bg-[#50e7c9] w-80 h-10 items-center justify-center mt-3 rounded-lg " >

        <Text className="text-[#163d35]"> {texta} </Text>
      
    </View>
    </TouchableOpacity>
    
    
  )
}

export default CustomButton