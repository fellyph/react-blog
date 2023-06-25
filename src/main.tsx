import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './config/theme.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/views/home/Home';
import ErrorPage from './components/views/error/ErrorPage.tsx';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { contentApi } from './service/api.ts';
import Post from './components/views/post/Post.tsx';
import Page from './components/views/page/Page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
      {
        path: '/page/:id',
        element: <Page />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApiProvider api={contentApi}>
        <RouterProvider router={router} />
      </ApiProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
