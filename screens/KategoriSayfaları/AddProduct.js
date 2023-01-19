import { View, Text,TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import { collection, doc, getFirestore, addDoc } from "firebase/firestore";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';

const AddProduct = () => {
    const navigation = useNavigation();
    const [Name, setName] = React.useState("");
    const [prize, setPrize] = React.useState("");
    const [address, setAddress] = React.useState(null);
    const [image, setImage] = useState(null);
    
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

    const AddProductInfo = async () => {

        
        const db = getFirestore();
        await addDoc(collection(db, "product"), {
          Name: Name,
          prize: prize,
          address: address,
          
        }
        
        );
    
       
      };
   


  return (
    <View className="flex-1 bg-white justify-center items-center " >
        <View 
        className="w-50 h-40 border border-black"
        >
        <TouchableOpacity onPress={pickImage} >
                  
                  <Image className="h-20 w-20 mt-10" source={{uri:image}} />
                  </TouchableOpacity>
        </View>
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
                  value={address}
                  className="pl-4 bg-white w-80 h-10 justify-center mt-4  rounded-md  
                  border border-stone-700 } "
                  onChangeText={(text) => setAddress(text)}
                  placeholder="Adres"
                />
      
      <CustomButton texta="Ürün Ekle" onPress={AddProductInfo} />
    </View>
  )
}

export default AddProduct