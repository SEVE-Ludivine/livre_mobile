import React from 'react'
import { Text, View } from 'react-native'
import { HomeStacknavProps } from '../navigation/HomeParamList';

export function Administration({navigation}: HomeStacknavProps<'Administration'>){
    return (
        <View>
            <Text>Administration</Text>
        </View>
    )
}