import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { increaseNumber, decreaseNumber } from '../../redux/actions/numberActions'
import { EvilIcons } from '@expo/vector-icons';

const NumberProcess = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state );
  return (
    <View className=" flex-wrap flex-row justify-center items-center " >
      <EvilIcons name="trash" size={24} color="black" />
      <Button title='-' onPress={() => dispatch(decreaseNumber())} />
       <Text>{state.counter}</Text>
      <Button title='+' onPress={() => dispatch(increaseNumber())} />
    </View>
  )
}

export default NumberProcess