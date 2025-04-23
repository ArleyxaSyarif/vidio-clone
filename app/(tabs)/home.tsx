import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonSosmed from '@/components/ButtonSosmed'
import Bulet from '@/components/bulet'
import Menu from '@/components/Menu'

const home = () => {

  const menuData = [
    {icon: 'home', title: 'Premier League' },
    {icon: 'home', title: 'Sport' },
    {icon: 'home', title: 'Premier' },
    {icon: 'home', title: 'TV Show' },
    {icon: 'home', title: 'Movie' },
    {icon: 'home', title: 'Kids' },
]

  return (
    <SafeAreaView>
      <View style={tw`p-4`}>

        <View style={tw`flex flex-row justify-between items-center`}>
          <Image source={require('../../assets/images/vidio.png')} style={tw`w-20 h-20`} />
          
          <View style={tw`flex flex-row gap-4`}>
            <Ionicons name='search' size={24} color="black" />
            <Ionicons name='notifications' size={24} color="black" />
            <Ionicons name='list' size={24} color="black" />

          </View>
       
        </View>


              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-4`}>
                <Image source={require('../../assets/images/laskar.png')} style={tw`w-90 h-50 rounded-xl mr-4`} />
                <Image source={require('../../assets/images/laskar.png')} style={tw`w-90 h-50 rounded-xl`} />
              </ScrollView>

        
        <View style={tw`flex flex-row justify-between mt-4`}>
               {menuData.map((item) => (
                <Menu icon={item.icon} title={item.title} />
              ))}

        </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-4`}>
                    <View style={tw`w-50 h-70 rounded-xl p-3 `}>
                      <Image source={require('../../assets/images/laskar.png')} style={tw`w-full h-70 rounded-lg`} />
                     
                    </View>
          
                    <View style={tw`w-50 h-70 rounded-xl p-3 `}>
                      <Image source={require('../../assets/images/laskar.png')} style={tw`w-full h-70 rounded-lg`} />
                     
                    </View>

                    <View style={tw`w-50 h-70 rounded-xl p-3 `}>
                      <Image source={require('../../assets/images/laskar.png')} style={tw`w-full h-70 rounded-lg`} />
                      
                    </View>
                  </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default home