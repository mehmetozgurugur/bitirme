import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreens from '../../screens/HomeScreens';
import IcerikSayfa from '../../screens/IcerikSayfa';
import ContentScreen from '../../screens/ContentScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import ForgotPassword from '../../screens/ForgotPassword';
import Drawers from './Drawers';
import BottomMenu from './BottomMenu';
import CustomDrawer from './CustomDrawer';
import SearchScreen from '../../screens/SearchScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import CategoryD from '../../screens/KategoriSayfaları/CategoryD'
import AddProduct from '../../screens/KategoriSayfaları/AddProduct';




const Stack = createNativeStackNavigator();


 export const DrawerStack = () => {
  return (
  
  
    <Stack.Navigator  
      initialRouteName={DrawerStack.IcerikSayfa}
      screenOptions={{
      headerBackTitleVisible: false,
        
        headerTintColor:'black',
      headerStyle: {
        backgroundColor:'#C3FFD9',  
      }}} >
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="IcerikSayfa" component={IcerikSayfa}  />
        <Stack.Screen name="Drawers" component={Drawers} options={{ headerShown: false }} />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        <Stack.Screen name="ContentScreen" component={ContentScreen} />
        <Stack.Screen name="Profil" component={ProfileScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="SearchScreen" component={SearchScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={NotificationScreen} />  
        <Stack.Screen name="CategoryD" component={CategoryD} />
        <Stack.Screen name="BottomMenu"  component={BottomMenu}/> 
        <Stack.Screen name='AddProduct' component={AddProduct}/>
      </Stack.Navigator>
      
  )
}

export default Stack