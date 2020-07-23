// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');

exports.get = async (data) => {
  //Essa função populate busca o id de customer e já coloca na response. E eu escolho qual campo vou retornar
  const res = await Cart
    .find({})
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return res;
}

exports.getByCustomerId = async (customerid) => {
  const res = await Cart
    .findOne({customer: customerid, status: 'active'})
    .populate('customer', 'name')
    .populate('items.product', 'title img price quantity quantitySold slug'); 
  return res;
}

exports.create = async (data) => {
  const cart = new Cart(data);
  await cart.save();
}

exports.update = async (id, data) => {
  await Cart.findByIdAndUpdate(id, {
    $set: {
      customer: data.customer,
      status: data.status,
      items: data.items
    }
  });
}

exports.delete = async (id) => {
  await Cart.findByIdAndDelete(id);
}