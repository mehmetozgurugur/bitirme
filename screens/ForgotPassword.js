import { View, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    ScrollView, 
      TouchableWithoutFeedback,
      KeyboardAvoidingView,
      Platform,
      Keyboard, 
    Alert
  
  } from 'react-native'
  import React, { useLayoutEffect, useState } from 'react'
  import { useNavigation } from '@react-navigation/native'
  import { Button, TextInput } from 'react-native-paper';
  import { ForgotImage, ilacImage, LogoImage } from '../assets';
  import CustomInput from '../components/CustomInput/CustomInput';
  import CustomButton from '../components/CustomButton/CustomButton';
  import { useForm, Controller } from 'react-hook-form'
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
  
  const ForgotPassword = () => {
    
    const { control, handleSubmit, formState: {errors}} = useForm();
    const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    const onLogInPressed = data  => {
  
      Alert.alert(
      "Uyarı",
      'E-mail adresinizi kontrol edin',)
      
      console.log(data)
      navigation.navigate("Home")
    }

    
  
    const navigation = useNavigation();
    //Header kapatmak için
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
        headerTitle:'',
  
  
      })
    })
    return (
      <KeyboardAvoidingView
      behavior={ Platform.OS === "ios" ? "padding" : "padding"}
      className="flex-1 "
    >
      <ScrollView bounces={false} className="flex-1 bg-white" >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center bg-white">
  
        <View className="flex-1 relative items-center mt-20 ">
          <Image
            className="h-40 w-40 bg-white mb-6"
            source={ForgotImage} />
          <CustomInput
          
            name="bothname"
            placeholder="Kullanıcı Adı / E-mail adresi"
            control={control}
            rules = {{
                pattern: EMAIL_REGEX,
                required: 'Kullanıcı adı veya e-mail adresi giriniz',
                minLength: { value: 7, message: 'En az 7 karakter olmalı' },
            
                pattern: {value: EMAIL_REGEX, message: 'E-mail adresiniz geçersiz'},
            
            }}
          />
          

  
          <CustomButton
            texta="Şifre yenileme bağlantısı gönder"
            onPress={handleSubmit(onLogInPressed)}
          />
         
        </View>
      </View>
      </TouchableWithoutFeedback>
          </ScrollView>
          </KeyboardAvoidingView>
    )
  }
  
  export default ForgotPassword
  
  