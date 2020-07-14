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
            description: "",
            maxQuantity: "",
            img: "",
            slug: "",
            tags: "",
            qttSelected: 1,
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
            description: res.data[0].description,
            maxQuantity: res.data[0].quantity,
            img: res.data[0].img,
            slug: res.data[0].slug,
            tags: res.data[0].tags
        });
    }

    addItem = () => {
        console.log('max', this.state.maxQuantity);
        if (this.state.qttSelected === this.state.maxQuantity) return;

        this.setState({
            qttSelected: this.state.qttSelected += 1
        });
    }

    removeItem = () => {
        //Prevent negative numbers
        if (this.state.qttSelected === 1) return; 

        this.setState({
            qttSelected: this.state.qttSelected -= 1
        });
    }

    render() {
        return (
            <div class="product">
                <div class="photoArea">
                    <img src={`${this.state.img}`} />
                </div>
                <div class="paymentArea">
                    <h1>{this.state.title}</h1>
                    <section>

                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="price">
                            <p id="price">R$ {parseFloat(this.state.price).toFixed(2)}</p>
                        </div>
                    </section>
                    <section>
                        <p id="qtt">QUANTITY</p>
                        <div class="qttBox">
                            <button onClick={this.removeItem} class="qttBtn fas fa-minus"></button>
                                <p>{this.state.qttSelected}</p>
                            <button onClick={this.addItem} class="qttBtn fas fa-plus"></button>
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