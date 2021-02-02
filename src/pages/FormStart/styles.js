import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 5%;
  justify-content: center;
  background-color: #fff;
`;
export const ProgressIndicatorHeader = styled.TouchableOpacity`
  padding-right: 10px;
  padding-left: 10px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
  height: 60px;
  background-color: #1dd05d;
`;
export const HeaderText = styled.Text`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;
export const PrincipalText = styled.Text`
  margin-bottom: auto;
  text-align: center;
  font-size: 25px;
  color: #000;
  font-family: 'Roboto-Medium';
`;
export const DescriptionText = styled.Text`
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 10px;
  font-size: 16px;
  color: #000;
  font-family: 'Roboto-Regular';
`;
export const DueDateText = styled.Text`
  margin-top: 5%;
  margin-left: 15px;
  margin-bottom: 10%;
  margin-right: 10px;
  font-size: 16px;
  color: #000;
  font-family: 'Roboto-Regular';
`;
export const ButtonText = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;
export const EnterButton = styled.TouchableOpacity`
  margin-top: 25px;
  margin-bottom: auto;
  justify-content: center;
  align-self: center;
  border-radius: 32px;
  width: 80%;
  height: 65px;
  background-color: #a75ef2;
`;
