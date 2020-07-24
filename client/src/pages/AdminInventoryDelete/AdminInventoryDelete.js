// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import './AdminInventoryDelete.scss'

export default class AdminInventoryDelete extends React.Component {
  render() {
  return (
    <div class="admin-inventory-delete">
        <div class="adm_registration">
          {/* <!-- delete product form --> */}
          <div class="form-popup" id="delete_product">
              <form action="#" class="form-container">
                  <h1>Delete a product</h1>
                  <p>This action cannot be undone</p>
                  <form id="product_listing">
                      <select name="product_listing">
                          <option value="">- Select a product -</option>
                      </select>
                  </form>
                  <button type="submit" class="btn">Delete</button>
                  <button type="button" class="btn cancel" onclick="closeForm(3)">Cancel</button>
              </form>
          </div>
      </div>

    </div>
    
  );
  }
}