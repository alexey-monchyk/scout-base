import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.red};
  padding: 2rem;
`;

const NavBarItem = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-size: 1.4rem;
  text-decoration: none;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.white};

  &.active {
    padding-bottom: 1.7rem;
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.white};
  }
`;

export default {
  NavBar,
  NavBarItem,
};
