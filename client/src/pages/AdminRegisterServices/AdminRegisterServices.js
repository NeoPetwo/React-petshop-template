import React from 'react';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';

export default class AdminRegisterServices extends React.Component {
  render() {
  return (
    <div class="admin-register-services">
      <div class="adm_registration">

        {/* <!-- New services form --> */}
        <div class="form-popup" id="services">
            <form action="#" class="form-container">
                <h1>Add a new service</h1>

                <label for="name">Name</label>
                <input type="text" placeholder="Enter name" name="name" required/>

                <label for="id">Id</label>
                <input type="text" placeholder="" name="id"/>

                <label for="services_pic">Picture:</label>
                <input type="file" id="services_pic" name="picture"/>

                <label for="description">Description</label>
                <input type="text" placeholder="" name="description" required/>

                <label for="price">Price</label>
                <input type="number" placeholder="$" name="price" required/>

                <button type="submit" class="btn">Submit</button>
                <button type="button" class="btn cancel" onclick="closeForm(4)">Cancel</button>
            </form>
        </div>

      </div>
    </div>
    
  );
  }
}