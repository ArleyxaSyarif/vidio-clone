import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";
import {Ionicons} from "@expo/vector-icons";

const Menu = ({icon, title}) => {
    return (
        <View style={tw`flex items-center justify-center`}>
            <View style={tw`rounded-full w-8 h-8 bg-neutral-300 border border-neutral-400`}>
                <Ionicons name={icon} size={34} color="[#000]"/>
            </View>
            <Text style={tw`text-center text-sm mt-2`}>{title}</Text>
        </View>
    )
}

export default Menu