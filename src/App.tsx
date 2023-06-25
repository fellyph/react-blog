import React from 'react';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Loader, StyledWrapper } from './components/shared/Atoms';
import { useGetSiteInfoQuery } from './service/api';

function App() {
  const { data: siteData, isLoading: siteDataIsLoading } = useGetSiteInfoQuery();

  if (siteDataIsLoading) return <Loader>Loading...</Loader>;

  return (
    <>
      <Header title={siteData.name} subtitle={siteData.description} />
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
      <Footer signature={siteData.name} />
    </>
  );
}

export default App;
