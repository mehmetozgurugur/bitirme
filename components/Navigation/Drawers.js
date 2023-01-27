import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IcerikSayfa from "../../screens/IcerikSayfa";
import ProfileScreen from "../../screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import CustomDrawer from "./CustomDrawer";
import { Ionicons } from '@expo/vector-icons';
import ContentScreen from "../../screens/ContentScreen";
import { AntDesign } from '@expo/vector-icons';
import SearchScreen from "../../screens/SearchScreen";
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { Switch, TouchableRipple } from 'react-native-paper';
import { View,Text } from 'react-native-animatable';
import { StatusBar } from "expo-status-bar";
import BuyScreen from "../../screens/BuyScreen";


const Drawer = createDrawerNavigator();

const Drawers = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();
  return (
     
      <Drawer.Navigator
        screenOptions={{
        headerTitle:'',
        headerTintColor:'black',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor:'#C3FFD9'
        }, 
        
        drawerActiveBackgroundColor:'#50e7c9',
        drawerActiveTintColor: '#163d35',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle:{
          marginLeft: -20,
          fontSize:'15',
        }

      }}
      drawerContent={props => <CustomDrawer {...props} /> } >
        <Drawer.Screen 
        name="Ana Sayfa" 
        component={IcerikSayfa}
        options={{
          headerShown:true,
          drawerIcon: ({color}) => 
        (<Ionicons name="home-outline" size={24} color={color} />)
      
      }}
        /> 
        <Drawer.Screen 
        name="Profil" 
        component={ProfileScreen} 
        options={{drawerIcon: ({color}) => 
        (<AntDesign name="user" size={24} color={color} />)
      
      }}
        /> 
        <Drawer.Screen 
        name="Sepetim" 
        component={BuyScreen}
        options={{drawerIcon: ({color}) => 
        (<AntDesign name="shoppingcart" size={24} color={color}/>)
      
      }} />
      <Drawer.Screen 
        name="Search" 
        component={SearchScreen}
        options={{drawerIcon: ({color}) => 
        (<Feather 
          name="search"
           size={24} 
           color="black" />)   
      }} />
      
      
      
       
        
      </Drawer.Navigator>
   
  );
}
export default Drawers