import { call, put, takeLatest } from 'redux-saga/effects';
import { ThingErrorType } from './types';
import { actions } from './slice';

import { request } from 'utils/request';
import { ThingType } from 'types/Thing';
import config from 'utils/config';

export function* getThing(action) {
  const requestUrl = `${config.api.url}/things/${action.payload}`;

  try {
    const results: { data: ThingType } = yield call(request, requestUrl);
    const thing: ThingType = results.data;
    console.log(thing);
    if (Object.keys(thing).length === 0 && thing.constructor === Object) {
      yield put(actions.thingError(ThingErrorType.NO_THING));
    } else {
      yield put(actions.thingLoaded(thing));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.thingError(ThingErrorType.THING_NOT_FOUND));
    } else {
      yield put(actions.thingError(ThingErrorType.RESPONSE_ERROR));
    }
  }
}

export function* thingPageSaga() {
  yield takeLatest(actions.loadThing.type, getThing);
}
