import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { aracImage, ilacImage, tarlaImage, urunImage, userImage } from '../assets';
import MenuContainer from '../components/Containers/MenuContainer';
import { FontAwesome, } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ItemsContainer from '../components/Containers/ItemsContainer';
import CategoryD from './KategoriSayfaları/CategoryD';
import { Feather } from '@expo/vector-icons';

const IcerikSayfa = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("arazi");
  const [isLoading, setisLoading] = useState(false);
  const [mainData, setmainData] = useState([]);
  const [Root, setRoot] = useState(true);



  //Header kapatmak için
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      
      headerTitle: '',
      headerRight: () => (
        <Feather 
      style={{
        marginRight:14,
      }
      }
      name="search"
       size={24} 
       color="black" 
       onPress = {() => navigation.navigate("SearchScreen")}
       />
        )
    })
  }, [])



  return (
    <SafeAreaView className="flex-1 relative bg-white ">
      <View className="flex-row items-center ml-5 mt-2">
        <TouchableOpacity
          onPress={() => navigation.navigate("Profil")} >

          <View className="w-12 h-12  rounded-md items-center justify-center shadow-lg">
            <Image source={userImage}
              className="w-full h-full rounded-md object-cover"
            />
          </View>
        </TouchableOpacity>
        <View>
          <Text className="text-[20px] font-bold"> Aradığınız ziraat ürününe</Text>
          <Text className="text-[20px] text-[#367a6c] "> Bugün Ulaşın</Text>
        </View>



      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4 ">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBoOxoLJF7gGs9i2A4FuCfyWr3r4Hf5xLc',
            language: 'en',
          }}
        />
      </View>
      {/* Menü container */}
      {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#03b48e" />
      </View> :

        <ScrollView>
          <Text className="text-[#2C7379] text-bold text-[18px] px-4 mt-4 " >Kategoriler</Text>
          <ScrollView nestedScrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>


            <View className="flex-row items-center px-6 mt-4 justify-between   ">
            
              <MenuContainer
                 onPress={()=> navigation.navigate("CategoryD")}
                key={"arazi"}
                title="Araziler"
                ImageSrc={tarlaImage}
                
                type={type}
                setType={setType}
              />
              <MenuContainer
                key={"ilaclar"}
                title="İlaçlar"
                ImageSrc={ilacImage}
                type={type}
                setType={setType}
              />
              <MenuContainer
                key={"urunler"}
                title="Ürünler"
                ImageSrc={urunImage}
                type={type}
                setType={setType}
              />
              <MenuContainer
                key={"araclar"}
                title="Araçlar"
                ImageSrc={aracImage}
                type={type}
                setType={setType}
              />
            </View>
          </ScrollView>


          <View>
            <View className="flex-row items-center justify-between px-4 mt-4 ">
              <Text className="text-[#2C7379] text-bold text-[18px] ">Anasayfa Vitrini </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-1" >
                <Text className="text-[#2C7379] text-bold text-[18px] ">Keşfet </Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4c7" />

              </TouchableOpacity>
              
            </View>
            <ScrollView nestedScrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex-row mt-4 items-center ">
              <ItemsContainer
                
                key={"101"}
                title="300 dönüm arsa"
                ImageSrc={"https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_960_720.jpg"}
                location="Adana" />
              <ItemsContainer
                key={"102"}
                title="10 litre ilaç"
                ImageSrc={"https://cdn.pixabay.com/photo/2020/04/17/08/00/agricultural-5053715_960_720.jpg"}
                location="Ceyhan" />
              <ItemsContainer
                key={"103"}
                title="1 ton mahsül"
                ImageSrc={"https://cdn.pixabay.com/photo/2016/10/07/10/01/cotton-1721144_960_720.jpg"}
                location="Mersin" />
              <ItemsContainer
                key={"104"}
                title="2009 model traktör"
                ImageSrc={"https://cdn.pixabay.com/photo/2019/08/19/08/49/harvest-4415809_960_720.jpg"}
                location="Yenişehir" />
            </View>
            </ScrollView>
          </View>
        </ScrollView>
      }
      
    </SafeAreaView>
  )
}

export default IcerikSayfa