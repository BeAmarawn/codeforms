import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: 10px;
  background-color: #fff;
`;
export const PrimaryText = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #000;
  font-family: 'Roboto-Medium';
`;
export const NextButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 15px;
  margin-bottom: 30px;
`;
export const LogoImage = styled.Image`
  width: 150px;
  max-height: 80px;
  margin-bottom: auto;
  resize-mode: contain;
`;
export const ScanImage = styled.Image`
  width: auto;
  max-height: 800px;
  resize-mode: contain;
`;
