import { Outlet } from 'react-router-dom';
import { Container } from 'components/App/App.styled';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
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
