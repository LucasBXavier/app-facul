import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import { auth } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';





function Feed() {
  return (
    <View style={specificStyle.container}>
    <Button buttonStyle={specificStyle.button}
      title="Polícia" 
      onPress={() => Linking.openURL('tel:190')} 
    />
    <Button buttonStyle={specificStyle.button}
      title="Ambulancia" 
      onPress={() => Linking.openURL('tel:192')} 
    />
    <Button buttonStyle={specificStyle.button}
      title="Bombeiro" 
      onPress={() => Linking.openURL('tel:193')} 
    />
    <Button buttonStyle={specificStyle.button}
      title="Polícia Civil" 
      onPress={() => Linking.openURL('tel:197')} 
    />
    <Button buttonStyle={specificStyle.button}
      title="Delegacia da mulher" 
      onPress={() => Linking.openURL('tel:180')} 
    />
    <Button buttonStyle={specificStyle.button}
      title="Prevenção ao Suícidio" 
      onPress={() => Linking.openURL('tel:188')} 
    />
    </View>
  );
}


function Profile() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  
  useEffect(() => {
    // Função assíncrona para recuperar os dados de nome e endereço do Async Storage
    const getDados = async () => {
      try {
        const nomeSalvo = await AsyncStorage.getItem('nome');
        const enderecoSalvo = await AsyncStorage.getItem('endereco');
        if (nomeSalvo && enderecoSalvo) {
          setNome(nomeSalvo);
          setEndereco(enderecoSalvo);
        }
      } catch (error) {
        console.log('Erro ao obter os dados do Async Storage:', error);
      }
    };

    // Chama a função para obter os dados
    getDados();
  }, []);

  const usuario = auth.currentUser;
  return (
    <View style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Text style={{fontSize: 25, marginBottom: 120, marginTop: 30}}>Dados Pessoais:</Text>
      <Text style={{fontSize: 20}}>Usuário: {usuario.email}</Text>
      <Text style={{fontSize: 20}}>Nome: {nome}</Text>
      <Text style={{fontSize: 20}}>Endereço: {endereco}</Text>

    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Principal () {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color , size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const specificStyle = StyleSheet.create({
  container:{
    backgroundColor: '#F9F5EB',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '30%',
    marginLeft: 10,
    marginRight: 10,
    width: 'auto',
    gap: 15,
    justifyContent: 'space-around' 
  },
  button:{
    backgroundColor: '#C52E28',
    width: 150,
    padding: 15,
    height: 100
  }
})
