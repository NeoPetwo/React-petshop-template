import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default class ProductCard extends React.Component {
  render() {
    return (
      <div class="product-card">
        <Link to={`/catalog/product/${this.props.product.slug}`} class="product">
            <img src={`${this.props.product.img}`} />
            <div class="info">
                <p class="description">{this.props.product.title}</p>
                <p class="discount">
                    <span id="box" class="box bg-green">25% OFF </span>
                    {/* Blackfriday strategy */}
                    <span class="price">R$ {(1.25*this.props.product.price).toFixed(2)}</span>
                </p>
                <p class="price">R$ {(this.props.product.price).toFixed(2)}</p>
            </div>
        </Link>
      </div>
    );
  }
}