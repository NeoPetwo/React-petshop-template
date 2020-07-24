// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083

import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

import { SERVER_URL } from '../../variables';

import '../MyAccount/MyAccount.scss';

import neopets4 from '../../images/neopets-pngs-4.png';
import neopets6 from '../../images/neopets-pngs-6.png';
import neopets2 from '../../images/neopets-pngs-2.png';
import shoopingCart from '../../images/shopping_cart.png';
import neopets1 from '../../images/neopets-pngs-1.png';

export default class AddPet extends React.Component {
    constructor() {
        super();
        const cookies = new Cookies();
        let user = cookies.get('loggedUser');

        this.state = {
            owner: user.id,
            name: "",
            race: "",
            description: "",
            selectedImg: null // Image file
        }
    }

    uploadImg =  async () => {
        if (this.state.selectedImg === null) {
            alert('Select an image');
            // e.persist();
            // e.preventDefault();
            return false;
          }
      
          //Image upload
          let data = new FormData(); 
          data.append('file', this.state.selectedImg);
          let res1 = await axios.post(`${SERVER_URL}/pets/uploadimg`, data);
          if (res1.status !== 201) {
            alert('Error uploading the image');
            // e.persist();
            // e.preventDefault();
            return false;
          }

          return true;
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    handleChangeDescription = (event) => {
        this.setState({description: event.target.value});
    }
    handleChangeRace = (event) => {
        this.setState({race: event.target.value});
    }
    onChangeImg = (event) =>{
        console.log(event.target.files[0]);
        this.setState({
          selectedImg: event.target.files[0]
        });
        }

    handleSubmit = async () => {
        console.log({
            owner: this.state.owner,
            race: this.state.race,
            name: this.state.name,
            description: this.state.description,
            img: `/img/${this.state.selectedImg.name}`,
        });
        let uploadOk = await this.uploadImg();
        if (uploadOk === false) return;

        let res = await axios({
            method: 'POST',
            url: `${SERVER_URL}/pets`,
            data: {
                owner: this.state.owner,
                race: this.state.race,
                name: this.state.name,
                description: this.state.description,
                img: `/img/${this.state.selectedImg.name}`,
            }
        });
            
        if (res.status !== 201) {
            alert('Problem when submitting');  
        } else  {
            alert('Pet registered!');
            this.props.history.push('/myaccount');
        }
    }

    cancelSubmission = () => {
        this.props.history.push('/myaccount');
    }

    render() {
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
                            {/* <h1>New pet</h1> */}
                            <div class="form-container">

                                <div>
                                    <label for="name">Name</label>
                                    <input type="text" placeholder="Pet's name" name="name" onChange={this.handleChangeName}/>
                                </div>
                                <div>
                                    <label for="race">Race</label>
                                    <input type="text" placeholder="Enter the race of your pet" name="race" onChange={this.handleChangeRace}/>
                                </div>
                                <div>
                                    <label for="">Description</label>
                                    <input type="text" placeholder="Enter a brief description of your friend" name="desc" onChange={this.handleChangeDescription}/>
                                </div>
                                <div>
                                    <label for="customer_pic">Picture:</label>
                                    <input type="file" id="customer_pic" name="picture" onChange={this.onChangeImg}/>
                                </div>
                                <div>
                                    <button type="button" onClick={this.handleSubmit} class="btn">Add Pet</button>
                                    <button type="button" onClick={this.cancelSubmission} class="btn cancel">Cancel</button>
                                </div>
                            </div>
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
}