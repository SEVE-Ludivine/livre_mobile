import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { AuthNavProps } from '../navigation/AuthParamList';
import {Inscription} from '../API/ServiceAuthentification';
import {styles} from '../CSS/styleA'
export function Register({navigation}: AuthNavProps<'Register'>){
    const [Mail, SetMail] = React.useState('');
    const [Password, SetPassword] = React.useState('');
        return (
            <View style={styles.container}>
            <Text>Inscription</Text>
            <TextInput
              style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
              placeholder="Email" 
              value = {Mail}
              onChangeText ={ text => SetMail(text)}       
            />
            <TextInput
              style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
              placeholder="Mot de passe"
              value = {Password}
              onChangeText ={ text=> SetPassword(text)}  
              
            />
            <Button onPress={() => Inscription(Mail,Password)} title="Inscription"></Button>
            <br/><br/>
            <Button onPress={() => navigation.navigate('Login')} title="Se connecter"></Button>
        </View>
    )
}