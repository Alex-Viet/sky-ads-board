import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './users';

export const ADS_TAG = { type: 'Ads', id: 'LIST' };

export const adsApi = createApi({
  reducerPath: 'AdsApi',
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
    }),
    // getUserAds: build.query({
    //   query: () => ({
    //     url: '/ads/me',
    //   }),
    // }),
  }),
});

export const { useGetAdsQuery, useGetCurrentUserAdsQuery } = adsApi;
