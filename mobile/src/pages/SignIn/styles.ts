import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #222;
    padding: 50px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #fff;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 54px;
    background-color: #fff;
    padding: 5px 15px;
    margin: 15px 5px 0px 5px;
    border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #8257e5;
    font-size: 16px;
    height: 54px;
    width: 100%;
    margin: 15px 5px 0px 5px;
`;

export const SubmitButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
export const Message = styled.Text`
    color: #f34;
    font-weight: bold;
`;
export const Register = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    /* background-color: #04d361; */
    font-size: 16px;
    height: 54px;
    width: 100%;
    margin: 20px 0px;
`;
export const RegisterText = styled.Text`
    color: #04d361;
    font-weight: bold;
`;

export const ForgotPassword = styled.TouchableOpacity`
    justify-content: center;
    align-items: flex-end;
    border-radius: 8px;
    font-size: 16px;
    /* height: 54px; */
    width: 100%;
    margin: 5px 0px;
`;
export const ForgotPasswordText = styled.Text`
    color: #8257e5;
    font-weight: bold;
`;
