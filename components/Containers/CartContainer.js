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
import NumberProcess from '../../components/Navigation/NumberProcess'

const CartContainer = ({ cartItem }) => {

    console.log(cartItem)

    return (

        <View className="flex-1 flex-row bg-red-200 border rounded-lg border-black mt-10 w-11/12 ">

            <View className="border border-red-300 w-5/12 rounded-lg " >
                <TouchableOpacity>
                    <Image
                        className="w-full h-full  rounded-md items-center justify-center "
                        source={{ uri: cartItem?.image }}
                    />
                </TouchableOpacity>
            </View>
            <View className="flex-wrap w-7/12 border border-green-500 rounded-lg">
                <View>
                    <Text className="p-2" >{cartItem?.Name}</Text>
                </View>
                <View>
                    <Text className="p-2" >{cartItem?.description}</Text>
                </View>
                <View className="absolute bottom-2 left-3" >
                    <NumberProcess />
                </View>
                <View className="absolute bottom-3 right-7 " >
                    <Text>{cartItem?.prize}</Text>
                </View>
            </View>

        </View>
    )
}

export default CartContainer