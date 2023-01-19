import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Alert,
    Touchable,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { RegisterImage } from "../assets";
  import CustomInput from "../components/CustomInput/CustomInput";
  import CustomButton from "../components/CustomButton/CustomButton";
  import { useForm } from "react-hook-form";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { initializeApp } from "firebase/app";
  import { firebaseConfig } from "../firebase-config";
  import { TextInput } from "react-native-gesture-handler";
  import { collection, doc, getFirestore, addDoc } from "firebase/firestore";
  import { auth, createUserDocumentFromAuth } from "../firebase/firebaseAuth";
  import * as ImagePicker from 'expo-image-picker';
  


  const SignUpScreen = () => {
    const [userName, setUserName] = React.useState("");
    const [displayName, setDisplayName] = React.useState("");
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [RePassword, setRePassword] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [city, setCity] = React.useState("");
    const [image, setImage] = useState(null);
    const [isLogin, setIsLogin] = useState("");
  
    // const { control, handleSubmit, watch,  formState: { errors } } = useForm();
    // const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const pwd = watch ('password')
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
      } }
  
    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
        })
        .catch((error) => alert(error.message));
      if (email && password && RePassword) {
        if (RePassword !== password) console.log("Şifreler aynı değil");
      } else {
        if (email === "" && password === "") {
          alert("Bu alanlar boş bırakılamaz");
        }
      }
      Alert.alert("Hesabınız Oluşturuldu :)");
      navigation.navigate("Home");
    };
  
    const addInfo = async () => {
      const db = getFirestore();
      await addDoc(collection(db, "users"), {
        displayName: displayName,
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
      });
    };
   
    

    const ButtonClickEvent = () => {
      addInfo();
  
      handleCreateAccount();
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
              <View className="flex-1 relative items-center ">
                
                <TouchableOpacity onPress={pickImage} >
                  
                <Image className="h-20 w-20 mt-10" source={{uri:image}} />
                </TouchableOpacity>
                <Text className="text-[20px] font-semibold ">
                  Yeni bir Hesap Oluştur
                </Text>
                <TextInput
                  value={displayName}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setDisplayName(text)}
                  placeholder="Adı ve Soyadı"
                />
                <TextInput
                  value={email}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setEmail(text)}
                  placeholder="Email adresi"
                />
                <TextInput
                  value={userName}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setUserName(text)}
                  placeholder="Kullanıcı Adı"
                />
                <TextInput
                  value={password}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setPassword(text)}
                  placeholder="Şifre"
                  secureTextEntry={true}
                />
                <TextInput
                  value={RePassword}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setRePassword(text)}
                  placeholder="Şifre Tekrar"
                  secureTextEntry={true}
                />
                <TextInput
                  value={phoneNumber}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setPhoneNumber(text)}
                  placeholder="Telefon Numarası"
                />
                <TextInput
                  value={city}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setCity(text)}
                  placeholder="Şehir"
                />
  
                <CustomButton texta="Kayıt Ol" onPress={ButtonClickEvent} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default SignUpScreen;
  