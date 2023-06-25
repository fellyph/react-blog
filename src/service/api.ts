import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';
import { SiteInfo } from '../types/SiteInfo';
import { Page } from '../types/Page';

type PostsResponse = Post[];
type PagesResponse = Page[];

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
    getPages: builder.query<PagesResponse, void>({
      query: () => '/wp/v2/pages',
    }),
    getPage: builder.query<Page, number>({
      query: (id) => `/wp/v2/pages/${id}`,
    }),
    getSiteInfo: builder.query<SiteInfo, void>({
      query: () => '/',
      keepUnusedDataFor: 600000,
    }),
  }),
});

export const { useGetPostsQuery, useGetPagesQuery, useGetPageQuery, useGetPostQuery, useGetSiteInfoQuery } = contentApi;
