import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryContainer from '../../components/Containers/CategoryContainer'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchScreen from '../SearchScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const CategoryScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white ">
      <TouchableOpacity
        onPress={() => navigation.navigate("SearchScreen")} >
        <View
          className=" bg-white items-center relative mb-2 ">
          <Feather
            style={{
              zIndex: 1,
              left: 25,
              position: 'absolute',
              marginTop: 19,
              marginLeft: 14,
            }
            }
            name="search"
            size={24}
            color="black" />
          <TextInput

            placeholder='Ara'
            className="pl-10 w-80 h-10 border mt-3 border-gray-700 rounded-3xl items-center justify-center " >

          </TextInput>
        </View>
      </TouchableOpacity>
      <View className="flex-row  mb-4 border border-black" >
        <View className="h-10  flex-1 border-r border-r-black justify-center items-center">
          <View className="flex-row justify-center items-center " >
            <AntDesign name="menu-fold" size={12} color="black" />
            <Text className="text-[18px] pl-5">Filtrele</Text>
          </View>
        </View>
        <View className="h-10  flex-1 justify-center items-center ">
          <View className="flex-row justify-center items-center">
            <FontAwesome name="sort" size={12} color="black" />
            <Text className="text-[18px] pl-5 ">Sırala </Text>
          </View>
        </View>
      </View>
      <ScrollView className="">
        <View className="m-1">
          <CategoryContainer />
        </View>
      </ScrollView>
    </View>
  )
}

export default CategoryScreen