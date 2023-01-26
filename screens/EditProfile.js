import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton/CustomButton";
import { TextInput } from "react-native-gesture-handler";
import { collection } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { auth, getUserDocuments } from "../firebase/firebaseAuth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const EditProfile = () => {
  const [userName, setUserName] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [RePassword, setRePassword] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [city, setCity] = React.useState("");
  const [image, setImage] = useState(null);
  const [userData, setUserData] = React.useState(null);

  getUserDocuments().then((users) => {
    if (users) {
      const user = users.find(
        (user) =>
          user?.email?.toLowerCase() === auth.currentUser?.email?.toLowerCase()
      );
      setUserData(user);
    }
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      canceled: false,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }



  const setInfo = async () => {
    const db = getFirestore();
    await setDoc(collection(db, "users"), {
      displayName: displayName,
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      city: city,
      image: image,
    });
  };



  const ButtonClickEvent = () => {
    setInfo();
  };

  const navigation = useNavigation();
  //Header kapatmak için
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: "",
    });

  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      className="flex-1 "
    >
      <ScrollView bounces={false} className="flex-1 bg-white ">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className=" flex-1 justify-center bg-white">
            <View className="flex-1 relative items-center mt-20 ">

            <Image
              className="w-24 h-24  rounded-md items-start justify-center "
              source={{uri :userData?.image}}
            />
              
              <TouchableOpacity onPress={pickImage}  >
                <View

                  className="bg-[#50e7c9] mt-1 w-30 h-6 items-center justify-center  rounded-lg " >

                  <Text className="text-[#163d35]"> Bir fotoğraf seç </Text>

                </View>
              </TouchableOpacity>
              <Text className="text-[20px] font-semibold ">
                Profilini Güncelle
              </Text>
              <TextInput
                value={displayName}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                onChangeText={(text) => setDisplayName(text)}
                placeholder={userData?.displayName}
              />
              <TextInput
                value={email}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                onChangeText={(text) => setEmail(text)}
                placeholder={userData?.email}
              />
              <TextInput
                value={userName}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                onChangeText={(text) => setUserName(text)}
                placeholder={userData?.userName}
              />
              
              <TextInput
                value={phoneNumber}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                onChangeText={(text) => setPhoneNumber(text)}
                placeholder={userData?.phoneNumber}
              />
              <TextInput
                value={city}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                onChangeText={(text) => setCity(text)}
                placeholder={userData?.city}
              />

              <CustomButton texta="Profili Güncelle" onPress={ButtonClickEvent} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
