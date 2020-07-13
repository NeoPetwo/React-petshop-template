// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const repository = require('../repositories/orderRepository');
const guid = require('guid');

// Arquivo que lida com as requisições de acordo com seu tipo (GET, POST, PUT, DELETE)
// Este arquivo é importado em routes

// As funções que lidam com o banco de dados estão em repository

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    })
  } 
}

// Aqui cria-se um objeto data, que é enviado à função em repository.js a qual lida com o banco de dados
exports.post = async (req, res, next) => {
  let data = {
    customer: req.body.customer,
    number: guid.raw().substring(0, 6),
    items: req.body.items
  };

  try {
    await repository.create(data);
    res.status(201).send({
      message: "Pedido criado com sucesso"
    })
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    })
  }
}

