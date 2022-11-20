import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { Container } from 'components/App/App.styled';
import { FaFlagUsa } from 'react-icons/fa';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <FaFlagUsa size="40px" color={theme.colors.light} />

            <LinkWrapper>
              <NavLinkStyled to="/">Jobs list</NavLinkStyled>
              <NavLinkStyled to="/cabinet">My cabinet</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};

export default Header;
