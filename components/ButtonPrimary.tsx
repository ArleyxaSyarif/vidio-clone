import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ButtonPrimary = ({title, warna, arah}) => {
  return (
    <TouchableOpacity style={tw`bg-[${warna}] px-4 py-4 rounded-lg` } onPress={arah} >
      <Text style={tw`text-white text-center font-bold`}>{title}</Text>
      
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({})