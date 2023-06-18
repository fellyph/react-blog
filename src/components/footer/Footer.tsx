import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled('footer')`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  min-height: 10vh;
  color: ${(props) => props.theme.colors.primary};
`;

type FooterProps = {
  signature: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Footer: FC<FooterProps> = ({ signature, ...restProps }) => {
  return (
    <StyledFooter {...restProps}>
      <p>{signature}</p>
    </StyledFooter>
  );
};

export default Footer;
