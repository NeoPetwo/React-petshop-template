import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

import petToy from '../../images/petToy.png'

export default class ProductCard extends React.Component {

  render() {
    return (
      <div class="product-card">
        <Link to='/catalog/product' class="product">
            <img src={petToy} />
            <div class="info">
                <p class="description">Bola de brinquedo</p>
                <p class="discount">
                    <span class="box bg-green">25% OFF </span>
                    <span class="price">R$ 19,99</span>
                </p>
                <p class="price">R$ 14,99</p>
            </div>
        </Link>
      </div>
    );
  }
}