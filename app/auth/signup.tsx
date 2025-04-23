import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonSosmed from '@/components/ButtonSosmed'
import tw from 'twrnc'
import ButtonPrimary from '@/components/ButtonPrimary'
import { Link, useRouter } from 'expo-router'

const signin = () => {
    
    const navigation = useRouter();

  return (
    <SafeAreaView>
        <View style={tw`p-4`}>
                      <Text style={tw`text-2xl font-bold mb-2 text-center`}>Sign In to Video for Free</Text>
                      <Text style={tw`text-center`}>Get comtent recommendations and download your favorite videos to watch everytime</Text>
                      <View style={tw`space-y-4 w-full`}>
                        <TextInput 
                          placeholder='Email'
                          style={tw`border border-gray-300 rounded-lg p-3 w-full`}
                          placeholderTextColor="#666"
                        />
                        <TextInput 
                          placeholder='Password'
                          secureTextEntry
                          style={tw`border border-gray-300 rounded-lg p-3 w-full`}
                          placeholderTextColor="#666"
                        />
                      </View>

                      <View style={tw`my-6`}>
                        <ButtonPrimary title='Sign In' warna='#ed2024' arah={() => navigation.push('/(tabs)/home')} />
                      </View>

                      <Text style={tw`text-center text-gray-500 mb-4`}>- Or sign in with -</Text>

                      <View style={tw`flex flex-row justify-center gap-6`}>
                        <ButtonSosmed icon='logo-google' />
                        <ButtonSosmed icon='logo-facebook' />
                        <ButtonSosmed icon='logo-whatsapp' />
                      </View>

                      <View style={tw`mt-6 flex-row justify-center`}>
                        <Text style={tw`text-gray-600`}>Don't have an account? </Text>



                        <Text style={tw`text-[#ed2024] font-bold text-2md`}>Sign Up</Text>
                        
                      </View>
                      <Text style={tw`text-gray-600 text-center mt-3`}>By Sign In up. You agree 1 Videos </Text>
                      <Text style={tw`text-blue-500 text-center `}>Terms of service and Privacy Policy</Text>
3
                </View>    
            </SafeAreaView>
  )
}

export default signin