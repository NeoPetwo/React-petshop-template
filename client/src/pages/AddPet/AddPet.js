import React from 'react';
import { Link } from 'react-router-dom';

import '../MyAccount/MyAccount.css';

import neopets4 from '../../images/neopets-pngs-4.png';
import neopets6 from '../../images/neopets-pngs-6.png';
import neopets2 from '../../images/neopets-pngs-2.png';
import shoopingCart from '../../images/shopping_cart.png';
import neopets1 from '../../images/neopets-pngs-1.png';

function AddPet() {
  return (
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
        <a class="catalog_link" href="product_catalog.html">
            <div id="section-catalog">
                <img src={neopets2} alt="dog holding shopping cart"/>
                <p>Check out our product catalog</p>
                <img id="shopping_cart" src={shoopingCart} alt="dog holding shopping cart"/>
            </div>
        </a>
        <hr />

        {/* <!-- List and register new pet--> */}
        <div id="section-double">
            <div class="catalog_link">
                <div id="uActSect-newpet">
                    <h1>New pet</h1>
                    <form action="#" class="form-container">

                        <div>
                            <label for="name">Name</label>
                            <input type="text" placeholder="Pet's name" name="name" required/>
                        </div>

                                <div>
                                    <label for="psw">Description</label>
                                    <input type="text" placeholder="Enter a brief description of your friend" name="desc"/>
                                </div>
                        <div>
                            <label for="customer_pic">Picture:</label>
                            <input type="file" id="customer_pic" name="picture"/>
                        </div>
                                    <div>
                                        <button type="submit" class="btn">Create</button>
                                        <button type="button" class="btn cancel">Cancel</button>
                                    </div>
                    </form>
                </div>
            </div>


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
  );
}

export default AddPet;
