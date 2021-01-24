import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type HomeParamList = {
  Home: undefined;
  Ajout: undefined;
  Administration:undefined;
  Deconnexion:undefined;
  Filtre:undefined;
};
export type HomeStacknavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
