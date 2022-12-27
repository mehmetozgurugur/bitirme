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
    Alert,

} from 'react-native'
import React, { useLayoutEffect, useState, Keyb } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ilacImage,RegisterImage } from '../assets';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useForm} from 'react-hook-form'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from '../firebase-config';

const SignUpScreen = () => {

    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState('')
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    const handleCreateAcount = () => {
  
      createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        console.log('Acoount Created!')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error =>{
        console.log(error)
        Alert.alert(error.message)
        })
    }
  




    const { control, handleSubmit, watch,  formState: { errors } } = useForm();
    const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const pwd = watch ('password')
    const onSignUpPressed = data => {
        console.log(data)
        navigation.navigate("Home") }
    
    



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
        
        <View className=" flex-1 justify-center bg-white">

            <View className="flex-1 relative items-center ">
                <Image 
                className="h-40 w-40 mt-10"
                source={RegisterImage}/>
                <Text className="text-[20px] font-semibold " >Yeni bir Hesap Oluştur</Text>
                <CustomInput
                    onchangeText={(text) => setEmail(text) }
                    name="username"
                    placeholder="Kullanıcı Adı"
                    control={control}
                    rules={{
                        required: 'Kullanıcı adını giriniz',
                        minLength: { value: 7, message: 'En az 7 karakter olmalı' },
                        
                    }}
                />
                <CustomInput
                    onchangeText={(text) => setPassword(text)}
                    name="password"
                    placeholder="Şifre"
                    secureTextEntry={true}
                    control={control}
                    rules={{ 
                        required: 'Şifrenizi giriniz', 
                        minLength: {value:4 , message:'En az 4 karakter olmalı'}
                    }}
                />
                <CustomInput
                    name="repeat password"
                    placeholder="Şifre Tekrar"
                    secureTextEntry={true}
                    control={control}
                    rules={{ 
                        required: 'Şifrenizi tekrar giriniz', 
                        validate: value => value === pwd || 'Şifreler aynı değil'
                }}
                />
                <CustomInput
                    name="telefon"
                    placeholder="Telefon Numarası"
                    keyborardType="numeric"
                    control={control}
                    rules={{ 
                        required: 'Telefon numaranız gerekli', 
                }}
                />
                <CustomInput
                    name="E-mail"
                    placeholder="E-Mail adresi"
                    
                    control={control}
                    rules={{
                        pattern: EMAIL_REGEX,
                        required: 'E-mail adresiniz gerekli',
                        pattern: {value: EMAIL_REGEX, message: 'E-mail adresiniz geçersiz'}}}
                />

                <CustomButton
                    texta="Kayıt Ol"
                    onPress={handleSubmit(onSignUpPressed)}
                    
                />

            </View>
        </View>
        
        </TouchableWithoutFeedback>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

