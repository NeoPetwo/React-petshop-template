import React from 'react';
import axios from 'axios';

// CSS/SCSS
import './Catalog.scss';
import './bulma-modified.scss';

// Components
import ProductCard from '../../components/ProductCard/ProductCard';

import { SERVER_URL } from '../../variables';

export default class Catalog extends React.Component {
  constructor() {
    super();
    this.state = {
        products2show: [],
        allproducts: [],
        tags: []
    };
    this.fetchProducts();
    this.fecthTags();
  }

  //On the first load all products are presented
  fetchProducts = async () => {
    let res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/products`
    });

    this.setState({
        products2show: res.data,
        allproducts: res.data
    });
  }

  fecthTags = async () => {
      let res = await axios({
          method: 'GET',
          url: `${SERVER_URL}/products/alltags`
      });
      this.setState({
          tags: res.data
      });
  }

  capitalizeFirstLetter = (str) => { 
    return str[0].toUpperCase() + str.slice(1); 
  } 

  filterByCategory = (category) => {
    let filteredList = this.state.allproducts.filter((product) => {
        if (product.tags.includes(category)) return product;
    });
    this.setState({
        products2show: filteredList
    });
  }

  filterByPrice = (min, max) => {
    let filteredList = this.state.allproducts.filter((product) => {
        if (product.price >= min && product.price <= max) return product;
    });
    this.setState({
        products2show: filteredList
    });
  }

  resetFilter = () => {
    this.setState({
        products2show: this.state.allproducts
    });
  }

  render() {
  return (
    <div class="catalog">
        <div class="banner " id="catalog">
            <div class="row">
                <nav id="sidebar">
                    <ul>
                        <li class="title">Prices</li>
                        <li class="category"><a onClick={() => this.resetFilter()}>All prices</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(0, 9.99)}>De R$0,00 a R$9,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(10, 49.99)}>De R$10,00 a R$49,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(50, 99.99)}>De R$50,00 a R$99,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(100, 599.99)}>De R$100,00 a R$599,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(600, 999.99)}>De R$600,00 a R$999,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(1000, Infinity)}>Mais de R$1000</a></li>

                        <li class="title">Categories</li>
                        <li class="category"><a onClick={() => this.resetFilter()}>All categories</a></li>
                        {this.state.tags.map((tag, index) => {
                            return (
                                // <li key={index} class="category"><a onClick={() => this.filterByCategory(tag)}>{this.capitalizeFirstLetter(tag)}</a></li>
                                <li key={index} class="category"><a onClick={() => this.filterByCategory(tag)}>{tag}</a></li>
                            )    
                        })}
                    </ul>
                </nav>
                <div id="product-grid" class="column">
                    <h2>Products Catalog</h2>
                    <div class="columns is-multiline">
                        {this.state.products2show.map((product, index) => { 
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
    </div>
  );
  }
}