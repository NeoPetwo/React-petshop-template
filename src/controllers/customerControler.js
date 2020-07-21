// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const repository = require('../repositories/customerRepository');

// Arquivo que lida com a requisiçao
// Este arquivo é importado em routes

// As funções que lidam com o banco de dados estão em repository

exports.getAll = async (req, res, next) => {
  try {
    let res1 = await repository.getAll();
    console.log(res1);
    res.status(200).send(res1);
  } catch (err) {
    res.status(500).send({
      message: "Failed to return customers"
    });
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({
      message: "User created successfully"
    })
  } catch (err) {
    res.status(500).send({
      message: "Failed to create user"
    });
  }
}

exports.login = async (req, res, next) => {
  try {
    let user = await repository.login(req.body);
    if (user !== null) {
      res.status(200).send({
        message: "Logged in"
      })
    } else  {
      res.status(500).send({
        message: "Failed to login"
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Failed to create user"
    });
  }
}

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
        message: 'Produto removido com louvor!!'
      });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}