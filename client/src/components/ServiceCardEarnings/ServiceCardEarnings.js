import React from 'react';

import './ServiceCardEarnings.scss';

export default class ServiceCardEarnings extends React.Component {
  render() {
    return (
      <div class="service-card-earnings">
        <div className="product">
            <img src={`${this.props.service.img}`} />
            <div class="info">
                <p className="description">{this.props.service.type}</p>
                <p>Quantity sold: <span style={{color: 'blue'}} className="price">{this.props.service.quantity}</span></p>
                <br/>
                <p>Total Service profit: <span style={{color: 'green'}} className="price">R$ {(this.props.service.totalProfit).toFixed(2)}</span></p>
            </div>
        </div>
      </div>
    );
  }
}