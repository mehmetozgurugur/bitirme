import { View, 
  TouchableWithoutFeedback,
  Keyboard,
  Text, 
StyleSheet } from 'react-native'
import React from 'react'
import { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const SearchScreen = () => {
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'aaa',
      headerLeft: () => (
        <Ionicons 
        style={{marginLeft:0}}
        name="ios-chevron-back-sharp"
         size={26} 
         color="black" 
         onPress = {() => navigation.goBack()}
         />
      ),
    
    headerRight: () => (
      
      <Ionicons 
      // onPress={() => navigation.openDrawer()}
      style={{marginRight:3}}
      name="menu" 
      size={26} 
      color="black" 
      
      />
    ),
  })
  }, [])

  return (
    <TouchableWithoutFeedback 
    
    onPress={Keyboard.dismiss}>
    <View className="flex-1 bg-white items-center relative ">
      <Feather 
      style={{
        zIndex:1,
        left:25,
        position:'absolute',
        marginTop:19,
        marginLeft:14,
      }
      }
      name="search"
       size={24} 
       color="black" />
      <TextInput 
      
      placeholder='Ara'
      className="pl-10 w-80 h-10 border mt-3 border-gray-700 rounded-3xl items-center justify-center " >
        
      </TextInput>
      <View className="mt-3 justify-start items-start " >
        <Text className="font-semibold" >Son Aramalar</Text>
      </View>
    </View>
    
    </TouchableWithoutFeedback>
  )
}

export default SearchScreen