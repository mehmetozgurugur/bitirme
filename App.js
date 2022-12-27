import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerStack } from './components/Navigation/Stack';
import { StatusBar } from 'expo-status-bar';





const Stack = createNativeStackNavigator();



export default function App() {
  
  return (
    <NavigationContainer>
       <DrawerStack />
       <StatusBar className="to-black" />
    </NavigationContainer>

  )
}

