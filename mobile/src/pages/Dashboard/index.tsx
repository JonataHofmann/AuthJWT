import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
    const {user, signOut} = useAuth();
    function handleSignOut() {
        signOut();
    }
    return (
        <View>
            <Text>{user?.name}</Text>
            <Button title="Sair" onPress={handleSignOut} />
        </View>
    );
};

export default Dashboard;
