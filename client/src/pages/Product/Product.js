// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import dogHouse from '../../images/dogHouse.png';
import './Product.scss';

import { SERVER_URL } from '../../variables';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productid: "",
            title: "",
            price: "",
            description: "",
            maxQuantity: "",
            img: "",
            slug: "",
            tags: "",
            qttSelected: 1,
            user: "",
            cart: "",
        };
        // const cookies = new Cookies();
        // const user = cookies.get('loggedUser');
        // console.log('aqui', user);
        // this.setState({user: user});
        this.fetchInfo();
    }

   
    componentDidMount() {
        const cookies = new Cookies();
        const user = cookies.get('loggedUser');
        console.log('aqui', user);
        this.setState({user: user});
    }
    //Requisição para pegar as informaçõs dos produtos
    fetchInfo = async () => {
        const { productslug } = this.props.match.params;
        let res = await axios({
            method: 'GET',
            url: `${SERVER_URL}/products/${productslug}`
        });
        if (res.data[0] === undefined || res.data[0] === null) {
            this.props.history.push('/error404')
            return;
        };
        
        this.setState({
            productid: res.data[0]._id,
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

    //Pega os items no carrinho
    fetchCart = async () => {
        try {
          const res = await axios({
            method: "GET",
            url: `${SERVER_URL}/cart/${this.state.user.id}`
          });
          this.setState({
            cart: res.data
          });
        } catch (err) {
          console.log(err);
        }
    }

    //Adiciona e atualiza OS itens no carrinho
    addToCart = async () => {
        // const cookies = new Cookies();
        // const user = cookies.get('loggedUser');
        // await this.setState({user: user});
        await this.fetchCart();

        //If the user do not have a cart yet
        if (this.state.cart === "") {
            try {
                console.log( this.state.user.id, this.state.qttSelected, this.state.productid);
                await axios({
                    method: 'POST',
                    url: `${SERVER_URL}/cart`,
                    data: {
                        customer: this.state.user.id,
                        status: 'active',
                        items: [{
                            quantity: this.state.qttSelected,
                            product: this.state.productid
                        }]
                    }
                });
            } catch (err) {
                console.log('Error on POST cart', err);
            }
        } else {
            let items = [];
            for (let i=0; i<this.state.cart.items.length; i++) {
                items.push({
                    quantity: this.state.cart.items[i].quantity,
                    product: this.state.cart.items[i].product._id
                });
            }
            
            //Adding new product
            items.push({
                quantity: this.state.qttSelected,
                product: this.state.productid
            });

            await axios({
                method: 'PUT',
                url: `${SERVER_URL}/cart/${this.state.cart._id}`,
                data: {
                    customer: this.state.user.id,
                    status: this.state.cart.status,
                    items: items
                }
            });
        }
        
        //Reload page to update cart number of navbar
        await window.location.reload(false);
        this.props.history.push('/cart');
    }

    render() {
        let addCartBtn;
        if (this.state.user !== "" && this.state.user !== undefined) {
            addCartBtn = 
                <React.Fragment>
                    <section>
                        <p id="qtt">QUANTITY</p>
                        <div class="qttBox">
                            <button onClick={this.removeItem} class="qttBtn fas fa-minus"></button>
                                <p>{this.state.qttSelected}</p>
                            <button onClick={this.addItem} class="qttBtn fas fa-plus"></button>
                        </div>
                    </section>
                    <button onClick={this.addToCart} class="btn">Add to cart</button>
                </React.Fragment>
        }

        return (
            <div class="product">
                <div class="photoArea">
                    <img src={`${this.state.img}`} />
                </div>
                <div class="paymentArea">
                    <h1>{this.state.title}</h1>
                    <h4>{this.state.description}</h4>
                    <section>

                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="price">
                            <p id="price">R$ {parseFloat(this.state.price).toFixed(2)}</p>
                        </div>
                    </section>
                    {/* If the user it's not logged */}
                    {addCartBtn}
                    {/* {(this.state.user !== "" || this.state.user !== undefined) &&
                    <section>
                        <p id="qtt">QUANTITY</p>
                        <div class="qttBox">
                            <button onClick={this.removeItem} class="qttBtn fas fa-minus"></button>
                                <p>{this.state.qttSelected}</p>
                            <button onClick={this.addItem} class="qttBtn fas fa-plus"></button>
                        </div>
                    </section>}
                    {(this.state.user !== "" || this.state.user !== undefined) && <button onClick={this.addToCart} class="btn">Add to cart</button>} */}
                </div>
            </div>
        );
    }
}