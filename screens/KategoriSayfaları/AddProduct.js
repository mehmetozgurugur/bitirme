import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { collection, doc, getFirestore, addDoc } from "firebase/firestore";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';
import { SelectList } from 'react-native-dropdown-select-list'

const AddProduct = () => {
  const navigation = useNavigation();
  const [Name, setName] = React.useState("");
  const [prize, setPrize] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [image, setImage] = useState(null);
  const [selected, setSelected] = React.useState("");
  const [description, setDescription] = React.useState("");

  const data = [
    { key: '1', value: 'Arazi' },
    { key: '2', value: 'İlaç' },
    { key: '3', value: 'Ürün' },
    { key: '4', value: 'Araç' },

  ];



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const AddProductInfo = async () => {
    if (image === "" || Name === "" || prize === "" || address === "" || selected === "" || description === "") {
      console.log("tıkladın")
      Alert.alert("Hata", "Hepsi doldurulmalı");
    }
    else {
      navigation.replace("AddProduct")
      alert("Ürün başarılı şekilde eklendi")

      const db = getFirestore();
      if (selected === "Arazi") {
        navigation.navigate("CategoryArazi")
        await addDoc(collection(db, "product"), {
          Name: Name,
          prize: prize,
          address: address,
          image: image,
          description: description,
        });
      } else if (selected === "İlaç") {
        navigation.navigate("Categoryilac")
        await addDoc(collection(db, "productIlac"), {
          Name: Name,
          prize: prize,
          address: address,
          image: image,
          description: description,
        });

      } else if (selected === "Ürün") {
        navigation.navigate("CategoryUrun")
        await addDoc(collection(db, "ProductUrun"), {
          Name: Name,
          prize: prize,
          address: address,
          image: image,
          description: description,
        });
      } else if (selected === "Araç") {
        navigation.navigate("CategoryArac")
        await addDoc(collection(db, "ProductArac"), {
          Name: Name,
          prize: prize,
          address: address,
          image: image,
          description: description,
        });
      }


    }


  };
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className="flex-1 bg-gray-50 ">
          <View className="flex-1 bg-white justify-center items-center mt-20" >
            <View className="flex-1 items-center ">

              <View className="flex-1 mt-2 h-40 w-80 border border-black">
                <Image className="h-40 w-80 " source={{ uri: image }} />
                <TouchableOpacity onPress={pickImage}  >
                  <View

                    className="bg-[#50e7c9] w-30 h-6 items-center justify-center mt-3 rounded-lg " >

                    <Text className="text-[#163d35]"> Bir fotoğraf seçin </Text>

                  </View>
                </TouchableOpacity>
              </View>

              <View className="mt-12">
                <SelectList

                  setSelected={(val) => setSelected(val)}
                  data={data}
                  save="value"
                />

                <TextInput
                  value={Name}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setName(text)}
                  placeholder="Ürün Adı"
                />
                <TextInput
                  value={prize}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setPrize(text)}
                  placeholder="Fiyat"
                />
                <TextInput
                  value={description}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setDescription(text)}
                  placeholder="Açıklama"
                />
                <TextInput
                  value={address}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setAddress(text)}
                  placeholder="Adres"
                />

                <CustomButton
                  texta="Ürün Ekle" onPress={AddProductInfo} />
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default AddProduct