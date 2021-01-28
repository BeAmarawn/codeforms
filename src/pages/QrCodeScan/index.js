import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Input} from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';
import LottieView from 'lottie-react-native';

import {Container, PrincipalText, ButtonText, EnterButton} from './styles';

import {startRequest} from '~/store/modules/formState/actions';

import formLoading from '~/assets/animations/loading_form.json';

const QrCodeScan = ({navigation}) => {
  const dispatch = useDispatch();
  const [shortCode, setShortCode] = useState('');
  const loading = useSelector((state) => state.formState.loading);

  function handleRegister() {
    dispatch(startRequest(shortCode));
  }

  const onSucess = async (e) => {
    dispatch(startRequest(e.data));
  };

  return (
    <Container>
      {loading ? (
        <LottieView source={formLoading} autoPlay loop />
      ) : (
        <>
          <QRCodeScanner showMarker onRead={onSucess} />
        </>
      )}
    </Container>
  );
};

export default QrCodeScan;
