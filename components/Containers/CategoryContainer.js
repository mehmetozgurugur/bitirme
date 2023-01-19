import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { differentImage } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { getProductDocuments } from "../../firebase/firebaseAuth";


const CategoryContainer = ({ad,fiyat,yer}) => {
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
      
      <View className="h-%60 w-%50 border border-gray-600 m-1 ">
        <Image source={differentImage}
          className="m-1 p-1 w-40 h-60 justify-center items-center"
        />
        <View className>
          <Text 
          value={ad}
          className="text-[15px] ml-2 ">{productData?.name} </Text>
          <Text 
          value={fiyat}
          className="text-gray-600 mt-2 ml-2">{productData?.prize}</Text>
          <Text 
          value={yer}
          className="text-gray-600 mt-2 ml-2">{productData?.address}</Text>
        </View>
      </View>
     
    
  )
}

export default CategoryContainer