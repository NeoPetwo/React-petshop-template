import React from 'react';

import './ProductCardEarnings.scss';

export default class ProductCardEarnings extends React.Component {
  render() {
    console.log(this.props.product);
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
                <p>Product profit: <span style={{color: 'green'}} className="price">R$ {(this.props.product.price * this.props.product.quantity).toFixed(2)}</span></p>
                {/* <div className="btns">
                  <div to={`/admin`} id="edit-btn"><i className="fa fa-pencil" aria-hidden="true" /> Edit</div>
                  <div id="delete-btn"><i className="fa fa-trash" aria-hidden="true" /> Delete</div>
                </div> */}
            </div>
        </div>
      </div>
    );
  }
}