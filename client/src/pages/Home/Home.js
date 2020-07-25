// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
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
            <p>Here you can buy all the kinds of supplies for you pet. We offer the best accessories of the market and the best quality.</p>
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
            <Link to='/catalog/product/dog-house'>
                <img src={dogHouse}/>
                <p>Dog houses</p>
            </Link>
            <Link to='/catalog/product/pet-toy'>
                <img src={petToy}/>
                <p>Toys</p>
            </Link>
            <Link to='/catalog/product/bird-house3'>
                <img src={birdHouse}/>
                <p>Bird houses</p>
            </Link>
            <Link to='/catalog/product/traveller-capri'>
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
            <p>You can find here a variety of flavours for you bird. Also, we offer 30 days warranty. We value the satisfaction of our clients.</p>
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