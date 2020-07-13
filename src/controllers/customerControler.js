// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const repository = require('../repositories/customerRepository');

// Arquivo que lida com a requisiçao
// Este arquivo é importando em routes

// As funções que lidam com o banco de dados estão em repository

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({
      message: "Usuário criado com sucesso"
    })
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    })
  }
}

