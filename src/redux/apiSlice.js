import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://anapioficeandfire.com/api/';

export const charactersAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ API_URL }),
  endpoints: (builder) => ({
    getCharactersData: builder.query({
      query: (options) =>
        `characters?page=${options.page}&pageSize=${options.pageSize}`,
    }),
    getHouseData: builder.query({
      query: (id) => `https://anapioficeandfire.com/api/houses/${id}`,
    }),
  }),
});

export const { useGetCharactersDataQuery, useGetHouseDataQuery } =
  charactersAPI;
