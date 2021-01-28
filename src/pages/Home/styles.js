import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
  justify-content: center;
  background-color: #fff;
`;
export const NameText = styled.Text`
  align-self: center;
  font-size: 40px;
  color: #6719b7;
  font-family: 'Roboto-Regular';
`;
export const ButtonText = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;
export const EnterButton = styled.TouchableOpacity`
  margin-bottom: 20px;
  justify-content: center;
  align-self: center;
  border-radius: 32px;
  width: 80%;
  height: 65px;
  background-color: #a75ef2;
`;
export const LogoImage = styled.Image`
  width: auto;
  height: 150px;
  margin-bottom: 20%;
  resize-mode: center;
`;
