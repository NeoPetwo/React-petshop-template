// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NavLink, Link } from 'react-router-dom';

import '../MyAccount/MyAccount.scss';

import neopets4 from '../../images/neopets-pngs-4.png';
import neopets6 from '../../images/neopets-pngs-6.png';
import neopets2 from '../../images/neopets-pngs-2.png';
import shoopingCart from '../../images/shopping_cart.png';
import neopets1 from '../../images/neopets-pngs-1.png';

import { SERVER_URL } from '../../variables';

export default class ChangeAccountInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            username: "",
            phone: "",
            email: "",
            admin: "",
            address: "",
            img: "", //Image path
            selectdImg: null //Image file
        }
        this.fetchUserInfo();
    }
    //Requisição para pegar as informações do usuário logado
    fetchUserInfo = async () => {
        const cookies = new Cookies();
        const user = cookies.get('loggedUser');
        const userInfo = await axios({
            method: 'GET',
            url: `${SERVER_URL}/customers/${user.id}`
        });
        console.log(userInfo.data);
        this.setState({
            id: userInfo.data._id,
            name: userInfo.data.name,
            username: userInfo.data.username,
            phone: userInfo.data.phone,
            email: userInfo.data.email,
            admin: userInfo.data.admin,
            img: userInfo.data.img,
            address: userInfo.data.address,
        });
    }

    handleChangeName = (e) => {
        this.setState({name: e.target.value});
    }
    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    }
    handleChangeAddress = (e) => {
        this.setState({address: e.target.value});
    }
    handleChangePhone = (e) => {
        this.setState({phone: e.target.value});
    }
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }
    onChangeImg = (e) =>{
        console.log(e.target.files[0]);
        this.setState({
          selectedImg: e.target.files[0],
          img: e.target.files[0].name
        });
    }


    //Requisição de update das informações nas contas
    handleSubmit = async (e) => {
        if (this.state.selectedImg !== null) {
            //Image upload
            let data = new FormData(); 
            data.append('file', this.state.selectedImg);
            let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
            if (res1.status !== 201) {
            alert('Error uploading the image');
            e.persist(); // e.preventDefault();
            return false;
            }
        }

        //Define img path
        let img = null;
        if (this.state.selectedImg === null || this.state.selectedImg === undefined) {
            img = this.state.img;
        } else {
            img = `/img/${this.state.selectedImg.name}`;
        }
    
        let res = await axios({
          method: 'PUT',
          url: `${SERVER_URL}/customers/${this.state.id}`,
          data: {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            img:  img,
            admin: this.state.admin
          }
        });
        e.persist(); // e.preventDefault();
    
        if (res.status !== 200) {
          alert('Problem when submitting');
          console.log(res);  
        } else  {
          alert('Info updated!');
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
                        <input type="text" placeholder="Enter Email" name="name" value={this.state.name} onChange={this.handleChangeName}/>
                    </div>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" placeholder="Enter you username" name="name" value={this.state.username} onChange={this.handleChangeUsername}/>
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <input type="text" placeholder="Enter your address" name="name" value={this.state.address} onChange={this.handleChangeAddress}/>
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <input type="number" placeholder="(DDD) 00000-0000" name="name" value={this.state.phone} onChange={this.handleChangePhone}/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                    </div>
                    <div>
                        <label for="customer_pic">Picture:</label>
                        <input type="file" id="customer_pic" name="picture" onChange={this.onChangeImg}/>
                    </div> 
                    <div>
                        <button type="button" class="btn" onClick={this.handleSubmit}>Update</button>
                        <button type="button" class="btn cancel" onClick={this.cancelSubmission} >Cancel</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
  );
    }
}
