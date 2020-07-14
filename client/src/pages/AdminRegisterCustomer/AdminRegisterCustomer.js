import React from 'react';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';

export default class AdminRegisterCustomer extends React.Component {
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

                    <label for="name">Name</label>
                    <input type="text" placeholder="Enter Email" name="name" required/>

                    <label for="address">Adress</label>
                    <input type="text" placeholder="" name="name" required/>

                    <label for="id">Id</label>
                    <input type="text" placeholder="Enter Email" name="name"/>

                    <label for="phone">Phone</label>
                    <input type="number" placeholder="(DDD) 00000-0000" name="name" required/>

                    <label for="customer_pic">Picture:</label>
                    <input type="file" id="customer_pic" name="picture"/>

                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                    <label for="psw">Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit" class="btn">Create</button>
                    <button type="button" class="btn cancel" onclick="closeForm(2)">Cancel</button>
                </form>
            </div>
        </div>
      </div>
    </div>
    
  );
  }
}