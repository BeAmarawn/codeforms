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
  font-family: 'Roboto-Medium';
`;
export const PrimaryText = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #000;
  font-family: 'Roboto-Medium';
`;
export const SecondaryText = styled.Text`
  margin-top: 45%;
  margin-bottom: 30px;
  text-align: center;
  font-size: 25px;
  color: #fff;
  font-family: 'Roboto-Medium';
`;
export const NextButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 15px;
`;
export const LogoImage = styled.Image`
  width: auto;
  height: 150px;
  margin-bottom: 20%;
  resize-mode: center;
`;
export const WaveContainer = styled.View`
  z-index: -1;
  margin-top: auto;
`;
