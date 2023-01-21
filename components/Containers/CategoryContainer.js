import { View, Text, Image, TextInput, Touchable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { differentImage } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { getProductDocuments } from "../../firebase/firebaseAuth";
import { TouchableOpacity } from 'react-native-gesture-handler';


const CategoryContainer = ({ad,fiyat,yer,fotograf,i}) => {
  const navigation = useNavigation();
  const [productData, setProductData] = useState()
  
 
  getProductDocuments().then(() => {
    
      setProductData(productData);
    
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:''
    })
    }, [])
  return (
      
      <View className="h-%40 w-%40 border border-gray-600 m-1 ">
        
        <Image 
         className="m-1 p-1 w-40 h-60 justify-center items-center"
        source={fotograf}
         
        />       
        <View className>
          <Text 
          value={ad}
          className="text-[15px] ml-2 ">{ad} </Text>
          <Text 
          value={fiyat}
          className="text-gray-600 mt-2 ml-2">{fiyat}</Text>
          <Text 
          value={yer}
          className="text-gray-600 mt-2 ml-2">{yer}</Text>
        </View>
      </View>  
   
  )
}

export default CategoryContainer