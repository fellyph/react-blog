import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    text: ' #060404',
    background: '#f6efef',
    backgroundDark: '#282c34',
    primary: '#b1d2b3',
    secondary: '#ffffff',
    accent: '#b3b1d2',
  },
  fonts: {
    body: '"Inconsolata", monospace',
    heading: '"Karla", sans-serif',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
