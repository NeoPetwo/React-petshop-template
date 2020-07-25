// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import axios from 'axios';

// CSS/SCSS
import './Catalog.scss';
import './Catalog2.scss';

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
  //Pega todas tags distinstas nos produtos
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

  //Filtra os produtos listados por categoria
  filterByCategory = (category) => {
    let filteredList = this.state.allproducts.filter((product) => {
        if (product.tags.includes(category)) return product;
    });
    this.setState({
        products2show: filteredList
    });
  }

  //Filtra os produtos listados por preço
  filterByPrice = (min, max) => {
    let filteredList = this.state.allproducts.filter((product) => {
        if (product.price >= min && product.price <= max) return product;
    });
    this.setState({
        products2show: filteredList
    });
  }

  //Reseta todos os filtros
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
                        <li class="category"><a onClick={() => this.filterByPrice(0, 9.99)}>R$0,00 to R$9,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(10, 49.99)}>R$10,00 to R$49,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(50, 99.99)}>R$50,00 to R$99,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(100, 599.99)}>R$100,00 to R$599,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(600, 999.99)}>R$600,00 to R$999,99</a></li>
                        <li class="category"><a onClick={() => this.filterByPrice(1000, Infinity)}>More than R$1000</a></li>

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