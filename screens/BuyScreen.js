import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import NumberProcess from '../components/Navigation/NumberProcess'


const BuyScreen = () => {
  return (
        <View className="flex-1 bg-white items-center justify-center" >
            <NumberProcess />
        </View>
  )
}

export default BuyScreen