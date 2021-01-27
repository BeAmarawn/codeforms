import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  SendImage,
  LogoImage,
  PrimaryText,
  NextButton,
} from './styles';

import Logo from '~/assets/logo/codeforms.png';
import SentForm from '~/assets/illustrations/sent_form.png';

const StepThree = () => (
  <Container>
    <LogoImage source={Logo} />
    <PrimaryText>Envie as respostas e conclua o formulário!</PrimaryText>
    <SendImage source={SentForm} />
    <NextButton>
      <Icon name="rightcircleo" size={50} color="#000" />
    </NextButton>
  </Container>
);

export default StepThree;
