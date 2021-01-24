import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Ajout } from '../screens/Ajout';
import { HomeParamList  } from './HomeParamList';
import { Deconnexion } from '../screens/Deconnexion';
import { Administration } from '../screens/Administration';
import { Filtre } from '../screens/Filtre';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ajout" component={Ajout} />
      <Stack.Screen name="Deconnexion" component={Deconnexion} />
      <Stack.Screen name="Administration" component={Administration} />
      <Stack.Screen name="Filtre" component={Filtre} />
    </Stack.Navigator>
  );
};
