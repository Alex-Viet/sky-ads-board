import { configureStore } from '@reduxjs/toolkit';
import { adsApi } from '../services/ads';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(adsApi.middleware);
  },
});
