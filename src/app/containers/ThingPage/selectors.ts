import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.thingPage || initialState;

export const selectThingPage = createSelector(
  [selectDomain],
  thingPageState => thingPageState,
);
