import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';

const initialState = {
  loading: false,
  authenticated: false,
  user: null,
  checkingUser: true,
  viewedSplash: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchStart: (state: any) => {
      state.loading = true;
    },
    loginUserSuccess: (state: any, action: PayloadAction<any>) => {
      state.loading = false;
      state.authenticated = true;
      state.user = action.payload;
    },
    logoutUser: (state: any) => {
      state.loading = false;
      state.authenticated = false;
      state.user = null;
    },
  },
});

export const {fetchStart, loginUserSuccess, logoutUser} = authSlice.actions;

export const authentication = (state: RootState): any => state.auth;

export default authSlice.reducer;
