import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  ScanImage,
  LogoImage,
  PrimaryText,
  NextButton,
} from './styles';

import Logo from '~/assets/logo/codeforms.png';
import ScanDraw from '~/assets/illustrations/scan_qr.png';

const StepOne = ({navigation}) => (
  <Container>
    <LogoImage source={Logo} />
    <PrimaryText>Faça o scan do QR code de um de seus formulários.</PrimaryText>
    <ScanImage source={ScanDraw} />
    <NextButton onPress={() => navigation.navigate('StepTwo')}>
      <Icon name="rightcircleo" size={50} color="#000" />
    </NextButton>
  </Container>
);

export default StepOne;
