import React from 'react';
import {Text, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

import {Container} from './styles';

const SignIn: React.FC = () => {
    const {signed, user, signIn} = useAuth();
    console.log(signed);
    console.log(user);
    function handleSignIn() {
        //email e pass
        signIn();
    }

    return (
        <Container>
            <Text>Signin</Text>
            <Button title="Logar" onPress={handleSignIn} />
        </Container>
    );
};

export default SignIn;
