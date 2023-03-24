import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styles from '../../style/mainStyle';
import { StyleSheet } from 'react-native';
import Cadastro from './Cadastro';



export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
    }
    const cadastrar = () => {
        navigation.navigate("Cadastro")
    }   


  return (
    <View style={styles.container}>
      <Text h3>Login</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope'}}
        onChangeText={value => setEmail(value)}
        keyboardtype="email-address"
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock'}}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button 
      size={15}
      title="Entrar" 
      type="outline" 
      buttonStyle={specificStyle.button}
      onPress={() => entrar()}
      />
      <Text>Ou</Text>
      <Button 
      size={15}
      title="Cadastre-se" 
      type="solid" 
      buttonStyle={specificStyle.button}
      onPress={() => cadastrar()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const specificStyle = StyleSheet.create ({
    button:{
        width: 150,
        padding: 6,
        margin:10,
    },
})