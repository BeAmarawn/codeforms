import React from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Svg, {Path} from 'react-native-svg';
import {
  Container,
  WaveContainer,
  NameText,
  LogoImage,
  PrimaryText,
  SecondaryText,
  NextButton,
} from './styles';

import Logo from '~/assets/logo/codeforms.png';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Apresentation = ({navigation}) => (
  <Container>
    <NameText>CodeForms</NameText>
    <LogoImage source={Logo} />
    <PrimaryText>
      Acesse, responda e envie seus formulários, em um único lugar.
    </PrimaryText>
    <SecondaryText>
      Siga os passos e aprenda como usar a ferramenta!
    </SecondaryText>
    <NextButton onPress={() => navigation.navigate('StepOne')}>
      <Icon name="rightcircleo" size={50} color="#fff" />
    </NextButton>

    <WaveContainer>
      <Svg
        height={windowHeight / 2}
        width={windowWidth + 1}
        viewBox="0 0 375 644"
        preserveAspectRatio="none">
        <Path
          d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z"
          fill="#A75EF2"
          stroke="#A75EF2"
        />
      </Svg>
    </WaveContainer>
  </Container>
);

export default Apresentation;
