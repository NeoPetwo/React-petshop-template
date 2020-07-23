import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './EarningsScreen.scss';
import '../AdminInventoryConsult/bulma-modified.scss';

import ProductCardInventory from '../../components/ProductCardInventory/ProductCardInventory';
import ProductCardEarnings from '../../components/ProductCardEarnings/ProductCardEarnings';
import { SERVER_URL } from '../../variables';

export default class EarningsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredOrders: []
    };
    this.fetchOrders();
  }

  filterOrders = async (orders) => {
    let filteredOrders = [];
    orders.forEach((order, index) => {
      order.items.forEach((item, index) => {
        let indexPosition = this.indexOfObjAttr(filteredOrders, 'productid', item.product._id);
        if (indexPosition !== -1) {
          filteredOrders[indexPosition].quantity += item.quantity;
        } else {
          let newFileteredOrder = {
            productid: item.product._id,
            quantity: item.quantity,
            title: item.product.title,
            price: item.product.price,
            img: item.product.img
          };
          filteredOrders.push(newFileteredOrder);
        }
      });
    });
    return filteredOrders;
  }

  fetchOrders = async () => {
    let res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/orders`
    });

    const filteredOrders = await this.filterOrders(res.data);
    this.setState({filteredOrders: filteredOrders});
  }

  indexOfObjAttr = (array, attr, value) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
  }

  render() {
  return (
    <div class="admin-inventory-consult">
      <div class="banner " id="catalog">
        <div id="product-grid" class="column">
            <h2>Products Catalog</h2>
            <div class="columns is-multiline">
                {this.state.filteredOrders.map((order, index) => {
                    // console.log(order);
                    return (
                        <div class="column is-one-quarter">
                            <ProductCardEarnings product={order} key={index} />
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