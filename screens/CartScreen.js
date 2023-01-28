import { 
  View, 
  Text,
  Image, 
  TextInput, 
  Alert,
  TouchableWithoutFeedback,
  Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const dataAy = [
  { key: '1', value: 'Ocak' },
  { key: '2', value: 'Şubat' },
  { key: '3', value: 'Mart' },
  { key: '4', value: 'Nisan' },
  { key: '4', value: 'Mayıs' },
  { key: '4', value: 'Haziran' },
  { key: '4', value: 'Temmuz' },
  { key: '4', value: 'Ağustos' },
  { key: '4', value: 'Eylül' },
  { key: '4', value: 'Ekim' },
  { key: '4', value: 'Kasım' },
  { key: '4', value: 'Aralık' },

];
const dataYıl = [
  { key: '1', value: '1997' },
  { key: '2', value: '1998' },
  { key: '3', value: '1999' },
  { key: '4', value: '2000' },

];




const CartScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("");
  const [cardId, setCardId] = React.useState("")
  const [month, setMonth] = React.useState("")
  const [year, setYear] = React.useState("")
  const [cvv, setCvv] = React.useState("")

  const handleCheckOut = async () => {
  if (cardId === "" || setSelected ==="" || cvv === "" ) {
    console.log("tık")
    Alert.alert("Hata", "Hepsi doldurulmalı")
  }
  else {
    navigation.replace("CartScreen")
    Alert.alert("Sipariş","Teşekkür ederiz")
  }
  }
   return (
    

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View className="flex-1 items-center bg-slate-100 " >
      <View className="border border-black w-11/12 h-1/3 rounded-lg mt-20 bg-white " >
        <Text className="font-medium text-[20px] " >Kart Bilgileri</Text>

        <View className="ml-2 mt-2 "  >
          <Text>Kart Numarası</Text>
          <TextInput
            keyboardType = 'numeric'
            value={cardId}
            onChange={(text) => setCardId(text)}
            placeholder='_____-_____-_____-_____'
            placeholderTextColor="black"  
            maxLength={16}
            className="mt-1 pl-2  h-11 w-11/12 border border-black rounded-xl" ></TextInput>
        </View>
        <Text className="ml-2 m-2" >Son Kullanma Tarihi</Text>
        <View className="h-full w-18 flex-row m-1  " >

          <SelectList
            value={month}
            placeholder="AY"
            setSelected={(val) => setSelected(val)}
            data={dataAy}
            save="value"
          />

          <SelectList
            value={year}
            placeholder="YIL"
            setSelected={(val) => setSelected(val)}
            data={dataYıl}
            save="value"
          />
          <Text className="ml-12" >CVV</Text>
          <TextInput
            keyboardType = 'numeric'
            value={cvv}
            onChange={(text) => setCvv(text)}
            maxLength={3}
            className=" border border-black rounded-xl h-11 w-1/5 justify-center pl-2 " ></TextInput>

        </View>
       <View className="  bottom-0" >
        <TouchableOpacity onPress={()=>navigation.navigate("IcerikSayfa")} className="items-center" >
          <View className="bg-[#321861] w-80 h-10 items-center justify-center mt-3 rounded-lg " >
            <Text className="text-[#e9f0ee]"> Alışverişe Devam Et </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleCheckOut()} className="items-center" >
          <View className="bg-[#321861] w-80 h-10 items-center justify-center mt-3 rounded-lg " >
            <Text className="text-[#e9f0ee]"> Ödeme Tamamla </Text>
          </View>
        </TouchableOpacity>
        </View>
      </View> 
      
    </View>
    </TouchableWithoutFeedback>
  )
}

export default CartScreen