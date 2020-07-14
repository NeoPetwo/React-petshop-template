import React from 'react';
import '../AdminInventoryAdd/AdminInventoryAdd.scss';

export default class AdminInventoryAdd extends React.Component {
  render() {
  return (
    <div class="admin-inventory-add">
      <div class="content-wrapper">
        {/* <!-- New admin form --> */}
        <div class="adm_registration">
            <div class="form-popup" id="add_product">
                <form action="#" class="form-container">
                    <h1>Add to an existing product</h1>
                    <p>Want to register a new product instead? Check out the <a href="adm_actions.html">Register screen!</a>
                    </p>
                    <select name="product_listing">
                        <option value="">- Select a product -</option>
                    </select>
                    <div id="qntty">
                        <label id="product_quantity">Quantity</label>
                        <input type="number" placeholder="" name="quantity" required/>
                    </div>
                    <button type="submit" class="btn">Submit</button>
                    <button type="button" class="btn cancel">Cancel</button>
                </form>
            </div>
        </div>
      </div>
    </div>
    
  );
  }
}