// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');


//Pega todos os produtos que estão em carrinhos
exports.get = async (data) => {
  //Essa função populate busca o id de customer e já coloca na response. E eu escolho qual campo vou retornar
  const res = await Cart
    .find({})
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return res;
}

//Pega os produtos que estão nos carrinhos de um usuário específico
exports.getByCustomerId = async (customerid) => {
  const res = await Cart
    .findOne({customer: customerid, status: 'active'})
    .populate('customer', 'name')
    .populate('items.product', 'title img price quantity quantitySold slug'); 
  return res;
}

//Cria um novo carrinho
exports.create = async (data) => {
  const cart = new Cart(data);
  await cart.save();
}

//Atualiza os dados de um carrinho de um usuário
exports.update = async (id, data) => {
  await Cart.findByIdAndUpdate(id, {
    $set: {
      customer: data.customer,
      status: data.status,
      items: data.items
    }
  });
}

//Deleta um carrinho
exports.delete = async (id) => {
  await Cart.findByIdAndDelete(id);
}