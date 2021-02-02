import styled from 'styled-components/native';
import { Input } from 'react-native-elements';

export const NumericInput = styled(Input)``;
export const HintText = styled.Text`
  text-align: center;
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
`;
export const Title = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #8a96a1;
  font-family: 'Roboto-Bold';
`;
export const ErrorTitle = styled.Text`
  color: #eb2041;
  font-size: 16px;
  margin-top: -25px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const Container = styled.View`
  padding-top: 10px;
  margin-bottom: 15px;
  margin-right: 10px;
  margin-left: 10px;
  border-width: 1px;
  border-color: #a75df2;
  border-radius: 15px;
`;
