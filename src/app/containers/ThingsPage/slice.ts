import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ThingsErrorType } from './types';
import { ThingType } from 'types/Thing';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  things: [],
  thingsError: null,
  thingsLoading: false,
};

const thingsPageSlice = createSlice({
  name: 'thingsPage',
  initialState,
  reducers: {
    loadThings(state) {
      state.things = [];
      state.thingsError = null;
      state.thingsLoading = true;
    },
    thingsLoaded(state, action: PayloadAction<ThingType[]>) {
      state.things = action.payload;
      state.thingsLoading = false;
      state.thingsError = null;
    },
    thingsError(state, action: PayloadAction<ThingsErrorType>) {
      state.thingsError = action.payload;
      state.thingsLoading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = thingsPageSlice;
