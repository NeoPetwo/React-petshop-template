import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../MyAccount/MyAccount.css';

import neopets4 from '../../images/neopets-pngs-4.png';
import neopets6 from '../../images/neopets-pngs-6.png';
import neopets2 from '../../images/neopets-pngs-2.png';
import shoopingCart from '../../images/shopping_cart.png';
import neopets1 from '../../images/neopets-pngs-1.png';

export default class ChangeAccountInfo extends React.Component {
  render() {
    return (
    <div class="wrapper">
        {/* <!-- Schedule time banner --> */}
        <NavLink class="catalog_link" to='/calendar'>
            <div id="section-time">
                <img src={neopets4} alt="cute animal picture"/>
                <p>Schedule time</p>
                <img src={neopets6} alt="cute animal picture"/>
            </div>
        </NavLink>
        <hr />
        {/* <!-- Product catalog banner --> */}
        <a class="catalog_link" href="product_catalog.html">
            <div id="section-catalog">
                <img src={neopets2} alt="dog holding shopping cart"/>
                <p>Check out our product catalog</p>
                <img id="shopping_cart" src={shoopingCart} alt="dog holding shopping cart"/>
            </div>
        </a>
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
        <div class="catalog_link" href="#">
            <h1>Update your info</h1>

            <div id="uActSect-editContact">
                <form action="#" class="form-container">
                    <div>
                        <label for="name">Name</label>
                        <input type="text" placeholder="Enter Email" name="name" required/>
                    </div>
                    <div>
                        <label for="address">Adress</label>
                        <input type="text" placeholder="" name="name" required/>
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <input type="number" placeholder="(DDD) 00000-0000" name="name" required/>
                    </div>
                    <div>
                        <label for="customer_pic">Picture:</label>
                        <input type="file" id="customer_pic" name="picture"/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" required/>
                    </div>
                    <div>
                        <button type="submit" class="btn">Create</button>
                        <button type="button" class="btn cancel" onclick="closeForm(2)">Cancel</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
  );
    }
}
