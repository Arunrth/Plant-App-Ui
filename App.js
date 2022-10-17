import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from './src/screens/Details'
import HeaderInput from './src/screen2/HeaderInput'
import HeaderInputTwo from './src/screen2/HeaderInputTwo'

const Stack = createNativeStackNavigator();


// D:\Documents\React Native Cli Work\Plant App UI\PlantUI

const App = () => {
  return (
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
    //       <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
    //     </Stack.Navigator>
    //   </NavigationContainer>

    <View style={{ flex: 1 }}>
      {/* <HeaderInput /> */}
      <HeaderInputTwo />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})