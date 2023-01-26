import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerStack } from './components/Navigation/Stack';
import { StatusBar } from 'expo-status-bar';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import * as _redux from "./src/Store/index";
import { Text } from 'react-native';
import axios from "axios";
import store, { persistor } from "./src/Store/Store";

_redux.setupAxios(axios, store);

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={<Text>Loading</Text>} >
        <NavigationContainer>
          <DrawerStack />
          <StatusBar className="to-black" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

