import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';

type PostsResponse = Post[];

export const contentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.fellyph.com.br/wp-json/wp/v2',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => '/posts',
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    getPages: builder.query({
      query: () => '/pages',
    }),
  }),
});

export const { useGetPostsQuery, useGetPagesQuery, useGetPostQuery } = contentApi;
