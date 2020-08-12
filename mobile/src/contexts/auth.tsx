import React, {createContext, useState, useEffect, useContext} from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            // await new Promise((resolve) => setTimeout(resolve, 2000));

            if (storagedToken && storagedUser) {
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }
        loadStorage();
    }, []);

    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem(
            '@RNAuth:user',
            JSON.stringify(response.user),
        );
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
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
