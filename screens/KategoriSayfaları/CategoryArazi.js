import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";
import CategoryContainer from "../../components/Containers/CategoryContainer";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getProductDocuments } from "../../firebase/firebaseAuth";

const CategoryArazi = ({ ad, fiyat, yer, id }) => {
  const navigation = useNavigation();
  const [productData, setProductData] = useState();

  getProductDocuments().then((product) => {
    setProductData(product);
  });

  return (
    <View className="bg-white max-w-90 max-h-screen flex-1 ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className=" bg-white items-center relative mb-2 ">
          <Feather
            style={{
              zIndex: 1,
              left: 25,
              position: "absolute",
              marginTop: 19,
              marginLeft: 14,
            }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            placeholder="Ara"
            className="pl-10 w-80 h-10 border mt-3 border-gray-700 rounded-3xl items-center justify-center "
          ></TextInput>
        </View>
      </TouchableWithoutFeedback>

      <View className="flex-row  mb-4 border border-black">
        <View className="h-10  flex-1 border-r border-r-black justify-center items-center">
          <TouchableOpacity className="flex-row justify-center items-center ">
            <AntDesign name="menu-fold" size={12} color="black" />
            <Text className="text-[18px] pl-5">Filtrele</Text>
          </TouchableOpacity>
        </View>

        <View className="h-10  flex-1 justify-center items-center ">
          <TouchableOpacity>
            <View className="flex-row justify-center items-center">
              <FontAwesome name="sort" size={12} color="black" />
              <Text className="text-[18px] pl-5 ">Sırala </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex">
        <View className=" flex-wrap flex-row m-2">
          {productData?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("ContentScreen", {
                  id: item.id,
                  Name: item.Name,
                  prize: item.prize,
                  address: item.address,
                  image: item.image,
                  description: item.description,
                  category: item.category,
                  user: item.user,
                });
              }}
            >
              <CategoryContainer
                fotograf={{ uri: item?.image }}
                ad={item?.Name}
                fiyat={item?.prize}
                yer={item?.address}
                id={index}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryArazi;
