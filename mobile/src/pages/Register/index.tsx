import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

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
import {register} from '../../services/auth';
import {StatusBar} from 'react-native';

interface Error {
    field: string;
    message: string;
}

const Register: React.FC = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState<Array<Error>>([]);
    const {goBack} = useNavigation();

    function handleRegister() {
        register({username, email, password})
            .then((response) => {
                goBack();
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setMessages([{field: '', message: 'Um erro aconteceu!'}]);
            });
    }
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
            <Container>
                <PageHeader title="Registrar-se" backLink="SignIn" />

                <Form>
                    {messages &&
                        messages.map((item: any) => {
                            return (
                                <Message key={item.field}>
                                    {item.message}
                                </Message>
                            );
                        })}

                    <Input
                        value={username}
                        onChangeText={(text) => setUserName(text)}
                        placeholder="UserName"
                    />
                    <Input
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                    />
                    <Input
                        value={password}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Senha"
                    />

                    <SubmitButton onPress={handleRegister}>
                        <SubmitButtonText>Registrar Usuário</SubmitButtonText>
                    </SubmitButton>
                    <RegisterButton onPress={() => goBack()}>
                        <RegisterText>Tem uma conta? Logar-se!</RegisterText>
                    </RegisterButton>
                </Form>
            </Container>
        </>
    );
};

export default Register;
