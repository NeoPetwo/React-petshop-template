import React from 'react';
import axios from 'axios';
import dogHouse from '../../images/dogHouse.png';
import './Product.scss';

import { SERVER_URL } from '../../variables';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            description: ""
        };
        this.fetchInfo();
    }

    fetchInfo = async () => {
        const { productslug } = this.props.match.params;
        let res = await axios({
            method: 'GET',
            url: `${SERVER_URL}/products/${productslug}`
        });
        this.setState({
            title: res.data[0].title,
            price: res.data[0].price,
            description: res.data[0].description
        })
        console.log('axios', this.state);
    }

    render() {
        return (
            <div class="product">
                <div class="photoArea">
                    <img src={dogHouse}/>
                </div>
                <div class="paymentArea">
                    <h1>{this.state.title}</h1>
                    <section>

                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="price">
                            <p id="price">R$ {this.state.price}</p>
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