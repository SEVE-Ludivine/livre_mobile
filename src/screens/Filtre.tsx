import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { filtreOuvrage } from '../API/ServiceAuthentification';
import { styles } from '../CSS/styleA';
import { HomeStacknavProps } from '../navigation/HomeParamList';

export function Filtre({navigation}: HomeStacknavProps<'Filtre'>){
    const [Titre, SetTitre] = React.useState('');
    const [Auteur, SetAuteur] = React.useState('');
    const [Tome, SetTome] = React.useState('');
    const [Genre, SetGenre] = React.useState('');
    const [Style, SetStyle] = React.useState('');
    const [Description, SetDescription] = React.useState('');
    return (
        <View style={styles.container}>
            <Text>Filtre d'un ouvrage</Text>
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
            <Button onPress={() => filtreOuvrage(Titre, Auteur, Tome, Genre, Style, Description)} title="Rechercher"></Button>
        </View>
    )
}