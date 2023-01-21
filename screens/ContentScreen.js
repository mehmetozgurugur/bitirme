import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { favImage } from '../assets';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { getProductAracDocuments } from "../firebase/firebaseAuth";


const ContentScreen = ({ }) => {
    const navigation = useNavigation();
    const [productAracData, setProductAracData] = useState();
    
     

    getProductAracDocuments().then((productArac) => {
        setProductAracData(productArac);
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: ''
        })
    }, [])
    return (
        <SafeAreaView className=" flex-1 bg-white-200 relative " >
            <ScrollView className="flex-1 px-4 py-4">
                <View className="relative  shadow-lg">
                    <Image className="w-full h-60 object-cover rounded-2xl"
                        source={
                            { uri: productAracData?.image }
                        }
                    />
                    <View className="absolute flex-row inset-x-0 top-2 justify-between px-4">
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}

                            className="w-10 h-10 rounded-md items-center justify-center bg-white">
                            <Entypo name="chevron-left" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white ">
                            <Image
                                source={favImage}
                                className="h-8 w-8"
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <View className="mt-5 ">
                    <Text className="text-[#428288] text-[18px] font-bold ">
                        Kısa açıklama
                    </Text>
                    <View className="flex-row items-center space-x-2 mt-1 ">
                        <FontAwesome name="map-marker" size={24} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[18px] font-bold "> Lokasyon</Text>
                    </View>
                </View>

                <View className="mt-4 flex-row items-center justify-between" >
                    <View className="flex-row items-center space-x-2" >
                        <View className="bg-red-100 w-12 h-12 rounded-2xl items-center justify-center shadow-md">
                            <FontAwesome name="star" size={24} color="#D58574" />
                        </View>

                        <View>
                            <Text className="text-[#515151]" > 4.7 </Text>
                            <Text className="text-[#515151]" > Satıcı </Text>
                        </View>
                    </View>


                    <View className="flex-row items-center space-x-2" >
                        <View className="bg-red-100 w-12 h-12 rounded-2xl items-center justify-center shadow-md">
                            <FontAwesome name="turkish-lira" size={24} color="black" />
                        </View>

                        <View>
                            <Text className="text-[#515151]" > Fiyat </Text>
                            <Text className="text-[#515151]" > {productAracData?.prize} </Text>
                        </View>
                    </View>

                    <View className="flex-row items-center space-x-2" >
                        <View className="bg-red-100 w-12 h-12 rounded-2xl items-center justify-center shadow-md">
                            <FontAwesome name="share-alt" size={24} color="black" />
                        </View>

                        <View>
                            <Text className="text-[#515151] justify-center "  > Paylaş </Text>

                        </View>
                    </View>
                </View>

                <Text className="mt-4 tracking-wide text-[12px] font-semibold text-[#515151]" >
                    Adananın verimli topraklarından büyükmangıt mahallesinde 2.000 dönüm arazi geçen sene mısır ekildi şu kadar verim alındı vs

                </Text>

                <View className="space-y-2 mt-4 bg-gray-200 rounded-2xl px-4 py-2">
                    <View className="flex-row space-x-3 items-center">
                        <FontAwesome name="phone" size={24} color="black" />
                        <Text className="text-lg">+90 546 935 04 69 </Text>
                    </View>




                    <View className="flex-row space-x-3 items-center">
                        <Feather name="mail" size={24} color="black" />
                        <Text className="text-lg">ozgurugur7@outlook.com </Text>
                    </View>




                    <View className="flex-row space-x-3 items-center">
                        <FontAwesome name="location-arrow" size={24} color="black" />
                        <Text className="text-lg"> Burhaniye mahallesi 105 sokak Ceyhan/Adana  </Text>
                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>




    )
}

export default ContentScreen