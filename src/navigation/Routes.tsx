import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Center } from '../components/Center';
import { AuthContext } from './AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';
import { ActivityIndicator } from 'react-native';
import { HomeStack } from './HomeStack';

interface RoutesProps {

}
const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       // check if the user is logged in or not
    AsyncStorage.getItem('user')
    .then(userString => {
      if (userString) {
        login();
      }
      setLoading(false);
      console.log(userString);
    })
    .catch(err => {
      console.log(err);
      console.log('catch');
      setLoading(false);
    });
}, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size = 'large'/>
            </Center>
        )
    }
    return (
        <NavigationContainer>
          {user ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
    );
}