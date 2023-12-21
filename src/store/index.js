import { configureStore } from '@reduxjs/toolkit';
import { adsApi } from '../services/ads';
import { userApi } from '../services/users';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware, adsApi.middleware);
  },
});
