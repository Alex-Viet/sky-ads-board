import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/authSlice';

//token refresh
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('auth-ads-board'))?.refresh;

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
  tagTypes: ['Ads', 'Comments'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    //User
    registerUser: build.mutation({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Ads'],
    }),
    getTokens: build.mutation({
      query: (userData) => ({
        url: 'auth/login',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Ads'],
    }),
    getAllUsers: build.query({
      query: () => ({
        url: 'user/all',
      }),
      providesTags: ['Ads'],
    }),
    getCurrentUser: build.query({
      query: () => ({
        url: 'user',
      }),
      transformResponse: (response) => {
        const data = JSON.parse(localStorage.getItem('auth-ads-board'));
        data.id = response.id;
        localStorage.setItem('auth-ads-board', JSON.stringify(data));
        return response;
      },
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
    changePass: build.mutation({
      query: ({ password_1, password_2 }) => ({
        url: 'user/password',
        method: 'PUT',
        body: { password_1, password_2 },
      }),
      invalidatesTags: ['Ads'],
    }),

    //Ads
    getAds: build.query({
      query: () => ({
        url: 'ads',
      }),
      providesTags: ['Ads'],
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
    addNewAd: build.mutation({
      query: (data) => {
        const searchParams = new URLSearchParams();
        searchParams.append('title', data.get('title'));
        searchParams.append('description', data.get('description'));
        searchParams.append('price', data.get('price'));

        const arrData = [...data];
        const length = arrData.length;
        const formData = new FormData();

        for (let i = 1; i < length - 2; i++) {
          formData.append(`files`, data.get(`image${i}`));
        }

        return {
          url: `ads?${searchParams.toString()}`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Ads'],
    }),
    editAd: build.mutation({
      query: ({ id, title, description, price }) => ({
        url: `ads/${id}`,
        method: 'PATCH',
        body: { title, description, price },
      }),
      invalidatesTags: ['Ads'],
    }),
    deleteAd: build.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Ads'],
    }),

    //images
    deleteAdImg: build.mutation({
      query: (data) => ({
        url: `ads/${data.id}/image?file_url=${data.imageUrl}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Ads'],
    }),
    postAdImg: build.mutation({
      query: ({ id, formData }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Ads'],
    }),

    //comments
    getAdComments: build.query({
      query: (id) => ({
        url: `ads/${id}/comments`,
      }),
      providesTags: ['Comments'],
    }),
    postAdComment: build.mutation({
      query: ({ id, text }) => ({
        url: `ads/${id}/comments`,
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetTokensMutation,
  useGetAllUsersQuery,
  useGetCurrentUserQuery,
  useEditUserProfileMutation,
  useUploadUserAvatarMutation,
  useChangePassMutation,

  useGetAdsQuery,
  useGetCurrentUserAdsQuery,
  useAddNewTextOnlyAdMutation,
  useGetUserAdsQuery,
  useAddNewAdMutation,
  useEditAdMutation,
  useDeleteAdMutation,

  useDeleteAdImgMutation,
  usePostAdImgMutation,

  useGetAdCommentsQuery,
  usePostAdCommentMutation,
} = adsApi;
