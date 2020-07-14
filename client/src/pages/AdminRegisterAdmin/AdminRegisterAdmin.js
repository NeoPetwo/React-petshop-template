import React from 'react';
import './AdminRegisterAdmin.scss';

export default class AdminRegisterAdmin extends React.Component {
  render() {
  return (
    <div class="admin-register-admin">
      <div class="content-wrapper">
      {/* <!-- ADM Registration page--> */}

        <div class="adm_registration">
          {/* <!-- New admin form --> */}
          <div class="form-popup" id="admin">
              <form action="#" class="form-container">
                  <h1>New administrator</h1>

                  <label for="name">Name</label>
                  <input type="text" placeholder="Enter Email" name="name" required/>

                  <label for="id">Id</label>
                  <input type="text" placeholder="Enter Email" name="name" required/>

                  <label for="phone">Phone</label>
                  <input type="number" placeholder="(DDD) 00000-0000" name="name" required/>

                  <label for="adm_pic">Picture:</label>
                  <input type="file" id="adm_pic" name="picture"/>

                  <label for="email">Email</label>
                  <input type="text" placeholder="Enter Email" name="email" required/>
                  <label for="psw">Password</label>
                  <input type="password" placeholder="Enter Password" name="psw" required/>

                  <button type="submit" class="btn">Create</button>
                  <button type="button" class="btn cancel" onclick="closeForm(1)">Cancel</button>
              </form>
          </div>

        </div>

      </div>
    </div>
    
  );
  }
}