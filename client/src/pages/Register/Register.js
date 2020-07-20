import React from 'react';
import axios from 'axios';

import { SERVER_URL } from '../../variables';

import './Register.css';

export default class Register extends React.Component {
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

    //Images upload
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
        phone: this.state.phone
      }
		});
		
		// "name": "Joao",
		// "username": "john",
		// "email": "teste2@teste.com",
		// "password": "123",
		// "phone": "21987654321",
		// "img": "/img/birdHouse.png"

    if (res.status !== 201) {
      alert('Problem when submitting');  
    } else  {
      alert('Customer registered!');
      this.props.history.push('/login');
    }
	}
	
	cancelSubmission = () => {
    this.props.history.push('/');
  }

  render() {
    return (
	<div class="registerArea">
		{/* <!-- Nome, endereço, ID, telefone, foto, email e senha --> */}
		<form>
			<br/>
			<br/>
			<h2>Create your account and start using the platform</h2>

			<section>
				<h3>Name</h3>
				<input type="text" placeholder="Type here your name" name="" onChange={this.handleChangeName}/>	
			</section>

			<section>
				<h3>Username</h3>
				<input type="text" placeholder="Type here your username" name="" onChange={this.handleChangeusername}/>								
			</section>

			<section class ="inputfile">
				<h3>Profile picture</h3>
				<input type="file" name = "file" id ="file" onChange={this.onChangeImg}/>
				<label for="file" class= "btn" id = "file-btn">Choose a profile picture</label>
			</section>

			<section>
				<h3>Phone</h3>
				<input type="tel" placeholder="Type here your phone number" name="" onChange={this.handleChangePhone}/>								
			</section>

			<section>
				<h3>Email</h3>
				<input type="email" placeholder="Type here your email" name="" onChange={this.handleChangeEmail}/>								
			</section>

			<section>
				<h3>Password</h3>
				<input type="password" placeholder="Type here your password" name="" onChange={this.handleChangePassword}/>	
			</section>
			
			<section>
				<h3>Confirm your password</h3>
				<input type="password" placeholder="Confirm your password" name="" onChange={this.handleChangeConfPassword}/>
			</section>
			
			<section>
				<button type="button" onClick={this.handleSubmit} class="btn">Register</button>
				<button type="button" onClick={this.cancelSubmission} class="btn cancel">Cancel</button>
			</section>
		</form>
	</div>
    );
  }
}