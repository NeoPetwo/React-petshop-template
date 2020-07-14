import React from 'react';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';

export default class AdminRegisterServices extends React.Component {
  render() {
  return (
    <div class="admin-register-services">
      <div class="adm_registration">
        {/* <!-- Consult product form --> */}
        <div class="form-popup" id="consult_product">
            <form action="#" class="form-container">
                <h1>Consult</h1>

                <form id="product_listing">
                    <select name="product_listing">
                        <option value="">- Select a product -</option>
                    </select>
                </form>

                <button type="button" class="btn cancel" onclick="closeForm(4)">Cancel</button>
            </form>
        </div>
      </div>
    </div>
  );
  }
}