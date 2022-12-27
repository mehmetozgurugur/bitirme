import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Image from 'react-native' 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import IcerikSayfa from '../../screens/IcerikSayfa';
import ProfileScreen from '../../screens/ProfileScreen';
import { RegisterImage } from '../../assets';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-screens';
import SearchScreen from '../../screens/SearchScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import { EvilIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export const BottomMenu =() => {
  
  return (
    
    <Tab.Navigator
          
          screenOptions={{
          headerShown: false,
          tabBarActiveTintColor:'#black',
          tabBarInactiveTintColor: 'green',
          tabBarShowLabel:false,
          tabBarStyle:{
            backgroundColor:'#E0E0E0'
          }

    }} >
      <Tab.Screen 
      name="AnaSayfa" 
      component={IcerikSayfa} 
      screenOptions={{
          headerShown: true
        }}
          options={{tabBarIcon: ({color}) => 
          (<Ionicons name="home-outline" size={24} color="black" />)
      }}/>
      <Tab.Screen 
      name="Search" 
      component={SearchScreen} 
      screenOptions={{ 
      }}
        options={{tabBarIcon: ({color}) => 
        (<EvilIcons name="search" size={32} color="black" />) 
      }}/>
      <Tab.Screen 
      name="Notification" 
      component={NotificationScreen}
      screenOptions={{
        headerShown: false}}
        options={{tabBarIcon: ({color}) => 
        (<Ionicons name="notifications-outline" size={24} color="black" />) 
      }}
      />


      
    </Tab.Navigator>
    
  );
}
export default BottomMenu
 