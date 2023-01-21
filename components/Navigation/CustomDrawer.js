import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, useDrawerStatus } from '@react-navigation/drawer'
import { userImage } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { getAuth} from "firebase/auth";
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';
import { auth, db, getUserDocuments } from "../../firebase/firebaseAuth";


const CustomDrawer = ( props, {data}) => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [userData, setUserData] = React.useState(null);

  

  getUserDocuments().then((users) => {
    /*
    incase sensitive şekilde user varsa user içerisindekilerin emailini
    auth.currentUser?.email ile karşılaştırıp match eden değeri userData içerisine atıyoruz.
    ama tabi bu obje olacak find methodu kullanabiliriz
    */
    if (users) {
      const user = users.find(
        (user) =>
          user?.email?.toLowerCase() === auth.currentUser?.email?.toLowerCase()
      );
      setUserData(user);
    }
  });


  const handleSignOut = () => {
    auth
        .signOut()
        .then(()=>navigation.replace("Home"))
  }

  
  return (
    <View className="flex-1 bg-green-100  " >
      <DrawerContentScrollView  {...props} >
        <View className="flex-row bg-green-200 h-[120px] items-center ">
          <Image source={{uri :userData?.image}} className="rounded-full ml-5 w-20 h-20" />
            <View className="ml-4">
            <Text
            className="text-[22px]"
            >{userData?.displayName}</Text>
            <Text
            className="mt-1 text-[15px]"
            >{userData?.userName}</Text>
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