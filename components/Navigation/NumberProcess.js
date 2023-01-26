import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { increaseNumber, decreaseNumber } from '../../redux/actions/numberActions'


const NumberProcess = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state );
  return (
    <View className=" flex-wrap flex-row justify-center items-center" >
      <Button title='+' onPress={() => dispatch(increaseNumber())} />
      <Text>{state.counter}</Text>
      <Button title='-' onPress={() => dispatch(decreaseNumber())} />
    </View>
  )
}

export default NumberProcess