import React, { Component } from 'react';
import {AppParamList} from './AppParamList';
import { Ajout } from '../screens/Ajout';
import { Home } from '../screens/Home';
import { Administration } from '../screens/Administration';
import { Deconnexion } from '../screens/Deconnexion';
import { Filtre } from '../screens/Filtre';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

interface AppTabsProps {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ajout" component={Ajout} />
      <Tab.Screen name="Filtre" component={Filtre} />
      <Tab.Screen name="Administration" component={Administration} />
      <Tab.Screen name="Deconnexion" component={Deconnexion} />
    </Tab.Navigator>
  );
};