import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const StyledWrapper = styled('div')({
  width: 'min(100% - 3rem, 100ch)',
  marginInline: 'auto',
  padding: '1rem',
});

function App() {
  return (
    <StyledWrapper>
      <Header title="Welcome to React" subtitle="with TypeScript" />
      <Outlet />
      <Footer signature="Fellyph Cintra" />
    </StyledWrapper>
  );
}

export default App;
