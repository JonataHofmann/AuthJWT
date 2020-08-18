import styled from 'styled-components/native';

export const Container = styled.View`
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
export const SubTitle = styled.Text`
    font-size: 20px;
    color: #fff;
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
