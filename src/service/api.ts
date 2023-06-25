import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';
import { SiteInfo } from '../types/SiteInfo';

type PostsResponse = Post[];

export const contentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.fellyph.com.br/wp-json',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => '/wp/v2/posts',
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/wp/v2/posts/${id}`,
    }),
    getPages: builder.query({
      query: () => '/wp/v2/pages',
    }),
    getSiteInfo: builder.query<SiteInfo, void>({
      query: () => '/',
    }),
  }),
});

export const { useGetPostsQuery, useGetPagesQuery, useGetPostQuery, useGetSiteInfoQuery } = contentApi;
