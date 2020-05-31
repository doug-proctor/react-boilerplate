import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ThingErrorType } from './types';
import { ThingType } from 'types/Thing';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  thing: {} as ThingType,
  thingError: null,
  thingLoading: false,
};

const thingPageSlice = createSlice({
  name: 'thingPage',
  initialState,
  reducers: {
    loadThing(state, action: PayloadAction<string>) {
      state.thing = {} as ThingType;
      state.thingError = null;
      state.thingLoading = true;
    },
    thingLoaded(state, action: PayloadAction<ThingType>) {
      state.thing = action.payload;
      state.thingLoading = false;
      state.thingError = null;
    },
    thingError(state, action: PayloadAction<ThingErrorType>) {
      state.thingError = action.payload;
      state.thingLoading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = thingPageSlice;
