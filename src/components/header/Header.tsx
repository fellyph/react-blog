import React, { FC } from 'react';
import styled from '@emotion/styled';

type HeaderProps = {
  title: string;
  subtitle: string;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledHeader = styled('header')` 
  backgroundColor: '#282c34',
  minHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',

  '& h1': {
    color: 'white',
    fontSize: 'clamp(24px, 4vw, 48px)',
    color: props.theme.colors.primary,
  },

  '& h2': {
    color: 'white',
    fontSize: 'clamp(16px, 2vw, 24px)',
  },
`;

const StyleTitle = styled('h1')`
  color: ${(props) => props.theme.colors.primary};
`;

const Header: FC<HeaderProps> = ({ title, subtitle, ...restProps }) => {
  return (
    <StyledHeader {...restProps}>
      <StyleTitle>{title}</StyleTitle>
      <h2>{subtitle}</h2>
    </StyledHeader>
  );
};

export default Header;
