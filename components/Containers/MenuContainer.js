import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CategoryScreen from '../../screens/KategoriSayfaları/CategoryD'


const MenuContainer = ({title, ImageSrc, type, setType}) => {
  const navigation = useNavigation();
    const handlePress = () =>{
        setType(title.toLowerCase())
    }
  return (
    <TouchableOpacity className="items-center justify-center space-y-3" 
    onPress={()=> navigation.navigate("CategoryD")}
    
    >
        <View className="w-30 h-30 rounded-full items-center justify-center mr-2">
              <Image className="w-24 h-24 object-contain " source={ImageSrc}
              />
        </View>
        <Text className="text-[#03b48e] font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer