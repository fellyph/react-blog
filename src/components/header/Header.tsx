import React, { FC } from 'react';
import styled from '@emotion/styled';

type HeaderProps = {
  title: string;
  subtitle: string;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledHeader = styled('header')`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  min-height: 10vh;
  padding: ${(props) => props.theme.spacing.lg};
`;

const StyleTitle = styled('h1')`
  color: ${(props) => props.theme.colors.primary};
  fontsize: 'clamp(24px, 4vw, 48px)';
`;

const StyledSubtitle = styled('h2')`
  color: ${(props) => props.theme.colors.secondary};
  fontsize: 'clamp(16px, 2vw, 24px)';
`;

const Header: FC<HeaderProps> = ({ title, subtitle, ...restProps }) => {
  return (
    <StyledHeader {...restProps}>
      <StyleTitle>{title}</StyleTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledHeader>
  );
};

export default Header;
