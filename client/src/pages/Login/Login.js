import React from 'react';
import loginIlustration from '../../images/login-ilustration.png';
import './Login.css';
import { NavLink } from 'react-router-dom';

export default class Login extends React.Component {
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
                <input type="email" placeholder="Type here your email" name="" />
            </section>
            <section>
                <h3>Password</h3>
                <input type="password" placeholder="Type here your password" name="" />
            </section>
            <section>
                <button class="btn">Sign in</button>
            </section>
            <p>Don't have an account yet? <NavLink to='/register'>Register now</NavLink></p>
        </form> 
      </div>
    </div>
  );
  }
}