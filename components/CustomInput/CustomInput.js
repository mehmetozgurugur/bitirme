import { View, 
  Text, 
  TextInput, 
  } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'


const CustomInput = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
}) => {
  return (
    
     <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: {error} }) => (
          <>
          <View 
          className="bg-white w-80 h-10 justify-center mt-4  rounded-md  
          border border-stone-700 } "> 
          <TextInput
            className="pl-4 flex-1" 
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onPress={() => null}
          /> 
          </View>
          {
            error && (<Text className="text-red-600 self-stretch ml-8 mt-1">{(error.message || 'error')}</Text>)
          }
          
          </>
        )
        }
      />
    
  
  )
}


export default CustomInput

