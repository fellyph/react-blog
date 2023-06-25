import React, { FC, useState } from 'react';
import { useGetPagesQuery } from '../../../service/api';
import { Page } from '../../../types/Page';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import IconsSvg, { IconsSprite } from '../IconsSvg';

const StyledMenu = styled('nav')`
  margin: 0;
  padding: 0;
`;

const StyledMenuButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledMenuContainer = styled('div')`
  background-color: ${({ theme }) => theme.colors.background};
  list-style: none;
  position: fixed;
  top: 0;
  left: -100%;
  width: min(40ch, 80vw);
  height: 100vh;
  transition: all 400ms ease-in-out;
  text-align: right;

  &.is-open {
    left: 0;
  }

  & button {
    margin: ${({ theme }) => theme.spacing.md};
    text-align: right;
    display: inline-block;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const StyledMenuItem = styled('li')`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.h3.fontSize};
  font-weight: bold;
  text-align: left;
`;

const Menu: FC<React.AllHTMLAttributes<HTMLDivElement>> = (props) => {
  const { data: pageData, isLoading: pageDataIsLoading } = useGetPagesQuery();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pageDataIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <nav {...props}>
      <StyledMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        Menu <IconsSvg id={IconsSprite.MENU} />
      </StyledMenuButton>
      <StyledMenuContainer className={menuOpen ? 'is-open' : ''}>
        <StyledMenuButton onClick={() => setMenuOpen(false)}>
          Close <IconsSvg id={IconsSprite.CLOSE} />
        </StyledMenuButton>
        <StyledMenu>
          {pageData.map((page: Page) => (
            <StyledMenuItem key={page.id}>
              <Link to={`/page/${page.id}/`}>{page.title.rendered}</Link>
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </StyledMenuContainer>
    </nav>
  );
};

export default Menu;
