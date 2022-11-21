import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.mainBackground};

  box-shadow: 0px 2px 10px 1px ${props => props.theme.colors.dark};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  height: 90px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
   align-items: center;
     display: inline-flex;
 border-radius: 24px;
 box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
   color: #3c4043;
  text-transform: uppercase;
 height: 58px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;




  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
    background-color:  ${props => props.theme.colors.hoverBg};
     box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30 %), 0 8px 12px 6px rgb(60 64 67 / 15 %);
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};
    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.step * 5}px;

  margin-left: ${props => props.theme.spacing.step * 7}px;
`;
