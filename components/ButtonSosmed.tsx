import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
const ButtonSosmed = ({icon}) => {
  return (
    <View style={tw`p-4 rounded-lg border-2`}>
        <Ionicons name={icon} size={24} color="black" />

    </View>



  )
}

export default ButtonSosmed

const styles = StyleSheet.create({})