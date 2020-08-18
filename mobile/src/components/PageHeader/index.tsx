import React, {ReactNode} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {Container, TopBar, Header, Title} from './styles';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    backLink?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    headerRight,
    children,
    backLink,
}) => {
    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate(backLink || '');
    }
    return (
        <Container>
            <TopBar>
                <BorderlessButton onPress={handleGoBack}>
                    <Icon name="arrow-back-outline" size={16} color="#FFF" />
                </BorderlessButton>
                {/* <Icon name="" size={16} color="#FFF" /> */}
                <Header>
                    <Title>{title}</Title>
                    {headerRight}
                </Header>
            </TopBar>

            {children}
        </Container>
    );
};

export default PageHeader;
