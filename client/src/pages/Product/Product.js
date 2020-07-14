import React from 'react';
import dogHouse from '../../images/dogHouse.png';
import './Product.scss';

export default class Product extends React.Component {
  render() {
    return (
            <div class="product">
                <div class="photoArea">
                    <img src={dogHouse}/>
                </div>
                <div class="paymentArea">
                    <h1>Doghouse model 2000</h1>
                    <section>

                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="price">
                            <p id="price">$1348.00</p>
                        </div>
                    </section>
                    <section>
                        <p id="qtt">QUANTITY</p>
                        <div class="qttBox">
                            <button class="qttBtn fas fa-minus"></button>
                            <p>2</p>
                            <button class="qttBtn fas fa-plus"></button>
                        </div>
                    </section>
                    <section>
                        <p><i class="fas fa-truck"></i>   Shipping details</p>
                        <input id="zip-code" placeholder="Zip code"/>
                    </section>
                    <button class="btn">Add to cart</button>
                </div>
            </div>
    );
  }
}