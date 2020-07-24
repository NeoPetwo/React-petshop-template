// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const repository = require('../repositories/cartRepository');
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

exports.getByCustomerId = async (req, res, next) => {
  try {
    const data = await repository.getByCustomerId(req.params.customerid);
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
    items: req.body.items
  };

  try {
    await repository.create(data);
    res.status(201).send({
      message: "Pedido criado com sucesso"
    })
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: err
    })
  }
}

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
      message: "Pedido atualizado com sucesso"
    })
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    })
  }
}

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: "Pedido removido com sucesso"
    });
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    })
  }
}