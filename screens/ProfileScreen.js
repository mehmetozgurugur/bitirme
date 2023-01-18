import React, { useEffect, useLayoutEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { userImage } from '../assets';
import { useNavigation } from '@react-navigation/native'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth} from "firebase/auth";
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../firebase-config';
import {collection, doc, getFirestore, addDoc,getDoc, Firestore } from "firebase/firestore"
import { Value } from 'react-native-reanimated';
import {create} from '../screens/SignUpScreen'


const ProfileScreen = () => {
  const db = getFirestore(app)
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();
  
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <Ionicons 
        style={{marginLeft:5}}
        name="ios-chevron-back-sharp"
         size={26} 
         color="black" 
         onPress = {() => navigation.goBack()}
         />
      ),
      headerRight: () => (
        
        <MaterialIcons 
        style={{marginRight:5}}
        onPress={()=>navigation.navigate("Notification")}
        name="notifications-none" size={24} color="black" />
      ),
    })
  }, [])


  return (
   
   <SafeAreaView>
      <ScrollView>
        <View>
            <View className="ml-6 mt-1 flex-row">
                <Image className="w-20 h-20  rounded-md items-center justify-center "
                  source={userImage}
                />
              <View className="ml-4 justify-center ">
                <Text className=" text-semibold text-[26px]"> BURAYA</Text>
                <Text className="pt-1">{auth.currentUser?.email}</Text>
              </View>
            </View>
        </View>
        
        <View className="mt-4 ml-8 space-y-2 space-x-1">
        <View className="flex-row">
            <EvilIcons name="location" size={26} color="black" />
            <Text className="ml-2">Adana,Ceyhan</Text>
        </View>
        <View className="flex-row ">
           <Ionicons name="ios-phone-portrait-outline" size={20} color="black" />
            <Text className="ml-2">+90 546 935 04 69</Text>
        </View>
        <View className="flex-row">
            <Ionicons name="ios-mail-outline" size={20} color="black" />
            <Text className="ml-2">ozgurugur7@outlook.com</Text>
        </View>
        </View>
        <View className="flex-row border border-black mt-2  ">
            <View className="h-28  flex-1  border-r border-r-black justify-center items-center">
                <Text className="text-[18px]">200₺ </Text>
                <Text className="text-gray-600 mt-2">Cüzdan</Text>
            </View>
            <View className="h-28  flex-1 justify-center items-center">
                <Text className="text-[18px]">10 </Text>
                <Text className="text-gray-600 mt-2">Siparişlerim</Text>
            </View>
        </View>
        <View className="mt-2">
          <TouchableOpacity >
              <View className="ml-8  flex-row items-center ">
              <MaterialIcons name="favorite-border" size={24} color="#04B9A3" />
                <Text className="ml-2 text-[16px]  text-xl ">Favorileriniz </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
              <View className="ml-8 mt-2  flex-row items-center ">
              <MaterialIcons name="payments" size={24} color="#04B9A3" />
                <Text className="ml-2 text-[16px] text-xl ">Ödemeleriniz </Text>
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
              <View className="ml-8 mt-2 flex-row items-center ">
              <EvilIcons name="location" size={28} color="#04B9A3" />
              <Text className="ml-2 text-[16px] text-xl">Adreslerim </Text>
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
              <View className="ml-8 mt-2 flex-row items-center ">
              <MaterialIcons name="support-agent" size={28} color="#04B9A3" />
              
                <Text className="ml-2 text-[16px]  text-xl">Destek </Text>
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
              <View className="ml-8 mt-2 flex-row items-center ">
              <Ionicons name="settings-outline" size={28} color="#04B9A3" />
                <Text className="ml-2 text-[16px] text-xl">Ayarlar </Text>
              </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
