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
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton/CustomButton";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import {
  updateUsers,
  getUserDocument,
} from "../firebase/firebaseAuth";

const EditProfile = () => {
  const [userData, setUserData] = React.useState(null);

  getUserDocument().then((user) => {
    if (user) {
      setUserData(user);
    }
  });

  console.log(userData)

  const [userName, setUserName] = React.useState(userData?.userName || "");
  const [displayName, setDisplayName] = React.useState(
    userData?.displayName || ""
  );
  const [email, setEmail] = React.useState(userData?.email || null);
  const [phoneNumber, setPhoneNumber] = React.useState(
    userData?.phoneNumber || ""
  );
  const [city, setCity] = React.useState(userData?.city || "");
  const [image, setImage] = useState(userData?.image || null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      canceled: false,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const data = {
    displayName: displayName || userData?.displayName,
    email: email || userData?.email,
    userName: userName || userData?.userName,
    phoneNumber: phoneNumber || userData?.phoneNumber,
    city: city || userData?.city,
    image: image || userData?.image,
  };

  const ButtonClickEvent = () => {
    updateUsers(data);
    navigation.navigate("Profil");
    Alert.alert("Güncelleme", "Profiliniz güncellendi");
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
                source={{ uri: userData?.image }}
              />

              <TouchableOpacity onPress={pickImage}>
                <View className="bg-[#50e7c9] mt-1 w-30 h-6 items-center justify-center  rounded-lg ">
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

              <CustomButton
                texta="Profili Güncelle"
                onPress={ButtonClickEvent}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
