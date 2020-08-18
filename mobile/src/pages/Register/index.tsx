import React, {useState} from 'react';
import {useAuth} from '../../contexts/auth';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    SubmitButtonText,
    Message,
    RegisterButton,
    RegisterText,
    ForgotPassword,
    ForgotPasswordText,
} from './styles';
import PageHeader from '../../components/PageHeader';

interface Errors {}

const Register: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [messages, setMessages] = useState([]);

    function handleRegister() {}
    return (
        <Container>
            <PageHeader title="Registrar-se" backLink="SignIn" />

            <Form>
                {messages &&
                    messages.map((item: any) => {
                        return (
                            <Message key={item.field}>{item.message}</Message>
                        );
                    })}

                <Input
                    onChangeText={(text) => setUserName(text)}
                    placeholder="UserName"
                />
                <Input
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                />
                <Input
                    onChangeText={(text) => setSenha(text)}
                    placeholder="Senha"
                />

                <SubmitButton onPress={handleRegister}>
                    <SubmitButtonText>Registrar Usuário</SubmitButtonText>
                </SubmitButton>
                <RegisterButton>
                    <RegisterText>Tem uma conta? Logar-se!</RegisterText>
                </RegisterButton>
            </Form>
        </Container>
    );
};

export default Register;
