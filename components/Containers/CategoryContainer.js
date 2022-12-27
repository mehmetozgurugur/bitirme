import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { differentImage } from '../../assets'
import { useNavigation } from '@react-navigation/native'



const CategoryContainer = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:''
    })
    }, [])
  return (
    <View className="flex-row">
      <View className="h-70  flex-1 border border-gray-300 justify-center items-center ">
        <Image source={differentImage}
          className=" mt-1 w-40 h-60"
        />
        <View>
          <Text className="text-[18px] ">Satıcı </Text>
          <Text className="text-gray-600 mt-2">Cüzdan</Text>
        </View>
      </View>
      <View className="h-70  flex-1 justify-center items-center border border-gray-300">
        <Image source={differentImage}
          className=" mt-1 w-40 h-60"
        />
        <Text className="text-[18px]">10 </Text>
        <Text className="text-gray-600 mt-2">Siparişlerim</Text>
      </View>
    </View>
  )
}

export default CategoryContainer