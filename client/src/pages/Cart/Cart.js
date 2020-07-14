import React from 'react';
import bird1 from '../../images/bird1.png';
import dog3 from '../../images/dog3.png';
import lizard1 from '../../images/lizard1.png';
import './Cart.scss';

export default class Cart extends React.Component {
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

			<div class="product">
				<div>
					<img src={bird1} />
					<p class="productTitle">Nice bird</p>
				</div>
				<div class="productQuantity">
					<div class="qttBox">
						<button class="qttBtn fas fa-minus"></button>
						<p>2</p>
						<button class="qttBtn fas fa-plus"></button>
					</div>
				</div>
				<div class="productPrice">$250.00</div>
			</div>

			<div class="product">
				<div>
					<img src={dog3} />
					<p class="productTitle">Weird dog</p>
				</div>
				<div class="productQuantity">
					<div class="qttBox">
						<button class="qttBtn fas fa-minus"></button>
						<p>1</p>
						<button class="qttBtn fas fa-plus"></button>
					</div>
				</div>
				<p class="productPrice">$99.00</p>
			</div>

			<div class="product">
				<div>
					<img src={lizard1} />
					<p class="productTitle">Rare lizard</p>
				</div>
				<div class="productQuantity">
					<div class="qttBox">
						<button class="qttBtn fas fa-minus"></button>
						<p>3</p>
						<button class="qttBtn fas fa-plus"></button>
					</div>
				</div>
				<p class="productPrice">$999.00</p>
			</div>

		</div>
		<div class="paymentArea">
			<h1>Order summary</h1>
			<hr class="divider2" />
			<div class="summary">
				<div class="items">
					<p>Items:</p>
					<p id="cartTotal">$1300.00</p>
				</div>
				<div class="shipping">
					<p>Shipping:</p>
					<p id="cartTotal">$48.00</p>
				</div>
				<hr class="divider3" />
				<div class="cartTotal">
					<p>Cart Total:</p>
					<p id="cartTotal">$1348.00</p>
				</div>
				<button class="btn" onclick="window.location.href = 'payment_page.html';" >Checkout</button>
			</div>
		</div>
	</div>
	</div>
	);
	}
}