import { call, put, takeLatest } from 'redux-saga/effects';
import { ThingsErrorType } from './types';
import { actions } from './slice';

import { request } from 'utils/request';
import { ThingType } from 'types/Thing';
import config from 'utils/config';

export function* getThing() {
  const requestUrl = `${config.api.url}/things`;

  try {
    const results: { data: [] } = yield call(request, requestUrl);
    const things: ThingType[] = results.data;
    if (things?.length > 0) {
      yield put(actions.thingsLoaded(things));
    } else {
      yield put(actions.thingsError(ThingsErrorType.NO_THINGS));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.thingsError(ThingsErrorType.THINGS_NOT_FOUND));
    } else {
      yield put(actions.thingsError(ThingsErrorType.RESPONSE_ERROR));
    }
  }
}

export function* thingsPageSaga() {
  yield takeLatest(actions.loadThings.type, getThing);
}
