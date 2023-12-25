import { createApi } from '@reduxjs/toolkit/query/react';
import { ADS_TAG, baseQueryWithReauth } from './users';

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
  }),
});

export const { useGetAdsQuery, useGetCurrentUserAdsQuery } = adsApi;
