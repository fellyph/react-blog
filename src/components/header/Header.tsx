import React, { FC } from 'react';
import styled from '@emotion/styled';
import { StyledWrapper } from '../shared/Atoms';

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
  fontsize: ${(props) => props.theme.fonts.h1.fontSize};
`;

const StyledSubtitle = styled('h2')`
  color: ${(props) => props.theme.colors.secondary};
  fontsize: ${(props) => props.theme.fonts.h2.fontSize};
`;

const Header: FC<HeaderProps> = ({ title, subtitle, ...restProps }) => {
  return (
    <StyledHeader {...restProps}>
      <StyledWrapper>
        <StyleTitle>{title}</StyleTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
