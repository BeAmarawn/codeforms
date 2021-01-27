import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  FormImage,
  LogoImage,
  PrimaryText,
  SecondaryText,
  NextButton,
} from './styles';

import Logo from '~/assets/logo/codeforms.png';
import FormDraw from '~/assets/illustrations/answer_form.png';

const StepTwo = ({navigation}) => (
  <Container>
    <LogoImage source={Logo} />
    <PrimaryText>Responda as perguntas necessárias</PrimaryText>
    <FormImage source={FormDraw} />
    <SecondaryText>
      Se mantenha atento aos requisitos de cada campo.
    </SecondaryText>
    <NextButton onPress={() => navigation.navigate('StepThree')}>
      <Icon name="rightcircleo" size={50} color="#000" />
    </NextButton>
  </Container>
);

export default StepTwo;
