import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mainUrl = 'http://127.0.0.1:8090';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: mainUrl,
  }),
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
  }),
});

export const { useRegisterUserMutation, useGetTokensMutation } = userApi;
