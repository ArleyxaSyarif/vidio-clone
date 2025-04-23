import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'
import tw from 'twrnc'
import { useRouter } from 'expo-router'

const index = () => {

  const navigation = useRouter();


  return (
    <SafeAreaView>

<View style={tw`flex items-center justify-center p-4`}>
      <Image source={require('../assets/images/bioskop.png')} style={tw`w-90 h-90`} />
        <Text style={tw`text-2xl font-bold text-center`}>TV Channels, Soap Operas, Sport & K-Drama, we have it all</Text> 
        <Text style={tw`text-lg text-center`}>Pick anything you like from 40+ TV channels and hundreds of thousands of free content to watch in your free time.</Text>        
       

        <View style={tw`flex w-full mt-4 mt-58`}>

        <ButtonPrimary title='Sign In with Google' warna='#ed2024' arah={() => navigation.navigate('/auth/signin')} />
        <Text style={tw`text-lg text-center mt-4 font-bold`}>Login</Text>

        </View> 

</View>
    </SafeAreaView>
  )
}

export default index