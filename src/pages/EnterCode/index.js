import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Input} from 'react-native-elements';
import LottieView from 'lottie-react-native';

import {Container, PrincipalText, ButtonText, EnterButton} from './styles';

import {startRequest} from '~/store/modules/formState/actions';

import formLoading from '~/assets/animations/loading_form.json';

const EnterCode = ({navigation}) => {
  const dispatch = useDispatch();
  const [shortCode, setShortCode] = useState('');
  const loading = useSelector((state) => state.formState.loading);

  function handleRegister() {
    dispatch(startRequest(shortCode));
  }

  return (
    <Container>
      {loading ? (
        <LottieView source={formLoading} autoPlay loop />
      ) : (
        <>
          <PrincipalText>
            Insira um código de formulário, para começar.
          </PrincipalText>

          <Input
            value={shortCode}
            onChangeText={(text) => setShortCode(text)}
            placeholder="Insira o código de seu formulário"
            autoCapitalize="characters"
            leftIcon={{
              type: 'material-community',
              name: 'form-textbox-password',
            }}
          />
          <EnterButton onPress={() => handleRegister()}>
            <ButtonText>Inserir Código</ButtonText>
          </EnterButton>
        </>
      )}
    </Container>
  );
};

export default EnterCode;
