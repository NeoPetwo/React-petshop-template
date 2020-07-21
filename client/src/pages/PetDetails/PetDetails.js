import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';

import poogle from '../../images/poogle.png';
import './PetDetails.scss';

import { SERVER_URL } from '../../variables';

export default class PetDetails extends React.Component {
    state = {
        pets: [], 
        selectedPet: {
            name: "Your pet name",
            description: "Your pet description",
            img: "img path"
        }
    }
    
    componentDidMount() {
        this.fetchUserPets();
    }

    fetchUserPets = async () => {
        const cookies = new Cookies();
        const user = cookies.get('loggedUser');
        const res = await axios({
            method: 'GET',
            url: `${SERVER_URL}/pets/userpets/${user.id}`
        });
        this.setState({
            pets: res.data
        });
    }

    handleSelect = (e) => {
        const index = e.target.value;
        this.setState({
            selectedPet: this.state.pets[index]
        });
    }

    render() {
        return (
            <div className="pet-details">
                <div id="wrapper">
                    <div id="main">
                        {/* <!-- Pet selection --> */}
                        <div class="spotlight">
                            <div class="content">
                                <header class="major">
                                    <h2>{this.state.selectedPet.name}</h2>
                                    {/* <h3>Status: Waiting for you!</h3> */}
                                </header>
                                <p>{this.state.selectedPet.description}</p>
                                <br/>
                                <select name="demo-category" id="demo-category" onChange={this.handleSelect}>
                                    <option value="0">- Select a Pet -</option>
                                    {this.state.pets.map((pet, index) => {
                                        return (
                                            <option key={index} value={index}>{pet.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <span class="image"><img src={`${this.state.selectedPet.img}`} alt=""/></span>
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
            </div>
        );
    }
}