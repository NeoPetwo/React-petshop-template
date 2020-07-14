import React from 'react';
import axios from 'axios';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';

import ProductCard from '../../components/ProductCard/ProductCard';
import { SERVER_URL } from '../../variables';

export default class AdminRegisterServices extends React.Component {
  constructor() {
    super();
    this.state = {
        allproducts: []
    };
    this.fetchProducts();
  }

  fetchProducts = async () => {
    let res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/products`
    });

    this.setState({
        allproducts: res.data
    });
  }

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