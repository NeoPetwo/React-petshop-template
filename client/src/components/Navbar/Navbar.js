// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083

import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NavLink, Link } from 'react-router-dom';

import { SERVER_URL } from '../../variables';

import './Navbar.scss';

// Importing logo image
import logo from '../../images/logo2.png';

export default class Navbar extends React.Component {
  constructor() {
    super();
    const cookies = new Cookies();
    let user = cookies.get('loggedUser');
    console.log('Logged user', user);
    this.state = {
      user: user,
      cartQtt: 0
    }
    this.fetchCart();
  }


  //Pega a quantidade de produtos no carrinho do servidor
  fetchCart = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${SERVER_URL}/cart/${this.state.user.id}`
      });
      this.setState({
        cartQtt: res.data.items === undefined ? 0 : res.data.items.length
      });
    } catch (err) {
      console.log('Error on GETing cart', err);
    }
  }

  //lida com o logout
  logout = () => {
    const cookies = new Cookies();
    cookies.remove('loggedUser', { path: '/' });

    //Change page and reload
    // this.props.history.push('/');
    // window.open("/");
    window.location = '/';
    // window.location.reload(false);
  }

  render() {

    //se estiver logado, coloca a opção de login, caso o contrário coloca a opção de logout
    let loginLogoutBtn;
    if (this.state.user === undefined) {
      loginLogoutBtn =  <li><NavLink to='/login'><i class="fas fa-lock"></i> Login</NavLink></li>
    } else {
      loginLogoutBtn = <li><Link to="/" onClick={this.logout}><i class="fas fa-lock"></i> Logout</Link></li>
    }
    

    return (
    <div class="navbar">
      <nav id="home-bar">
        <NavLink id="logo" to='/'><img src={logo}/></NavLink>
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            {this.state.user !== undefined && <li><NavLink to='/myaccount'>My Account</NavLink></li>}
            {this.state.user !== undefined && this.state.user.admin === true &&
              <React.Fragment>
                <li><NavLink to='/earnings'><i class="fa fa-money"></i> Earnings</NavLink></li>
                <li><NavLink to='/admin/inventory/consult'><i class="fas fa-hammer"></i> Admin actions</NavLink></li>
              </React.Fragment>
            }
            {/* <li><NavLink to='/login'><i class="fas fa-lock"></i> Login</NavLink></li> */}
            {loginLogoutBtn}
            <li id="cart"><NavLink to='/cart'><i class="fas fa-shopping-cart"></i> {this.state.cartQtt}</NavLink></li>
        </ul>
      </nav>
    </div>
    );
  }
}