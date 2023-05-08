import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styles from '../../style/mainStyle';
import { StyleSheet } from 'react-native';
import { logar } from '../requisicoesFirebase';
import { Alerta } from './Alerta';



export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  async function realizarLogin(){
    if(email == ''){
      setMensagemError('O email é obrigatório!');
      setStatusError('email');
    } else if(password == ''){
      setMensagemError('A senha é obrigatória!');
      setStatusError('senha');
    } else {
      const resultado = await logar(email, password);
      if(resultado == 'erro'){
        setStatusError('firebase')
        setMensagemError('Email ou senha não conferem')
      } 
      else {
        navigation.navigate('Principal')
      }
    }
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
        error={statusError == 'email'}
        messageError={mensagemError}
        
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock'}}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        error={statusError == 'senha'}
        messageError={mensagemError}
      />
      <Alerta 
        mensagem={mensagemError}
        error={statusError == 'firebase'}
        setError={setStatusError}
      />
      <Button 
      size={15}
      title="Entrar" 
      type="outline" 
      buttonStyle={specificStyle.button}
      onPress={() => realizarLogin()}
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