import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  startSuccess,
  startFailure,
  sendSuccess,
  sendFailure,
} from './actions';

export function* start({ payload }) {
  try {
    const response = yield call(api.get, `/${payload.shortCode}`);

    const formData = response.data;
    const { shortCode } = response.data;

    yield put(startSuccess(shortCode, formData));
  } catch (err) {
    if (err.response.status === 422) {
      Alert.alert(
        'Falha',
        'O servidor não conseguiu completar sua requisição. Tente novamente'
      );

      yield put(startFailure());

      return;
    }
    Alert.alert(
      'Falha na autenticação do código',
      'Houve um erro na requisição, verifique o código'
    );
    yield put(startFailure());
  }
}
export function* send({ payload }) {
  try {
    const response = yield call(
      api.post,
      `/${payload.shortCode}`,
      payload.objectFormAnswers
    );

    Alert.alert('Sucesso', 'Seu formulário foi enviado com sucesso');
    yield put(sendSuccess());
  } catch (err) {
    if (err.response.status === 422) {
      Alert.alert(
        'Falha',
        'Não foi possível processar sua transação, tente novamente'
      );

      yield put(sendFailure());

      return;
    }
    if (err.response.status === 400) {
      Alert.alert('Falha', err.response.message);

      yield put(sendFailure());
    }
  }
}

export function setShortCode({ payload }) {
  if (!payload) return;
}

export default all([
  takeLatest('persist/REHYDRATE', setShortCode),
  takeLatest('@formState/START_REQUEST', start),
  takeLatest('@formState/SEND_REQUEST', send),
]);
