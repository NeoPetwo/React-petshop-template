import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { SERVER_URL } from '../../variables';

import clipart from '../../images/clipart2940212.png';
import './Payment.scss';

export default class Payment extends React.Component {
    confirmPayment = async () => {
        const cookies = new Cookies();
        const user = cookies.get('loggedUser');
        console.log(this.props.match.params.type);
        if (this.props.match.params.type === 'product') {
            try {
                await axios({
                method: 'POST',
                url: `${SERVER_URL}/orders/buy`,
                data: {
                    customer: user.id
                }
                });
                alert('Payment confirmed');
                //Reload page to update cart number of navbar
                await window.location.reload(false);
                this.props.history.push('/myaccount');
            } catch(err) {
                console.log('Error submiting payment', err);
            }
        } else if (this.props.match.params.type === 'services') {
                await axios({
                    method: 'POST',
                    url: `${SERVER_URL}/services/buy`,
                    data: {
                        customer: user.id
                    }
                });
                alert('Services paid');
                this.props.history.push('/petdetails');    
        } else {
            alert('An error ocurred');
            this.props.history.push('/');
        }
    }

    render() {
        return (
        <div class="payment">
            <div class="img">
                <img src={clipart}/>
            </div>
            <div class="checkout">
                {/* <div class="checkout-header">
                    <h1 class="checkout-title">
                        Checkout
                        <span class="checkout-price">R$ 32,10</span>
                    </h1>
                </div> */}
                <p>
                    <input type="text" class="checkout-input checkout-name" placeholder="Your card name"/>
                    <input type="text" class="checkout-input checkout-exp" placeholder="MM"/>
                    <input type="text" class="checkout-input checkout-exp" placeholder="YY"/>

                </p>

                <p>
                    <input type="text" class="checkout-input checkout-card" placeholder="4111 1111 1111 1111"/>
                    <input type="text" class="checkout-input checkout-cvc" placeholder="CVC"/>
                </p>
                <p>
                    <button type="button" onClick={this.confirmPayment} class="checkout-btn">Confirm Payment</button>
                </p>
            </div>
        </div>
        );
  }
}