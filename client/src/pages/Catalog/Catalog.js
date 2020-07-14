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
        products: [],
        tags: []
    };
    this.fetchProdutcts();
    this.fecthTags();
  }

  fetchProdutcts = async () => {
    let res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/products`
    });
    this.setState({
        products: res.data
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
      console.log('oia', this.state.tags);
  }

  capitalizeFirstLetter = (str) => { 
    return str[0].toUpperCase() + str.slice(1); 
  } 

  render() {
  return (
    <div class="catalog">
        <div class="banner " id="catalog">
            <div class="row">
                <nav id="sidebar">
                    <ul>
                        <li class="title">Categories</li>
                        {this.state.tags.map((tag, index) => {
                            return (
                                <li class="category"><a href="">{this.capitalizeFirstLetter(tag)}</a></li>
                            )    
                        })}

                        <li class="title">Prices</li>
                        <li class="category"><a href="">De R$0,00 a R$9,99</a></li>
                        <li class="category"><a href="">De R$10,00 a R$49,99</a></li>
                        <li class="category"><a href="">De R$R$50,00 a R$99,99</a></li>
                        <li class="category"><a href="">De R$R$100,00 a R$599,99</a></li>
                        <li class="category"><a href="">De R$R$600,00 a R$999,99</a></li>

                    </ul>
                </nav>
                <div id="product-grid" class="column">
                    <h2>Products Catalog</h2>
                    <div class="columns is-multiline">
                        {this.state.products.map((product, index) => {
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