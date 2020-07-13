// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async (data) => {

  //Essa função populate busca o id de customer e já coloca na response. E eu escolho qual campo vou retornar
  const res = await Order
    .find({})
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return res;
}

exports.create = async (data) => {
  const order = new Order(data);
  await order.save();
}