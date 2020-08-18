import React, {useContext} from 'react';
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Loading from '../components/Loading';
import {View, Text} from 'react-native';

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

    // if (loading) {
    //     return <Loading />;
    // }

    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
