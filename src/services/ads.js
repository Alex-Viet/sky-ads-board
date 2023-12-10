import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adsApi = createApi({
  reducerPath: 'AdsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
  }),
  endpoints: (build) => ({
    getAds: build.query({
      query: () => ({
        url: 'ads',
      }),
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
