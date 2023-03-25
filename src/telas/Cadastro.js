import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { StyleSheet } from 'react-native';
import styles from '../../style/mainStyle';


export default function Cadastro ({navigation}){

const [nome, setNome] = useState(null)
const [endereco, setEndereco] = useState(null)
const [email, setEmail] = useState(null)
const [senha, setPassword] = useState(null)

const [errorNome, setErrorNome] = useState(null)
const [errorEndereço, setErrorEndereco] = useState(null)
const [errorEmail, setErrorEmail] = useState(null)
const [errorSenha, setErrorPassword] = useState(null)

const validar = () => {
      
    let error = false
    setErrorNome(null)
    setErrorEndereco(null)
    setErrorEmail(null)
    setErrorPassword(null)
    if(nome == null){
        setErrorNome("Preencha o seu nome corretamente")
        return false 
    }
    if(endereco == null){
        setErrorEndereco("Prencha com seu endereço corretamente")
        return false
    }
    if(email == null){
        setErrorEmail("Prencha com seu E-mail corretamente")
        return false
    }
    if(senha == null){
        setErrorPassword("Prencha com uma senha de acesso")
        return false
    }
    return !error
}
    


const salvar = () => {
    if (validar()){
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })
    }    
}

    return(
      <View style={styles.container}>
    <Text style={{fontSize: 30, marginBottom: 60}}>Cadastre-se</Text>
      <Input
            placeholder="Nome"
            onChangeText={value => {
                setNome(value)
                setErrorNome(null)  
            }}
            errorMessage={errorNome}
        />
        <Input
            placeholder="Endereço"
            onChangeText={value => {
                setEndereco(value)
                setErrorEndereco(null)
            }}
            errorMessage={errorEndereço}
        />
        <Input
            placeholder="E-mail"
            onChangeText={value => {
                setEmail(value)
                setErrorEmail(null)
            }}
            keyboardtype="email-address"
            errorMessage={errorEmail}
        />
        <Input
            placeholder="Senha"
            onChangeText={value => {
                setPassword(value)
                setErrorPassword(null)
            }}
            secureTextEntry={true}
            errorMessage={errorSenha}
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
            onPress={() => salvar()}
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