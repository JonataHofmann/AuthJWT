import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {Container} from './styles';

const Loading: React.FC = () => {
    return (
        <Container>
            <ActivityIndicator size="large" color="#999" />
        </Container>
    );
};

export default Loading;
