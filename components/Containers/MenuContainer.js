import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CategoryScreen from '../../screens/KategoriSayfaları/CategoryArazi'


const MenuContainer = ({title, ImageSrc, type, setType}) => {
  const navigation = useNavigation();
    const handlePress = () =>{
        setType(title.toLowerCase())
    }
  return (
    <View className="items-center justify-center space-y-3" >
        <View className="w-30 h-30 rounded-full items-center justify-center mr-2">
              <Image className="w-24 h-24 object-contain " source={ImageSrc}
              />
        </View>
        <Text className="text-[#03b48e] font-semibold">{title}</Text>
    </View>
  )
}

export default MenuContainer