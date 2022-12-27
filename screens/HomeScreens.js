import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,

} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { LogoImage } from '../assets';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseConfig } from '../firebase-config';




const HomeScreens = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const handleSignIn = () => {

    signInWithEmailAndPassword(auth,email, password)
    .then(() => {
      console.log('Signed In')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error =>
      console.log(error)
      )
  }




  const { control, handleSubmit, formState: { errors } } = useForm();
  const onLogInPressed = data => {
    navigation.navigate("Drawers")
    console.log(data)

  }
  const onForgotPasswordPressed = () => 
  { navigation.navigate("ForgotPassword") }

  const onSignUpPressed = () => 
  { navigation.navigate("SignUpScreen") }


  const navigation = useNavigation();
  // Header kapatmak için
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,


    })
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      className="flex-1 "
    >
      <ScrollView bounces={false} className="flex-1 bg-white" >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 justify-center bg-white">

            <View className="flex-1 relative items-center mt-20 ">
              <Image
                className="h-40 w-40 bg-white mb-6"
                source={LogoImage} />
              <CustomInput
                onChangeText={(text) => setEmail(text) }
                name="username"
                placeholder="Kullanıcı Adı"
                control={control}
                rules={{
                  required: 'Kullanıcı adını giriniz',
                  className: "border border-red",
                  minLength: { value: 4, message: 'En az 4 karakter olmalı' },
                  maxLength: { value: 30, message: 'En az 30 fazla karakter olmalı' }

                }}
              />
              <CustomInput
                onChangeText={(text) => setPassword(text)}
                name="password"
                placeholder="Şifre"
                secureTextEntry={true}
                control={control}
                rules={{ required: 'Şifrenizi giriniz', minLength: { value: 6, message: 'Şifre kısa' } }}
              />
              <CustomButton
                texta="Giriş"
                onPress={handleSubmit(onLogInPressed)}
              />
              <CustomButton
                texta="Kayıt Ol"
                onPress={onSignUpPressed}
                type="forgot"
              />
              <TouchableOpacity
                onPress={onForgotPasswordPressed}
                className="mt-4 w-80 h-8 items-center " >
                <Text className=" text-[#163d35]" >Şifremi Unuttum</Text>

              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default HomeScreens

