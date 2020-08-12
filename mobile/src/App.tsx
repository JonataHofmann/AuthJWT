import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/auth';
// import { Container } from './styles';
import Routes from './routes';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
