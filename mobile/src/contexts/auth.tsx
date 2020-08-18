import React, {createContext, useState, useEffect, useContext} from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User {
    username: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(email: string, senha: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage() {
            setLoading(false);
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storagedToken && storagedUser) {
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser));
                // setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    async function signIn(email: string, senha: string) {
        setLoading(true);
        console.log('sigin');
        try {
            const response = await auth.signIn(email, senha);
            // console.log('response', response);
            setUser(response.data.user);
            api.defaults.headers[
                'Authorization'
            ] = `Bearer ${response.data.token}`;
            await AsyncStorage.setItem(
                '@RNAuth:user',
                JSON.stringify(response.data.user),
            );
            await AsyncStorage.setItem('@RNAuth:token', response.data.token);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw err;
        }
    }

    function signOut() {
        setLoading(true);
        AsyncStorage.clear().then(() => {
            setUser(null);
            setLoading(false);
        });
        setLoading(false);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                loading,
                signIn,
                signOut,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
