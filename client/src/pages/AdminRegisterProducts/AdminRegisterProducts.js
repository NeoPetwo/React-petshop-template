// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';

export default class AdminRegisterProducts extends React.Component {
  render() {
  return (
    <div class="admin-register-products">
      <div class="adm_registration">
        {/* <!-- New product form --> */}
        <div class="form-popup" id="product">
            <form action="#" class="form-container">
                <h1>New product</h1>

                <label for="name">Name</label>
                <input type="text" placeholder="Enter name" name="name" required/>

                <label for="id">Id</label>
                <input type="text" placeholder="" name="id"/>

                <label for="product_pic">Picture:</label>
                <input type="file" id="product_pic" name="picture"/>

                <label for="description">Description</label>
                <input type="text" placeholder="" name="description" required/>

                <label for="price">Price</label>
                <input type="number" placeholder="R$" name="price" required/>

                <label for="qnt">Initial quantity in stock</label>
                <input type="number" placeholder="R$" name="qnt" required/>

                <button type="submit" class="btn">Submit</button>
                <button type="button" class="btn cancel" onclick="closeForm(3)">Cancel</button>
            </form>
        </div>
      </div>
    </div>
    
  );
  }
}