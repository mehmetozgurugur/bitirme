import { View, 
    Text, 
    Image,  
    ScrollView, 
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Alert

} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RegisterImage } from '../assets';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useForm} from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../firebase-config';
import { TextInput } from 'react-native-gesture-handler';
import {collection, doc, getFirestore, addDoc, } from "firebase/firestore"


const SignUpScreen = () => {
    const [userName, setUserName] = React.useState('')
    const [displayName, setDisplayName] = React.useState('')
    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [RePassword, setRePassword] = React.useState(null)
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [isLogin, setIsLogin] = useState('')
    const db = getFirestore(app)
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    

    // const { control, handleSubmit, watch,  formState: { errors } } = useForm();
    // const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const pwd = watch ('password')
    
    const handleCreateAccount = () =>  {
            
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredentials) => {
                    
                    const user = userCredentials.user;
                    console.log(user) 
                 })
            .catch(error =>                
                alert(error.message)                
                )
                if ( email  && password && RePassword ){
                    if(RePassword !== password)
                    console.log('Şifreler aynı değil')
                }else {
                    if (email === '' && password === ''){
                        alert('Bu alanlar boş bırakılamaz')
                    }
                }
                Alert.alert("Hesabınız Oluşturuldu :)")
                navigation.navigate("Home")


    }
     
 const create = async() =>   {
       await addDoc(collection(db, "users",),
        {
            displayName: displayName,
            username: userName,
            phoneNumber: phoneNumber,
        }).then(()=> {
            console.log('data submitted');
        }).catch((error)=>
            console.log(error)
        )
  
        }
        
    
    const ButtonClickEvent = () =>{
        create();
        handleCreateAccount();
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
    <ScrollView bounces={false} className="flex-1 bg-white " >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <View className=" flex-1 justify-center bg-white">

            <View className="flex-1 relative items-center ">
                <Image 
                className="h-40 w-40 mt-10"
                source={RegisterImage}/>
                <Text className="text-[20px] font-semibold " >Yeni bir Hesap Oluştur</Text>
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
                

                <CustomButton
                    texta="Kayıt Ol"
                    onPress={ButtonClickEvent}
                    
                />

            </View>
        </View>
        
        </TouchableWithoutFeedback>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

