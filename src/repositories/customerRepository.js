// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.getAll = async () => {
  const res = await Customer.find({});
  return res;
}

//Apenas cria um novo customer e salva
exports.create = async (data) => {
  const customer = new Customer(data);
  await customer.save();
}

exports.login = async (data) => {
  const res = await Customer.find({
    email: data.email
  });
  if (res[0].password === data.password) {
    return res[0];
  } else {
    return null;
  }
}

exports.delete = async (id) => {
  await Customer.findByIdAndRemove(id);
}