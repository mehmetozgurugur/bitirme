import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { userImage } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { getAuth} from "firebase/auth";
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';




const CustomDrawer = ( props, {data}) => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignOut = () => {
    auth
        .signOut()
        .then(()=>navigation.replace("Home"))
  }

  
  return (
    <View className="flex-1 bg-green-100  " >
      <DrawerContentScrollView  {...props} >
        <View className="flex-row bg-green-200 h-[120px] items-center ">
          <Image source={userImage} className="ml-5 w-20 h-20" />
            <View className="ml-4">
            <Text>{data} </Text>
            <Text>{auth.currentUser?.email}</Text>
            </View>
        </View>
        <View className="flex-1 bg-green-50 mt-5 " >
          <DrawerItemList  {...props} />
        </View>
      </DrawerContentScrollView>
      <View className="p-5 border-t border-t-gray " >
        <TouchableOpacity 
        onPress={handleSignOut}
        className="flex-row items-center " > 
        <MaterialIcons name="logout" size={24} color="black" />
        <Text className="pl-2" >Çıkış</Text>
        
        </TouchableOpacity>
        
      </View>

    </View>
  )
}

export default CustomDrawer