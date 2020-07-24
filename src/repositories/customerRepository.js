// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

//Pega todos os custumers
exports.getAll = async () => {
  const res = await Customer.find({});
  return res;
}

//Pega um custumer especifico pela id
exports.getById = async (id) => {
  const res = await Customer.findById(id, 'name username email phone img admin');
  return res;
}

//Apenas cria um novo customer e salva
exports.create = async (data) => {
  const customer = new Customer(data);
  await customer.save();
}

//Valida o login do custumer
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

//Atualiza as informações do custumer
exports.update = async (id, data) => {
  await Customer.findByIdAndUpdate(id, {
    $set: {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      img: data.img,
      admin: data.admin,
    },
  });
}

//Deleta o custumer
exports.delete = async (id) => {
  await Customer.findByIdAndRemove(id);
}