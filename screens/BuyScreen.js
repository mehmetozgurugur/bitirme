import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NumberProcess from '../components/Navigation/NumberProcess'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartContainer from '../components/Containers/CartContainer'
import { useSelector } from "react-redux";


const BuyScreen = () => {
  const cartItems = useSelector((state) => state?.card?.items)
  const navigation = useNavigation();
  return (

<ScrollView className="flex-1" >
    <View className="flex-1 bg-white items-center " >
      {cartItems.map((cartItem) => (
        <>
          <CartContainer cartItem={cartItem} />
        </>
      ))}

      <View className="sticky bottom-0 border border-violet-700 h-1/8 w-full rounded-lg" >
        <View className="flex-row m-1 items-center justify-between" >

          <View>
            <Text>Total Price</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}  >
            <View
              className="bg-[#50e7c9] w-60 h-8 items-center justify-center rounded-lg " >
              <Text className="text-[#163d35]"> Ödeme Yap  </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

    </View>
    </ScrollView>

  )
}

export default BuyScreen