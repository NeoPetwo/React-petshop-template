import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';

import { SERVER_URL } from '../../variables';

import './Navbar.scss';

// Importing logo image
import logo from '../../images/logo2.png';

export default class Navbar extends React.Component {
  constructor() {
    super();
    const cookies = new Cookies();
    let user = cookies.get('loggedUser');
    this.state = {
      user: user,
      cartQtt: 0
    }
    this.fetchCart();
  }

  fetchCart = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${SERVER_URL}/cart/${this.state.user.id}`
      });
      this.setState({
        cartQtt: res.data.items.length
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
    <div class="navbar">
      <nav id="home-bar">
        <NavLink id="logo" to='/'><img src={logo}/></NavLink>
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/myaccount'>My Account</NavLink></li>
            {this.state.user !== undefined && this.state.user.admin === true &&
              <li><NavLink to='/admin'><i class="fas fa-hammer"></i> Admin pages</NavLink></li>
            }
            <li><NavLink to='/login'><i class="fas fa-lock"></i> Login</NavLink></li>
            <li id="cart"><NavLink to='/cart'><i class="fas fa-shopping-cart"></i> {this.state.cartQtt}</NavLink></li>
        </ul>
      </nav>
    </div>
    );
  }
}