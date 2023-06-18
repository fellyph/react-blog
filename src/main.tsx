import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    text: ' #060404',
    background: '#f6efef',
    primary: '#b1d2b3',
    secondary: '#ffffff',
    accent: '#b3b1d2',
  },
  fonts: {
    body: '"Inconsolata", monospace',
    heading: '"Karla", sans-serif',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
