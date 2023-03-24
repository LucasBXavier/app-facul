import React from 'react';
import { View, Text, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import styles from '../../style/mainStyle';



function Feed() {
  return (
    <View style={styles.container}>
    <Button 
      title="Polícia" 
      type="outline"
      onPress={() => alert("190")} 
    />
    <Button
      title="Ambulancia" 
      type="outline"
      onPress={() => alert("192")} 

    />
    <Button
      title="Bombeiro" 
      type="outline"
      onPress={() => alert("193")} 
    />
    <Button     
      title="Pizza" 
      type="outline"
      onPress={() => alert("ainda não sei")} 
    />
    </View>
  );
}


function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
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
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


