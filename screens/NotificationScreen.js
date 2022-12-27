import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const NotificationScreen = () => {
  return (
    <ScrollView>
    <View>
      <View className="flex-row items-center backdrop: w-full h-20 mt-1 border-b border-t border-t-black border-b-black  ">
        <AntDesign name="notification" size={24} color="black" />
        <View>
           <Text className="text-[20px] text-red-600 pl-2 ">Faizsiz Kredi İçin Başvurun</Text>
          <Text className="ml-2">16/12/2022</Text>
        </View>
      </View>
      <View className="flex-row items-center backdrop: w-full h-20 mt-1  border-b border-t border-t-black border-b-black  ">
        <AntDesign name="notification" size={24} color="black" />
        <View>
           <Text className="text-[20px] text-red-600 pl-2 ">Adana arazilerinde indirim</Text>
          <Text className="ml-2">1/11/2022</Text>
        </View>
      </View>
      
      <View className="flex-row items-center backdrop: w-full h-20 mt-1  border-b border-t border-t-black border-b-black  ">
        <AntDesign name="notification" size={24} color="black" />
        <View>
           <Text className="text-[20px] text-red-600 pl-2 ">İlaçlarda %20 indirim</Text>
          <Text className="ml-2">15/10/2022</Text>
        </View>
      </View>
      
      <View className="flex-row items-center backdrop: w-full h-20 mt-1  border-b border-t border-t-black border-b-black  ">
        <AntDesign name="notification" size={24} color="black" />
        <View>
           <Text className="text-[20px] text-red-600 pl-2 ">Araç fiyatlarında düşüş</Text>
          <Text className="ml-2">11/9/2022</Text>
        </View>
      </View>
      
      <View className="flex-row items-center backdrop: w-full h-20 mt-1  border-b border-t border-t-black border-b-black  ">
        <AntDesign name="notification" size={24} color="black" />
        <View>
           <Text className="text-[20px] text-red-600 pl-2 ">Mahsüllere göz atın</Text>
          <Text className="ml-2">8/7/2022</Text>
        </View>
      </View>
      

      
      
    </View>
    </ScrollView>
  )
}

export default NotificationScreen