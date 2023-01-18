import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { differentImage } from '../../assets'
import { useNavigation } from '@react-navigation/native'



const CategoryContainer = ({ad,fiyat,yer}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:''
    })
    }, [])
  return (
      
      <View className="h-%60 w-%50 border border-gray-600 m-1 ">
        <Image source={differentImage}
          className="m-1 p-1 w-40 h-60 justify-center items-center"
        />
        <View className>
          <Text className="text-[15px] ml-2 ">{ad} </Text>
          <Text className="text-gray-600 mt-2 ml-2">{fiyat}</Text>
          <Text className="text-gray-600 mt-2 ml-2">{yer}</Text>
        </View>
      </View>
     
    
  )
}

export default CategoryContainer