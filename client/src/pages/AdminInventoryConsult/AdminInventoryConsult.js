import React from 'react';
import axios from 'axios';

import './AdminInventoryConsult.scss';
import './bulma-modified.scss';

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
    <div class="admin-inventory-consult">
      <div class="banner " id="catalog">
        <div id="product-grid" class="column">
            <h2>Products Catalog</h2>
            <div class="columns is-multiline">
                {this.state.allproducts.map((product, index) => {
                    return (
                        <div class="column is-one-third">
                            <ProductCard product={product} key={index} />
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
  }
}