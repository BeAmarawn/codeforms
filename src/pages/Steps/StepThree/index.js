import React from 'react';
import {useDispatch} from 'react-redux';
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

import {firstAcessConfirm} from '~/store/modules/formState/actions';

const StepThree = () => {
  const dispatch = useDispatch();
  const boolean = true;
  function handleFinalizeTutorial() {
    dispatch(firstAcessConfirm({boolean}));
  }
  return (
    <Container>
      <LogoImage source={Logo} />
      <PrimaryText>Envie as respostas e conclua o formulário!</PrimaryText>
      <SendImage source={SentForm} />
      <NextButton onPress={() => handleFinalizeTutorial()}>
        <Icon name="checkcircle" size={50} color="#1dd05d" />
      </NextButton>
    </Container>
  );
};

export default StepThree;
