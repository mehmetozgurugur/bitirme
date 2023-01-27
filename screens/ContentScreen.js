import { View, Text, ScrollView, Image, TouchableOpacity, Share, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { favImage } from "../assets";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { auth, getUserDocument, getUserDocuments } from "../firebase/firebaseAuth";
import { Slice } from "../src/Store/_redux/CardStore/cardSlice";
import { useDispatch} from "react-redux";

const ContentScreen = () => {
  const dispatch = useDispatch()
  const cartActions = Slice.actions


  const [userData, setUserData] = React.useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const item = route?.params;

  getUserDocument().then((user) => {
    if (user) {
      setUserData(user);
    }
  });



  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleAddToCart = () => {
    dispatch(cartActions.add(item))
    setTimeout(() => {
      navigation.navigate("BuyScreen")
    }, 500);
  }




  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
    });
  }, []);

  return (
    <SafeAreaView className=" flex-1 bg-white-200 relative ">
      <ScrollView className="flex-1 px-4 py-4">
        <View className="relative  shadow-lg">
          <Image
            className="w-full h-60 object-cover rounded-2xl"
            source={{ uri: item?.image }}
          />
          <View className="absolute flex-row inset-x-0 top-2 justify-between px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>


          </View>
        </View>

        <View className="mt-5 ">
          <Text className="text-[#428288] text-[18px] font-bold ">
            {item?.Name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-1 ">
            <FontAwesome name="map-marker" size={24} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[18px] font-bold ">
              {" "}
              {item?.address}
            </Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-red-100 w-12 h-12 rounded-2xl items-center justify-center shadow-md">
              <Image source={favImage} className="h-8 w-8" />
            </TouchableOpacity>

            <View>
              <Text className="text-[#515151]"> Favori </Text>
              <Text className="text-[#515151]"> Ekle </Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-2">
            <View className="bg-red-100 w-12 h-12 rounded-2xl items-center justify-center shadow-md">
              <FontAwesome name="turkish-lira" size={24} color="black" />
            </View>

            <View>
              <Text className="text-[#515151]"> Fiyat </Text>
              <Text className="text-[#515151]"> {item?.prize} </Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              onPress={onShare}
              className="bg-red-100 w-12 h-12 rounded-2xl items-center justify-center shadow-md">
              <FontAwesome name="share-alt" size={24} color="black" />
            </TouchableOpacity>

            <View>
              <Text className="text-[#515151] justify-center "> Paylaş </Text>
            </View>
          </View>
        </View>

        <Text className="mt-4 tracking-wide text-[12px] font-semibold text-[#515151]">
          {item?.description}
        </Text>

        <TouchableOpacity onPress={handleAddToCart}  >
          <View

            className="bg-[#468286] w-90 h-10 items-center justify-center mt-3 rounded-lg " >

            <Text className="text-[#163d35]"> Sepete Ekle </Text>

          </View>
        </TouchableOpacity>


        <View className="space-y-2 mt-4 bg-gray-200 rounded-2xl px-4 py-2">
          <View className="flex-row space-x-3 items-center">
            <FontAwesome name="phone" size={24} color="black" />
            <Text className="text-lg">+90 </Text>
          </View>

          <View className="flex-row space-x-3 items-center">
            <Feather name="mail" size={24} color="black" />
            <Text className="text-lg"> </Text>
          </View>

          <View className="flex-row space-x-3 items-center">
            <FontAwesome name="location-arrow" size={24} color="black" />
            <Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContentScreen;
