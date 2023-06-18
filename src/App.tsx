import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styled from '@emotion/styled';

const StyledWrapper = styled('div')({
  width: 'min(100% - 3rem, 100ch)',
  marginInline: 'auto',
  padding: '1rem',
});

function App() {
  return (
    <StyledWrapper>
      <Header title="Welcome to React" subtitle="with TypeScript" />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
      <Footer signature="Fellyph Cintra" />
    </StyledWrapper>
  );
}

export default App;
