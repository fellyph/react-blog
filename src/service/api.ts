import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.fellyph.com.br/wp-json/wp/v2',
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPages: builder.query({
      query: () => '/pages',
    }),
  }),
});
