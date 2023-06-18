import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled('footer')({
  backgroundColor: '#282c34',
  minHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

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
