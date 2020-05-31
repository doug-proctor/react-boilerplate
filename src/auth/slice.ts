import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { UserType } from 'types/User';
import { RootState } from 'types';

export const initialState: AuthState = {
  user: {} as UserType,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
      state.isAuth = true;
    },
    deleteUser(state) {
      state.user = {} as UserType;
      state.isAuth = false;
    },
  },
});

export const selectAuth = createSelector(
  [(state: RootState) => state.auth || initialState],
  auth => {
    return auth;
  },
);

export const { storeUser, deleteUser } = authSlice.actions;
export const reducer = authSlice.reducer;
export const authSliceKey = authSlice.name;
