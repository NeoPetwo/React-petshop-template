import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

// Importing logo image
import logo from '../../images/logo2.png';

export default class Navbar extends React.Component {

  render() {
    return (
    <div class="navbar">
      <nav id="home-bar">
        <NavLink id="logo" to='/'><img src={logo}/></NavLink>
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/myaccount'>My Account</NavLink></li>
            <li><NavLink to='/admin'><i class="fas fa-hammer"></i> Test admin pages (For mockup)</NavLink></li>
            <li><NavLink to='/login'><i class="fas fa-lock"></i> Login</NavLink></li>
            <li id="cart"><NavLink to='/cart'><i class="fas fa-shopping-cart"></i> 0</NavLink></li>
        </ul>
      </nav>
    </div>
    );
  }
}