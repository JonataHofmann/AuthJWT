import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Container,
    Title,
    SubTitle,
    SubmitButton,
    SubmitButtonText,
} from './styles';

const Dashboard: React.FC = () => {
    const {user, signOut} = useAuth();
    function handleSignOut() {
        signOut();
    }
    return (
        <Container>
            <Icon name="person-circle-outline" size={100} color="#FFF" />
            <Title>{user?.username}</Title>
            <SubTitle>{user?.email}</SubTitle>

            <SubmitButton onPress={handleSignOut}>
                <SubmitButtonText>Sair</SubmitButtonText>
            </SubmitButton>
        </Container>
    );
};

export default Dashboard;
