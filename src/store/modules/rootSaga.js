import {all} from 'redux-saga/effects';

import formState from './formState/sagas';

export default function* rootSaga() {
  return yield all([formState]);
}
