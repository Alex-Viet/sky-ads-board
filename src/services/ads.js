import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './users';

export const ADS_TAG = { type: 'Ads', id: 'LIST' };

export const adsApi = createApi({
  reducerPath: 'AdsApi',
  tagTypes: ['Ads'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAds: build.query({
      query: () => ({
        url: '/ads',
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: ADS_TAG.type, id })), ADS_TAG]
          : [ADS_TAG],
    }),
    getCurrentUserAds: build.query({
      query: (user_id) => ({
        url: `/ads/?user_id=${user_id}`,
      }),
      providesTags: ['Ads'],
    }),
    addNewTextOnlyAd: build.mutation({
      query: (data) => ({
        url: '/adstext',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Ads'],
    }),
    getUserAds: build.query({
      query: () => ({
        url: '/ads/me',
      }),
      providesTags: ['Ads'],
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetCurrentUserAdsQuery,
  useAddNewTextOnlyAdMutation,
  useGetUserAdsQuery,
} = adsApi;
