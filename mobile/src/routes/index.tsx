import React from 'react';
import {useAuth} from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Loading from '../components/Loading';
import {StatusBar} from 'react-native';

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

    if (loading) {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#222" />
                <Loading />
            </>
        );
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#222" />
            {signed ? <AppRoutes /> : <AuthRoutes />}
        </>
    );
};

export default Routes;
