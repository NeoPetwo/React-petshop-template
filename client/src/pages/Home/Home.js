import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import './Home.scss';

//Importing images
import cat1 from '../../images/cat1.png';
import dog2 from '../../images/dog2.png';
import fish1 from '../../images/fish1.png';
import bird1 from '../../images/bird1.png';
import bird2 from '../../images/bird2.png';
import dog1 from '../../images/dog1.png';
import dogHouse from '../../images/dogHouse.png';
import petToy from '../../images/petToy.png';
import travellerCapri from '../../images/travellerCapri.png';
import birdHouse from '../../images/birdHouse.png';

export default class Home extends React.Component {
    componentDidMount() {
        const cookies = new Cookies();
        console.log('Na home ', cookies.get('loggedUser'));
    }

    render() {
  return (
  <div class="home">
    {/* <!-- Popular categories --> */}
    <div class="banner popular-list">
        <h2>Popular categories</h2>
        <div>
            <Link to="/catalog">
                <img src={cat1}/>
                <p>Cat</p>
            </Link>
            <Link to="/catalog">
                <img src={dog2}/>
                <p>Dogs</p>
            </Link>
            <Link to="/catalog">
                <img src={fish1}/>
                <p>Fish</p>
            </Link>
            <Link to="/catalog">
                <img src={bird1}/>
                <p>Birds</p>
            </Link>
        </div>
    </div>


    {/* <!-- Shop info --> */}
    <div class="banner" id="shop-info">
        <div class="info-description">
            <h2>Small Pets Supplies & Accessories</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.</p>
            <Link to="/catalog">
                <button class="button green-hover">SHOP NOW</button>
            </Link>
        </div>
        <img class="info-img" src={dog1}/>
    </div>


    {/* <!-- Popular products --> */}
    <div class="banner popular-list">
        <h2>Popular products</h2>
        <div>
            <Link to='/catalog/product'>
                <img src={dogHouse}/>
                <p>Dog houses</p>
            </Link>
            <Link to='/catalog/product'>
                <img src={petToy}/>
                <p>Toys</p>
            </Link>
            <Link to='/catalog/product'>
                <img src={birdHouse}/>
                <p>Bird houses</p>
            </Link>
            <Link to='/catalog/product'>
                <img src={travellerCapri}/>
                <p>Traveller Capri</p>
            </Link>
        </div>
    </div>


    {/* <!-- Bird Snacks & Crackers --> */}

    <div class="banner" id="bird-info">
        <img class="info-img" src={bird2}/>
        <div class="info-description">
            <h2>Bird Snacks & Crackers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Link to="/catalog">
                <button class="button yellow-hover">SHOP NOW</button>
            </Link>
        </div>
    </div>
    {/* <!-- End Bird Snacks & Crackers --> */}

    
  </div>

  );
    }
}