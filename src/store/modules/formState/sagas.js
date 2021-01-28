import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';
import * as RootNavigation from '~/RootNavigation';

import {startSuccess, startFailure} from './actions';

export function* start({payload}) {
  try {
    const response = yield call(api.get, `/${payload.shortCode}`);

    const started = response.data;
    const {shortCode} = response.data;
    RootNavigation.navigate('FormStart', {formData: response.data});
    yield put(startSuccess(shortCode));
  } catch (err) {
    if (err.response.status === 422) {
      Alert.alert(
        'Falha',
        'O servidor não conseguiu completar sua requisição. Tente novamente',
      );

      yield put(startFailure());

      return;
    }
    Alert.alert(
      'Falha na autenticação do código',
      'Houve um erro na requisição, verifique o código',
    );
    yield put(startFailure());
  }
}

export function setShortCode({payload}) {
  if (!payload) return;
}

export function signOut() {
  //
}

export default all([
  takeLatest('persist/REHYDRATE', setShortCode),
  takeLatest('@formState/START_REQUEST', start),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
