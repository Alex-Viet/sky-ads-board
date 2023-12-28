import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/authSlice';

const ADS_TAG = { type: 'Ads', id: 'LIST' };

//token refresh
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      console.debug('Использую токен из стора', { token });
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });

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

  const result = await baseQuery(args, api, extraOptions);
  console.debug('Результат первого запроса', { result });

  const { auth } = api.getState();
  console.debug('Данные пользователя в сторе', { auth });

  const refreshToken = async () => {
    const refreshResult = await baseQuery(
      {
        url: 'auth/login',
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
    if (refreshResult?.error?.status === 401) {
      throw new Error('Failed to refresh token');
    }

    api.dispatch(
      setAuth({
        ...auth,
        access: refreshResult.data.access_token,
        refresh: refreshResult.data.refresh_token,
      }),
    );
  };

  if (result?.error?.status === 401) {
    try {
      await refreshToken();
      const retryResult = await baseQuery(args, api, extraOptions);
      console.debug('Повторный запрос завершился успешно');

      return retryResult;
    } catch (refreshError) {
      console.error(refreshError);
      forceLogout();
      throw new Error('Failed to refresh token');
    }
  }

  return result;
};

export const adsApi = createApi({
  reducerPath: 'adsApi',
  tagTypes: ['Ads'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    //User
    registerUser: build.mutation({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
      providesTags: ['Ads'],
    }),
    getTokens: build.mutation({
      query: (userData) => ({
        url: 'auth/login',
        method: 'POST',
        body: userData,
      }),
      providesTags: ['Ads'],
    }),
    getCurrentUser: build.query({
      query: (access) => ({
        url: 'user',
        headers: { Authorization: `Bearer ${access}` },
      }),
      providesTags: ['Ads'],
    }),
    editUserProfile: build.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData,
      }),
      invalidatesTags: ['Ads'],
    }),
    uploadUserAvatar: build.mutation({
      query: (img) => ({
        url: 'user/avatar',
        method: 'POST',
        body: img,
      }),
      invalidatesTags: ['Ads'],
    }),
    //Ads
    getAds: build.query({
      query: () => ({
        url: 'ads',
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: ADS_TAG.type, id })), ADS_TAG]
          : [ADS_TAG],
    }),
    getCurrentUserAds: build.query({
      query: (user_id) => ({
        url: `ads/?user_id=${user_id}`,
      }),
      providesTags: ['Ads'],
    }),
    addNewTextOnlyAd: build.mutation({
      query: (data) => ({
        url: 'adstext',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Ads'],
    }),
    getUserAds: build.query({
      query: () => ({
        url: 'ads/me',
      }),
      providesTags: ['Ads'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetTokensMutation,
  useGetCurrentUserQuery,
  useEditUserProfileMutation,
  useUploadUserAvatarMutation,
  useGetAdsQuery,
  useGetCurrentUserAdsQuery,
  useAddNewTextOnlyAdMutation,
  useGetUserAdsQuery,
} = adsApi;
