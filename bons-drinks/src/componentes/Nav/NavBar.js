import React from 'react'
import { Nav, NavLinks, NavMenu } from './NavBar.style';

const NavBar = () => {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavLinks exact to='/'>
              BoaBebida
            </NavLinks>
            <NavLinks to='drinks'>
              Drinks
            </NavLinks>
            <NavLinks to='sobrenos'>
              Sobre Nós
            </NavLinks>
            <NavLinks to='nossotime'>
              Nosso Time
            </NavLinks>
            <NavLinks to='contato'>
              Contato
            </NavLinks>
          </NavMenu>
        </Nav>
        </>
    )
}

export default NavBar;
