import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ItemsContainer = ({ImageSrc, title, location}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("ContentScreen")}
    className="rounded-md border border-gray-200 space-y-2 px-2 py-2 bg-green-50 w-[220px]  my-1 m-2">
        <Image 
            className="w-full h-80 rounded-md object-cover"
            source={{uri : ImageSrc}}  
        />
        <View className="flex-row items-center"> 
        <FontAwesome  name="link" size={16} color="black" />
        <Text className="text-[12px] font-bold px-1" >{title}</Text>
        </View>
        <View className="flex-row items-center ">
        <MaterialIcons name="location-pin" size={20} color="black" />
        <Text className="text-[12px] font-bold" >{location}</Text>
        </View>
    </TouchableOpacity>
    
      )
}

export default ItemsContainer