import React from 'react';
import axios from 'axios';

import './ProductCardInventory.scss';
import { SERVER_URL } from '../../variables';

export default class ProductCardInventory extends React.Component {
  handleDelete = async () => {
    await axios({
      method: 'DELETE',
      url: `${SERVER_URL}/products`,
      data: {
        id: `${this.props.product._id}`
      }
    });

    //Refresh page
    window.location.reload(false);
  }

  render() {
    return (
      <div class="product-card-inventory">
        <div className="product">
            <img src={`${this.props.product.img}`} />
            <div class="info">
                <p class="description">{this.props.product.title}</p>
                <p class="price">R$ {(this.props.product.price).toFixed(2)}</p>
                <div className="btns">
                  <a id="edit-btn"><i className="fa fa-pencil" aria-hidden="true" /> Edit</a>
                  <a onClick={this.handleDelete} id="delete-btn"><i className="fa fa-trash" aria-hidden="true" /> Delete</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}