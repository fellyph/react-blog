import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { StyledWrapper } from './components/shared/Atoms';

function App() {
  return (
    <>
      <Header title="Welcome to React" subtitle="with TypeScript" />
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
      <Footer signature="Fellyph Cintra" />
    </>
  );
}

export default App;
