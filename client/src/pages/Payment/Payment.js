import React from 'react';
import clipart from '../../images/clipart2940212.png';
import './Payment.scss';

export default class Payment extends React.Component {
  render() {
    return (
	<div class="payment">
        <div class="img">
            <img src={clipart}/>
        </div>
        <form class="checkout">
            <div class="checkout-header">
                <h1 class="checkout-title">
                    Checkout
                    <span class="checkout-price">$32,10</span>
                </h1>
            </div>
            <p>
                <input type="text" class="checkout-input checkout-name" placeholder="Your name"/>
                <input type="text" class="checkout-input checkout-exp" placeholder="MM"/>
                <input type="text" class="checkout-input checkout-exp" placeholder="YY"/>

            </p>

            <p>
                <input type="text" class="checkout-input checkout-card" placeholder="4111 1111 1111 1111"/>
                <input type="text" class="checkout-input checkout-cvc" placeholder="CVC"/>
            </p>
            <p>
                <input type="submit" value="Confirm payment" class="checkout-btn"/>
            </p>
        </form>
    </div>
    );
  }
}