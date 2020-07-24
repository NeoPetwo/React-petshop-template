import React from 'react';
import axios from 'axios';

import './EarningsScreen.scss';
import '../AdminInventoryConsult/bulma-modified.scss';

import ProductCardEarnings from '../../components/ProductCardEarnings/ProductCardEarnings';
import { SERVER_URL } from '../../variables';

export default class EarningsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredOrders: [],
      filteredServices: [],
      totalProfit: 0
    };
    this.fetchOrders();
    this.fetchServices();
  }

  filterOrders = async (orders) => {
    let filteredOrders = [];
    orders.forEach((order, index) => {
      order.items.forEach((item, index) => {
        let indexPosition = this.indexOfObjAttr(filteredOrders, 'productid', item.product._id);
        if (indexPosition !== -1) {
          //If it's inside the array
          filteredOrders[indexPosition].quantity += item.quantity;
        } else {
          //If it isn't in the array yet
          let newFilteredOrder = {
            productid: item.product._id,
            quantity: item.quantity,
            title: item.product.title,
            price: item.product.price,
            img: item.product.img
          };
          filteredOrders.push(newFilteredOrder);
        }
      });
    });
    return filteredOrders;
  }

  filterServices = (services) => {
    let filteredServices = [];
    services
    .filter((service, index) => {
      if (service.paid === true) return service;
    })
    .forEach((service, index) => {
      console.log(index, service);
      let indexPosition = this.indexOfObjAttr(filteredServices, 'type', service.type);
      console.log(indexPosition);
      if (indexPosition !== -1) {
        filteredServices[indexPosition].quantity += 1;
        filteredServices[indexPosition].totalProfit += service.price;
      } else {
        let newFilteredService = {
          type: service.type,
          img: service.img,
          totalProfit: service.price,
          quantity: 1,
        };
        filteredServices.push(newFilteredService);
      }
    });
    return filteredServices;
  }

  fetchOrders = async () => {
    const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/orders`
    });

    const filteredOrders = await this.filterOrders(res.data);
    await this.setState({filteredOrders: filteredOrders});
    this.calculateTotalProfit();
  }

  fetchServices = async () => {
    const res = await axios({
      method: 'GET',
      url: `${SERVER_URL}/services`
    });
    console.log('all services', res.data);

    const filteredServices = await this.filterServices(res.data);
    console.log('filtered', filteredServices);
    await this.setState({filteredServices: filteredServices});
  }

  indexOfObjAttr = (array, attr, value) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1; //There is no such element
  }

  calculateTotalProfit = () => {
    let sum = 0;
    this.state.filteredOrders.forEach((item, index) => {
      sum += item.quantity * item.price
    });
    this.setState({
      totalProfit: sum
    });
  }

  render() {
  return (
    <div class="admin-inventory-consult">
      <div class="banner " id="catalog">
        <div id="product-grid" class="column">
            <h2>Total Products Sold: {this.state.filteredOrders.length}</h2>
            <div class="columns is-multiline">
                {this.state.filteredOrders.map((order, index) => {
                    return (
                        <div class="column is-one-fifth">
                            <ProductCardEarnings product={order} key={index} />
                        </div>
                    );
                })}
            </div>
            <h2>Total Services Sold: {this.state.filteredOrders.length}</h2>
            <div class="columns is-multiline">
                {this.state.filteredOrders.map((order, index) => {
                    return (
                        <div class="column is-one-fifth">
                            <ProductCardEarnings product={order} key={index} />
                        </div>
                    );
                })}
            </div>
            <h2>Total Profit: R$ {(this.state.totalProfit.toFixed(2))}</h2>
        </div>
      </div>
    </div>
  );
  }
}