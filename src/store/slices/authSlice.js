import { createSlice } from '@reduxjs/toolkit';

const AUTH_KEY = 'auth';

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
  } catch (error) {
    return null;
  }
}

const initialState = {
  email: '',
  access: '',
  refresh: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth(state, action) {
      const payload = action.payload ?? initialState;

      state.email = payload.email;
      state.access = payload.access;
      state.refresh = payload.refresh;

      localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    },
  },
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
