import React, { FC } from 'react';
import styled from '@emotion/styled';
import { StyledWrapper } from '../shared/Atoms';

const StyledFooter = styled('footer')`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  min-height: 10vh;
  color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
`;

type FooterProps = {
  signature: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Footer: FC<FooterProps> = ({ signature, ...restProps }) => {
  return (
    <StyledFooter {...restProps}>
      <StyledWrapper>
        <p>{signature}</p>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
