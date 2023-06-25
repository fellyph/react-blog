import styled from '@emotion/styled';

export const StyledWrapper = styled('div')`
  width: min(100% - 3rem, 100ch);
  margin-inline: auto;
  padding: ${(props) => props.theme.spacing.md};
`;

export const Loader = styled('div')`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme.colors.primary};
    display: inline-block;
    border-radius: 50%;
    animation: animloader 700ms ease-in infinite;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
