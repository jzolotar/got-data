import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = `https://anapioficeandfire.com/api/`;

export const charactersAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCharactersData: builder.query({
      //   query: () => `characters?page=1&pageSize=25`,
      query: ({ page, pageSize }) =>
        `characters?page=${page}&pageSize=${pageSize}`,
    }),

    getHouseData: builder.query({
      query: (id) => `houses/${id}`,
    }),
  }),
});

export const { useGetCharactersDataQuery, useGetHouseDataQuery } =
  charactersAPI;
