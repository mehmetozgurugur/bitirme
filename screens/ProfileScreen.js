import React, { useState, useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { v4 as uuidv4 } from 'uuid';
import { auth, getUserDocuments } from "../firebase/firebaseAuth";



const ProfileScreen = () => {
  const [userData, setUserData] = React.useState(null);
  const [image, setImage] = useState(null);
  const navigation = useNavigation();


  getUserDocuments().then((users) => {
    if (users) {
      const user = users.find(
        (user) =>
          user?.email?.toLowerCase() === auth.currentUser?.email?.toLowerCase()
      );
      setUserData(user);
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <Ionicons
          style={{ marginLeft: 5 }}
          name="ios-chevron-back-sharp"
          size={26}
          color="black"
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <MaterialIcons
          style={{ marginRight: 5 }}
          onPress={() => navigation.navigate("Notification")}
          name="notifications-none"
          size={24}
          color="black"
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1" >
      <ScrollView>
        <View>
          <View className="ml-6 mt-1 flex-row">
            <TouchableOpacity  >
            <Image
              className="w-20 h-20  rounded-md items-center justify-center "
              source={{uri :userData?.image}}
            /></TouchableOpacity>
            <View className="ml-4 justify-center ">
              <Text className=" text-semibold text-[26px]"> {userData?.displayName}</Text>
              <Text className="ml-2 pt-1">{userData?.email}</Text>
            </View>
          </View>
        </View>

        <View className="mt-4 ml-8 space-y-2 space-x-1">
          <View className="flex-row">
            <EvilIcons name="location" size={26} color="black" />
            <Text className="ml-2">{userData?.city }</Text>
          </View>
          <View className="flex-row ">
            <Ionicons
              name="ios-phone-portrait-outline"
              size={20}
              color="black"
            />

            <Text className="ml-2">+90 {userData?.phoneNumber}</Text>
          </View>
          <View className="flex-row">
            <Ionicons name="ios-mail-outline" size={20} color="black" />
            <Text className="ml-2">{userData?.email}</Text>
          </View>
        </View>
        <View className="flex-row border border-black m-2 rounded-lg ">
          <View className="h-28  flex-1  border-r border-r-black justify-center items-center">
            <Text className="text-[18px]">200₺ </Text>
            <Text className="text-gray-600 mt-2">Cüzdan</Text>
          </View>
          <View className="h-28  flex-1 justify-center items-center">
            <Text className="text-[18px]">10 </Text>
            <Text className="text-gray-600 mt-2">Siparişlerim</Text>
          </View>
        </View>
        <View className="flex-1 justify-center rounded-lg  m-2 border border-black">
          <View className="">
            <View>
              <Text
              className="ml-2 mb-1 text-[22px]"
              >Hesabım</Text>
            </View>
            <View className="grid grid-cols-1 divide-y divide-black">
          <TouchableOpacity
          onPress={()=> navigation.navigate("FavScreen")}
          >
            <View className="ml-2  flex-row items-center ">
              <MaterialIcons name="favorite-border" size={24} color="black" />
              <Text className="ml-2 text-[16px]  text-xl  ">Favorileriniz </Text>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity
          onPress={()=> navigation.navigate("AddProduct")}>
            <View className="ml-2 mt-2  flex-row items-center ">
            <Ionicons name="add" size={24} color="black" />
              <Text className="ml-2 text-[16px] text-xl ">Ürün Ekle </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
          onPress={()=> navigation.navigate("HelpScreen")}
          >
            <View className="ml-2 mt-2 flex-row items-center ">
              <MaterialIcons name="support-agent" size={28} color="black" />

              <Text className="ml-2 text-[16px]  text-xl">Destek </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=> navigation.navigate("EditProfile")}
          >
            <View className="ml-2 mt-2 flex-row items-center ">
              <Ionicons name="settings-outline" size={28} color="black" />
              <Text className="ml-2 text-[16px] text-xl">Ayarlar </Text>
            </View>
          </TouchableOpacity>
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
