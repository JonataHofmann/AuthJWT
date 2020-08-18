import React, {useState} from 'react';
import {useAuth} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Container,
    Title,
    Input,
    SubmitButton,
    SubmitButtonText,
    Message,
    Register,
    RegisterText,
    ForgotPassword,
    ForgotPasswordText,
} from './styles';

interface Errors {}

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [messages, setMessages] = useState([]);
    const {signed, signIn} = useAuth();

    const {navigate } = useNavigation();

    function handleNavigateToRegister() {
        navigate('Register');
    }

    async function handleSignIn() {
        signIn(email, senha).catch((err) => {
            console.log(JSON.stringify(err));
            setMessages(
                err.response.data || [
                    {field: '', message: 'Um erro aconteceu!'},
                ],
            );
        });
    }

    return (
        <Container>
            <Title>Sign In JWT </Title>
            <Icon name="rocket-outline" size={100} color="#FFF" />

            {messages &&
                messages.map((item: any) => {
                    return <Message key={item.field}>{item.message}</Message>;
                })}

            <Input
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
            />
            <Input
                onChangeText={(text) => setSenha(text)}
                placeholder="Senha"
            />
            <ForgotPassword>
                <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
            </ForgotPassword>

            <SubmitButton onPress={handleSignIn}>
                <SubmitButtonText>Logar</SubmitButtonText>
            </SubmitButton>
            <Register onPress={handleNavigateToRegister}>
                <RegisterText>Não tem uma conta? Registre-se!</RegisterText>
            </Register>
        </Container>
    );
};

export default SignIn;
