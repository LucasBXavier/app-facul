import React from "react";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { StyleSheet } from 'react-native';
import styles from '../../style/mainStyle';




export default function Cadastro ({navigation}){

const continuar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
}



    return(
      <View style={styles.container}>
      <Input
            placeholder="Nome"
            leftIcon={{ type: 'font-awesome', name: 'user'}}
            //onChangeText={value => setNome(value)}
        />
        <Input
            placeholder="E-mail"
            leftIcon={{ type: 'font-awesome', name: 'envelope'}}
            //onChangeText={value => setEmail(value)}
            keyboardtype="email-address"
        />
        <Input
            placeholder="Senha"
            leftIcon={{ type: 'font-awesome', name: 'lock'}}
            //onChangeText={value => setPassword(value)}
            secureTextEntry={true}
        />
        <Button 
            size={15}
            title="Continuar" 
            type="outline" 
            buttonStyle={specificStyle.button}
            onPress={() => continuar()}
      />
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