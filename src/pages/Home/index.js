import React from 'react';

import {
  Container,
  NameText,
  LogoImage,
  ButtonText,
  EnterButton,
} from './styles';

import Logo from '~/assets/logo/codeforms.png';

const Home = ({navigation}) => (
  <Container>
    <NameText>CodeForms</NameText>
    <LogoImage source={Logo} />

    <EnterButton>
      <ButtonText>Ler QR code</ButtonText>
    </EnterButton>
    <EnterButton onPress={() => navigation.navigate('EnterCode')}>
      <ButtonText>Inserir Código</ButtonText>
    </EnterButton>
  </Container>
);

export default Home;
