import { configureStore } from '@reduxjs/toolkit';
import { adsApi } from '../services/ads';
import { userApi } from '../services/users';

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware, adsApi.middleware);
  },
});
