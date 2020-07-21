import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';

import { SERVER_URL } from '../../variables';
import loginIlustration from '../../images/login-ilustration.png';
import './Login.css';

export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }
  handleSubmit = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${SERVER_URL}/customers/login`,
        data: {
          email: this.state.email,
          password: this.state.password, //Not worrying about security
        }
      });
      
      if (res.status === 200) {
        alert('You are logged in');  
        const cookies = new Cookies();
        cookies.set('loggedUser', res.data.user, { path: '/' }); // path: '/' makes de cookie available in all pages
        console.log(cookies.get('loggedUser'));
        window.location.reload(false);
      }  
    } catch (err) {
      console.log(err);
      alert('Failed to login');
    }
    const res = await axios({
      method: 'POST',
      url: `${SERVER_URL}/customers/login`,
      data: {
        email: this.state.email,
        password: this.state.password, //Not worrying about security
      }
		});
  }

  render() {
  return (
    <div class="loginArea">

      <div class="box">
        <div class="ilustration">
            <img src={loginIlustration} />
        </div>
        <form>
            <h1>NeoPetwo</h1>
            <section>
                <h3>Email</h3>
                <input type="email" placeholder="Type here your email" name="" onChange={this.handleChangeEmail}/>
            </section>
            <section>
                <h3>Password</h3>
                <input type="password" placeholder="Type here your password" name="" onChange={this.handleChangePassword}/>
            </section>
            <section>
                <button type="button" onClick={this.handleSubmit} class="btn">Sign in</button>
            </section>
            <p>Don't have an account yet? <NavLink to='/register'>Register now</NavLink></p>
        </form> 
      </div>
    </div>
  );
  }
}