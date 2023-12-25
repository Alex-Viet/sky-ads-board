import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/authSlice';

export const ADS_TAG = { type: 'Ads', id: 'LIST' };

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      console.debug('Использую токен из стора', { token });

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      console.log(headers);

      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);
  console.debug('Результат первого запроса', { result });

  if (result?.error?.status !== 401) {
    console.log('Ошибка в result', result?.error?.status);
    return result;
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!');
    api.dispatch(
      setAuth({
        email: null,
        access: null,
        refresh: null,
        isAuth: false,
      }),
    );
    localStorage.clear();
    window.location.assign('/auth');
  };

  const { auth } = api.getState();
  console.debug('Данные пользователя в сторе', { auth });

  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: '/auth/login',
      method: 'PUT',
      body: {
        access_token: auth.access,
        refresh_token: auth.refresh,
      },
    },
    api,
    extraOptions,
  );

  console.debug('Результат запроса на обновление токена', { refreshResult });

  if (refreshResult?.error?.data) {
    console.debug('Ошибка рефреша токена', refreshResult.error.data);
    return forceLogout();
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug('Повторный запрос завершился успешно');

  return retryResult;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    getTokens: build.mutation({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
    getCurrentUser: build.query({
      query: (access) => ({
        url: '/user',
        headers: { Authorization: `Bearer ${access}` },
      }),
    }),
    editUserProfile: build.mutation({
      query: (userData) => ({
        url: '/user',
        method: 'PATCH',
        body: userData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetTokensMutation,
  useGetCurrentUserQuery,
  useEditUserProfileMutation,
} = userApi;
