import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/telas/login';
import Principal from './src/telas/Principal';
import Cadastro from './src/telas/Cadastro'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      options={{
        headerTitleAlign: 'center',
      }}
      />
      <Stack.Screen name= "Principal" component={Principal}
      options={{
        headerShown: false,
      }}
       />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}


export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}