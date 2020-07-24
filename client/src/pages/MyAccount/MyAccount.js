// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { SERVER_URL } from '../../variables';

import { Link } from 'react-router-dom';

import './MyAccount.scss';

import neopets4 from '../../images/neopets-pngs-4.png';
import neopets6 from '../../images/neopets-pngs-6.png';
import neopets2 from '../../images/neopets-pngs-2.png';
import shoopingCart from '../../images/shopping_cart.png';
import neopets1 from '../../images/neopets-pngs-1.png';

export default class MyAccount extends React.Component {
constructor() {
    super();
    this.state = {
        user: ""
    }
    this.fetchUserInfo();
}

//pega as informações do usuário
fetchUserInfo = async () => {
    const cookies = new Cookies();
    const user = cookies.get('loggedUser');
    const res = await axios.get(`${SERVER_URL}/customers/${user.id}`);
    console.log(res.data);
    this.setState({
        user: res.data
    })
}

render() {
  return (
    <React.Fragment>
    <div id="user-info">
        <h1>Welcome, {this.state.user.name}</h1>
        <br/>
        <div className="details-row">
            <img src={`${this.state.user.img}`} />
            <div className="details-column">
                <p>Name: {this.state.user.name}</p>
                <br/>
                <p>Email: {this.state.user.email}</p>
                <br/>
                <p>Phone: {this.state.user.phone}</p>
            </div>
        </div>
    </div>
    <div class="wrapper">
        {/* <!-- Schedule time banner --> */}
        <Link class="catalog_link" to='/calendar'>
            <div id="section-time">
                <img src={neopets4} alt="cute animal picture"/>
                <p>Schedule time</p>
                <img src={neopets6} alt="cute animal picture"/>
            </div>
        </Link>
        <hr />
        {/* <!-- Product catalog banner --> */}
        <Link class="catalog_link" to="/catalog">
            <div id="section-catalog">
                <img src={neopets2} alt="dog holding shopping cart"/>
                <p>Check out our product catalog</p>
                <img id="shopping_cart" src={shoopingCart} alt="dog holding shopping cart"/>
            </div>
        </Link>
        <hr />

        {/* <!-- List and egister new pet--> */}
        <div id="section-double">
            <Link class="catalog_link" to='/addpet'>
                <div id="uActSect-newpet">
                    <p> Add new pet</p>
                </div>
            </Link>

            <Link class="catalog_link" to='/petdetails'>
                <div id="uActSect_petlisting">
                    <p>Your pets</p>
                </div>
            </Link>

        </div>
        <hr />
        {/* <!-- Edit your contact info--> */}
        <Link class="catalog_link" to="/changeaccountinfo">
            <div id="uActSect-editContact">
                <img src={neopets1} alt="dog holding shopping cart"/>
                <p>Change your contact info</p>
            </div>
        </Link>
    </div>
    </React.Fragment>  
  );
    }
}