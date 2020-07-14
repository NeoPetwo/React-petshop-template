import React from 'react';
import { NavLink } from 'react-router-dom';
import poogle from '../../images/poogle.png';
import './PetDetails.css';

export default class PetDetails extends React.Component {
  render() {
    return (
			<div id="wrapper">
    <div id="main">
        {/* <!-- Pet selection --> */}
        <div class="spotlight">
            <div class="content">
                <header class="major">
                    <h2>Poogle</h2>
                    <h3>Status: Waiting for you!</h3>
                </header>
                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                    adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
                    Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
                <form method="post" action="#">
                    <select name="demo-category" id="demo-category">
                        <option value="">- Select Another Pet -</option>
                        <option value="1">Poogle</option>
                        <option value="1">Lupe</option>
                    </select>
                </form>
            </div>
            <span class="image"><img src={poogle} alt=""/></span>
        </div>
        <hr/>
        {/* <!-- Table prices --> */}
        <header>
            <h1>Prices and services</h1>
        </header>
        <div class="content-bottom">
            <table id="price-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Item One</td>
                    <td>Complete shower.</td>
                    <td>29.99</td>
                </tr>
                <tr>
                    <td>Item Two</td>
                    <td>Nail trimming.</td>
                    <td>19.99</td>
                </tr>
                <tr>
                    <td>Item Three</td>
                    <td>Bone toy.</td>
                    <td>14.99</td>
                </tr>
                <tr>
                    <td>Item Four</td>
                    <td>Collar.</td>
                    <td>9.99</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="2">Your total is:</td>
                    <td><b>75.00</b></td>
                </tr>
                </tfoot>
            </table>

            <NavLink id="pay_here" class="button_payment" to='/payment' >Pay Here</NavLink>

        </div>
    </div>
</div>
    );
  }
}