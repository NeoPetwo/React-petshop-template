import React from 'react';
import profilePic from '../../images/profile-pic.png';
import './Register.css';

export default class Register extends React.Component {
  render() {
    return (
      // <!-- Sign up -->
	<div class="registerArea">
		{/* <!-- Nome, endereço, ID, telefone, foto, email e senha --> */}
		<form>
			<h2>Create your account and start using the platform</h2>
			<section>
				<h3>Name</h3>
				<input type="text" placeholder="Type here your name" name=""/>	
			</section>
			<section>
				<h3>Username</h3>
				<input type="text" placeholder="Type here your username" name=""/>								
			</section>
			<section class ="inputfile">
				<h3>Profile picture</h3>
				<input type="file" name = "file" id ="file"  />
				<label for="file" class= "btn" id = "file-btn">Choose a profile picture</label>
				<br/>
				<img src={profilePic}/>
			</section>
			<section>
				<h3>Picture</h3>
				<input type="file" id="services_pic" name="picture"/>
			</section>
			<section>
				<h3>Phone</h3>
				<input type="tel" placeholder="Type here your phone number" name=""/>								
			</section>
			<section>
				<h3>Email</h3>
				<input type="email" placeholder="Type here your email" name=""/>								
			</section>
			<section>
				<h3>Password</h3>
				<input type="password" placeholder="Type here your password" name=""/>	
			</section>
			
			<section>
				<h3>Confirm your password</h3>
				<input type="password" placeholder="Confirm your password" name=""/>
			</section>

			
			<section>
				<button class="btn" >Sign up</button>
			</section>
		</form>
	</div>
    );
  }
}