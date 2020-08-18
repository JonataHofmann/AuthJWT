import React from 'react';
import Sigin from '../pages/SignIn';
import Register from '../pages/Register';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="SignIn" component={Sigin} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
