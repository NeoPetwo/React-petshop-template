import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { SERVER_URL } from '../../variables';

import bird1 from '../../images/bird1.png';
import dog3 from '../../images/dog3.png';
import lizard1 from '../../images/lizard1.png';
import './Cart.scss';

export default class Cart extends React.Component {
	constructor() {
    super();
    const cookies = new Cookies();
    let user = cookies.get('loggedUser');
    this.state = {
      user: user,
      cart: null
		}
		this.fetchCart();
	}
	
	componentDidUpdate() {
		//A cada alteração na quantidade de produtos, o carrinho é atualizado no BD, para caso o usuário feche a janela, as alterações tenham sido salvas
		if (this.state.cart !== null) this.updateCart();
	}

	cartExist = () => {
		if (this.state.cart === null || 
				this.state.cart?.items === null ||
				this.state.cart === undefined || 
				this.state.cart?.items === undefined
			) {
				return false;
			} else {
				return true;
			}
	}

	updateCart = async () => {
		if (!this.cartExist()) return;

		let items = [];

		for (let i=0; i<this.state.cart.items.length; i++) {
			items.push({
				quantity: this.state.cart.items[i].quantity,
				product: this.state.cart.items[i].product._id
			});
		}

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
	
	cartTotal = () => {
		if (!this.cartExist()) return 0;

		let sum = 0;
		let items = this.state.cart.items;
		for (let i=0; i<items?.length; i++) {
			sum += items[i].quantity*items[i].product.price;
		}
		return sum.toFixed(2);
	}

	onChangeQttMinus = (index) => {
		let newCart = this.state.cart;
		if (newCart.items[index].quantity === 0) return;
		newCart.items[index].quantity -= 1;
		this.setState({
			cart: newCart
		});
	}

	onChangeQttPlus = (index) => {
		let newCart = this.state.cart;
		newCart.items[index].quantity += 1;
		this.setState({
			cart: newCart
		});
	}

	removeItem = (index) => {
		let newCart = this.state.cart;
		newCart.items.splice(index, 1);
		this.setState({
			cart: newCart
		});

		//Reload page to update cart number of navbar
		window.location.reload(false);
	}

	checkout = () => {
		this.props.history.push('/payment/product');
	}

  render() {
  return (
	<div class="cart">
    <div class="cartArea">
		<div class="productsArea">
			<h1>My cart</h1>
			<hr class="divider1" />
			<div class="cartHeader">
				<p>Product</p>
				<p>Quantity</p>
				<p>Price</p>
			</div>

			{this.state.cart !== null && this.state?.cart?.items?.map((item, index) => {
				if (item.product === undefined) return; //Handling errors
				return (
					<div class="product">
						<div>
							<img src={`${item.product.img}`} />
							<p class="productTitle">{item.product.title}</p>
						</div>
						<div class="productQuantity">
							<div class="qttBox">
								<button onClick={() => this.onChangeQttMinus(index)} class="qttBtn fas fa-minus"></button>
								<p>{item.quantity}</p>
								<button onClick={() => this.onChangeQttPlus(index)} class="qttBtn fas fa-plus"></button>
								<button onClick={() => this.removeItem(index)} class="qttBtn fas fa-trash"></button>
							</div>
						</div>
						<div class="productPrice">R$ {(item.product.price * item.quantity).toFixed(2)}</div>
					</div>
				);
			})}
		</div>
		<div class="paymentArea">
			<h1>Order summary</h1>
			<hr class="divider2" />
			<div class="summary">
				
				<div class="cartTotal">
					<p>Cart Total:</p>
					<p id="cartTotal">R$ {this.cartTotal()}</p>
				</div>
				<button class="btn" onClick={this.checkout} >Checkout</button>
			</div>
		</div>
	</div>
	</div>
	);
	}
}

// cada mexida no qtt de um item é um put, ou coloque no componentDidUpdate pra a cada mudança mudar no BD também