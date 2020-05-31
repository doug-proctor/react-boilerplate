import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.thingsPage || initialState;

export const selectThingsPage = createSelector(
  [selectDomain],
  thingsPageState => thingsPageState,
);
