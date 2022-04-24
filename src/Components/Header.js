import React from 'react';
import { NavLink } from 'react-router-dom';
import brasao from '../images/logo.svg';
import './Header.css';


class Header extends React.Component {
  render() {
    return(
      <header className='header'>
        <img src={brasao} alt='brasao' className="brasao"/>
        <nav className='nav-header'>
          <NavLink className='nav-link' activeClassName="active" exact to='/'>Inicio</NavLink>
          <NavLink className='nav-link' activeClassName="active" to='/sobre'>Sobre Nós</NavLink>
          <NavLink className='nav-link' activeClassName="active" to='/catalogo'>Catálogo</NavLink>
        </nav>
      </header>
    )
  }
}

export default Header;
