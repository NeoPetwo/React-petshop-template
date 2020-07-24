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
    let users = await repository.getAll();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: "Failed to return customers",
      error: err
    });
  }
}

exports.getById = async (req, res, next) => {
  try {
    let user = await repository.getById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({
      message: "Failed to return customer",
      error: err
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
      message: "Failed to create user",
      error: err
    });
  }
}

exports.login = async (req, res, next) => {
  try {
    let user = await repository.login(req.body);
    if (user !== null) {
      res.status(200).send({
        user: {
          id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
          admin: user.admin,
          img: user.img,
          phone: user.phone
        }
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

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
        message: 'Usuário atualizado com louvor!!'
      });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
        message: 'Usuário removido com louvor!!'
      });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}