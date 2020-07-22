import React from 'react';
import axios from 'axios';

import { SERVER_URL } from '../../variables';

import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';

export default class AdminRegisterCustomer extends React.Component {
  state = {
		name: "",
		username: "",
		email: "",
		password: "",
		confPassword: "",
		phone: "",
		img: "", //Image path
		selectedImg: null // Image file
	}

	handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }
  handleChangeusername = (event) => {
    this.setState({username: event.target.value});
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
	}
	handleChangeConfPassword = (event) => {
    this.setState({confPassword: event.target.value});
  }
  handleChangePhone = (event) => {
    this.setState({phone: event.target.value});
	}
	onChangeImg = (event) =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedImg: event.target.files[0]
    });
	}
	
	handleSubmit = async (e) => {
    if (this.state.selectedImg === null) {
      alert('Select an image');
      e.persist();
      // e.preventDefault();
      return false;
    }

    //Image upload
    let data = new FormData(); 
    data.append('file', this.state.selectedImg);
    let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
    if (res1.status !== 201) {
      alert('Error uploading the image');
      e.persist();
      // e.preventDefault();
      return false;
    }

    let res = await axios({
      method: 'POST',
      url: `${SERVER_URL}/customers`,
      data: {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password, //Not worrying about security
        img: `/img/${this.state.selectedImg.name}`,
				phone: this.state.phone,
				admin: false //This registration are not for admins
      }
		});
		
    if (res.status !== 201) {
      alert('Problem when submitting');  
    } else  {
      alert('Customer registered!');
      this.props.history.push('/');
    }
	}
	
	cancelSubmission = () => {
    this.props.history.push('/');
  }

  render() {
  return (
    <div class="admin-register-customer">
      <div class="content-wrapper">
        {/* <!-- ADM Registration page--> */}
        <div class="adm_registration">
            {/* <!-- New customer form --> */}
            <div class="form-popup" id="customer">
                <form action="#" class="form-container">
                  <h1>New customer</h1>

                  <label>Name</label>
                  <input type="text" placeholder="Type here your name" name="" onChange={this.handleChangeName}/>	

                  <label>Username</label>
                  <input type="text" placeholder="Type here your username" name="" onChange={this.handleChangeusername}/>								

                  <label>Profile picture</label>
                  <input type="file" name="file" id ="file" onChange={this.onChangeImg}/>
                  {/* <label for="file" class= "btn" id = "file-btn" onChange={this.onChangeImg}>Choose a profile picture</label> */}

                  <label>Phone</label>
                  <input type="tel" placeholder="Type here your phone number" name="" onChange={this.handleChangePhone}/>								

                  <label>Email</label>
                  <input type="email" placeholder="Type here your email" name="" onChange={this.handleChangeEmail}/>								

                  <label>Password</label>
                  <input type="password" placeholder="Type here your password" name="" onChange={this.handleChangePassword}/>	
                
                  <label>Confirm your password</label>
                  <input type="password" placeholder="Confirm your password" name="" onChange={this.handleChangeConfPassword}/>
                
                  <button type="button" onClick={this.handleSubmit} class="btn">Register</button>
                  <button type="button" onClick={this.cancelSubmission} class="btn cancel">Cancel</button>
                </form>
            </div>
        </div>
      </div>
    </div>
    
  );
  }
}