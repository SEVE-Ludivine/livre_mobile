import React from 'react'
import { Button, Text, View } from 'react-native'
import { HomeStacknavProps } from '../navigation/HomeParamList';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {styles} from '../CSS/styleA';
import { ajoutOuvrage } from '../API/ServiceAuthentification';

export function Ajout({navigation}: HomeStacknavProps<'Ajout'>){
    const [Titre, SetTitre] = React.useState('');
    const [Auteur, SetAuteur] = React.useState('');
    const [Tome, SetTome] = React.useState('');
    const [Genre, SetGenre] = React.useState('');
    const [Style, SetStyle] = React.useState('');
    const [Description, SetDescription] = React.useState('');
    return (
        <View style={styles.container}>
            <Text>Ajout d'un ouvrage</Text>
            <TextInput
            style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Titre" 
            value = {Titre}
            onChangeText ={ text => SetTitre(text)}       
            />
            <TextInput
            style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Auteur"
            value = {Auteur}
            onChangeText ={ text=> SetAuteur(text)}  
            />
            <TextInput
            style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Tome"
            value = {Tome}
            onChangeText ={ text=> SetTome(text)}  
            />
            <TextInput
            style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Genre" 
            value = {Genre}
            onChangeText ={ text => SetGenre(text)}       
            />
            <TextInput
            style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Style"
            value = {Style}
            onChangeText ={ text=> SetStyle(text)}  
            />
            <TextInput
            style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Description"
            multiline = {true}
            value = {Description}
            onChangeText ={ text=> SetDescription(text)}  
            />
            <Button onPress={() => ajoutOuvrage(Titre, Auteur, Tome, Genre, Style, Description)} title="Valider"></Button>
        </View>
    
    )
}