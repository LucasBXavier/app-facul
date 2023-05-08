import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { StyleSheet } from 'react-native';
import styles from '../../style/mainStyle';
import { cadastrar } from "../requisicoesFirebase";
import { Alerta } from "./Alerta";


export default function Cadastro ({navigation}){

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [senha, setPassword] = useState('')

async function realizarCadastro(){
    if(email == ''){
        setMensagemError('Preencha com seu email');
        setStatusError('email');
      } else if(senha == ''){
        setMensagemError('Digite sua senha');
        setStatusError('senha');
      } else {
        const resultado = await cadastrar(email, senha);
        setStatusError('firebase')
        if(resultado == 'sucesso') {
          setMensagemError('Usuário criado com sucesso!')
          setEmail('')
          setPassword('')
        }
        else {
          setMensagemError(resultado)
        }
      }
    }




const [statusError, setStatusError] = useState('');
const [mensagemError, setMensagemError] = useState('');


    return(
      <View style={styles.container}>
    <Text style={{fontSize: 30, marginBottom: 60}}>Cadastre-se</Text>
      <Input
            placeholder="Nome"
            onChangeText={value => {
                setNome(value)
            }}
        />
        <Input
            placeholder="E-mail"
            onChangeText={value => {
                setEmail(value)
            }}
            keyboardtype="email-address"
            error={statusError == 'email'}
            messageError={mensagemError}
        />
        <Input
            placeholder="Senha"
            onChangeText={value => {
                setPassword(value)
            }}
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
            icon={
            <Icon
                name= 'check'
                color= 'white'
            />
            }
            title="Salvar"  
            buttonStyle={specificStyle.button}
            onPress={() => realizarCadastro()}
        />
      </View>
    );
}



const specificStyle = StyleSheet.create ({
    button:{
        width: 140,
        padding: 10,
        margin:20,
        gap: 10
    },
})