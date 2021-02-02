import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Connexion } from '../API/ServiceAuthentification';

type User = null | {token: string}
export const AuthContext = React.createContext<{
    user: User,
    login: (Token: string) => void,
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {} 
});

interface AuthProviderProps {

}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>(null);
    return (
      <AuthContext.Provider
        value={{
          user,
          login: (Token : string) => {
            console.log('Login');
            const User = {token: Token};
            setUser(User);
            AsyncStorage.setItem('user', JSON.stringify(User))
            console.log(AsyncStorage.getItem('user'));
          },
          logout: () => {
            setUser(null);
            AsyncStorage.removeItem('user');
          },
        }}>
        {children}
      </AuthContext.Provider>
    );
}