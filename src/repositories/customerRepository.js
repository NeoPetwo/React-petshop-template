// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

//Apenas cria um novo customer e salva
exports.create = async (data) => {
  const customer = new Customer(data);
  await customer.save();
}