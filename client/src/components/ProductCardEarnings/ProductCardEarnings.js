import React from 'react';

import './ProductCardEarnings.scss';

export default class ProductCardEarnings extends React.Component {
  render() {
    return (
      <div class="product-card-inventory">
        <div className="product">
            <img src={`${this.props.product.img}`} />
            <div class="info">
                <p className="description">{this.props.product.title}</p>
                <p>Price: <span style={{color: 'blue'}} className="price">R$ {(this.props.product.price).toFixed(2)}</span></p>
                <br/>
                <p>Quantity sold: <span style={{color: 'blue'}} className="price">{this.props.product.quantity}</span></p>
                <br/>
                <p>Total Product profit: <span style={{color: 'green'}} className="price">R$ {(this.props.product.price * this.props.product.quantity).toFixed(2)}</span></p>
            </div>
        </div>
      </div>
    );
  }
}