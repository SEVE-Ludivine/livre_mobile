import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider';
import { HomeStacknavProps } from '../navigation/HomeParamList';

export function Home({navigation}: HomeStacknavProps<'Home'>){
    const {logout} = useContext(AuthContext);
    return (
        <View>
            <Text>Home</Text>
            <Button
            title = 'Se Deconnecter'
            onPress={() => {
                logout();
            }}></Button>
        </View>
    )
}