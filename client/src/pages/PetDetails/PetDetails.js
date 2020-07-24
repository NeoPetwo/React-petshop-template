// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';

import './PetDetails.scss';

import { SERVER_URL } from '../../variables';

export default class PetDetails extends React.Component {
    state = {
        pets: [], 
        selectedPet: {
            name: "Your pet name",
            race: 'Your pet race',
            description: "Your pet description",
            img: "img path",
            id: 'id',
            age: 'Your pet age'
        },
        petServices: []
    }

    compare = (a, b) => {
        // if (a is less than b by some ordering criterion) {
        if (a.startHour < b.startHour) {
          return -1;
        }
        // if (a is greater than b by the ordering criterion) {
        if (a.startHour > b.startHour) {
          return 1;
        }
        // a must be equal to b
        return 0;
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
        console.log('user pets', res.data);
        this.setState({
            pets: res.data
        });
    }

    fetchSelectedPetServices = async () => {
        console.log('_id', this.state.selectedPet._id);
        const res = await axios({
            method: 'GET',
            url: `${SERVER_URL}/services/petservices/${this.state.selectedPet._id}`
        });
        res.data.sort(this.compare);
        this.setState({
            petServices: res.data
        })
        console.log('pet services', res.data);
    }

    handleSelect = async (e) => {
        const index = e.target.value;
        await this.setState({
            selectedPet: this.state.pets[index]
        });
        this.fetchSelectedPetServices();
    }

    render() {
        const yes = <span id="yesTable">Yes</span>;
        const no = <span id="noTable">No</span>;

        return (
            <div className="pet-details">
                <div id="wrapper">
                    <div id="main">
                        {/* <!-- Pet selection --> */}
                        <div class="spotlight">
                            <div class="content">
                                <header class="major">
                                    <h2>{this.state.selectedPet.name}</h2>
                                </header>
                                <p>Race: {this.state.selectedPet.race}</p>
                                <br/>
                                <p>Age: {this.state.selectedPet.age}</p>
                                <br/>
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
                            <h1>Services scheduled</h1>
                        </header>
                        <div class="content-bottom">
                            <table id="price-table">
                                <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>When</th>
                                    <th>Paid</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.petServices.map((service, index) => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td>{service.type}</td>
                                                <td>R$ {service.price}</td>
                                                <td>{service.startHour}-{service.endingHour} - {service.date}</td>
                                                <td>{service.paid === true ? yes : no}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                                </tbody>
                                {/* <tfoot>
                                <tr>
                                    <td colspan="2">Your total is:</td>
                                    <td><b>75.00</b></td>
                                </tr>
                                </tfoot> */}
                            </table>

                            <NavLink id="pay_here" class="button_payment" to='/payment/services' >Pay Here</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}