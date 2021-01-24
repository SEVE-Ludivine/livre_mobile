import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react'
import { Button, Text, TouchableOpacity, View, Modal, Alert } from 'react-native'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AuthNavProps } from '../navigation/AuthParamList';
import { AuthContext } from '../navigation/AuthProvider';
import {styles} from '../CSS/styleA';
import {Connexion} from '../API/ServiceAuthentification';

export function Login({navigation}: AuthNavProps<'Login'>){
    const {login} = useContext(AuthContext);
    const [Mail, SetMail] = React.useState('');
    const [Password, SetPassword] = React.useState('');
    return (
        <View style={styles.container}>
        <Text>Bienvenue sur l'application </Text>
        <Text>Connexion</Text>
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
        <Button onPress={() => login(Mail,Password)} title="Connexion"></Button>
        <Button onPress={() => navigation.navigate('Register')} title="S'inscrire"></Button>
      </View>
    )
}