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
  Alert
} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { LogoImage } from '../assets';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase/firebaseAuth';
import { TextInput } from 'react-native-gesture-handler';



const HomeScreens = () => {

  
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState(null)


  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate("Drawers")
      }
    })

    return unsubscribe;
  }, [])

  const handleSignIn =  () => {
            
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      
    
            console.log('giriş yapıldı') 
            const user = userCredentials.user;
            console.log(user.email)
         })
    .catch(error =>                
        alert(error.message)                
        )
        if (email === '' && password === ''){
          Alert.alert('Bu alanlar boş bırakılamaz')
      }
        
  
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
                <TextInput 
                value={email}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                border border-stone-700 } "
                onChangeText={(text) => setEmail(text)}
                placeholder="Email adresi"
                />
                <TextInput
                value={password}
                className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                border border-stone-700 } "
                onChangeText={(text) => setPassword(text)}
                placeholder="Şifre"
                secureTextEntry={true}
                />
              <CustomButton
                texta="Giriş"
                onPress={handleSignIn}
                
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