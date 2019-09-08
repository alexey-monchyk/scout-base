import React from 'react';

import UI from './styled';

const NavBar = () => {
  return (
    <UI.NavBar>
      <UI.NavBarItem to='/' activeClassName='active' exact>Home</UI.NavBarItem>
      <UI.NavBarItem to='/movies' activeClassName='active' exact>Movies</UI.NavBarItem>
    </UI.NavBar>
  );
};

export default NavBar;
