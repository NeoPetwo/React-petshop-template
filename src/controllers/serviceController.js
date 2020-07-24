// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const repository = require('../repositories/serviceRepository');

// Arquivo que lida com a requisiçao
// Este arquivo é importando em routes

// As funções que lidam com o banco de dados estão em repository

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.getTypes = async (req, res, next) => {
  try{
    const data = await repository.getTypes();
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.getBySlug = async (req, res, next) => {
  try {
    
    const data = await repository.getBySlug(req.params.slug);
    
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.getById = async (req, res, next) => {
  try {
    const data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.getByUserId = async (req, res, next) => {
  try {
    const data = await repository.getByUserId(req.params.userid);
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.getByPetId = async (req, res, next) => {
  try {
    const data = await repository.getByPetId(req.params.petid);
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.post = async (req, res, next) => {
  try {
    const data = await repository.create(req.body);
    res.status(201).send({
      message: 'Serviço Cadastrado!!!!'
    });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}

exports.buy = async (req, res, next) => {
  try {
    const services = await repository.getByUserId(req.body.customer);
    services.forEach((service, index) => {
      repository.updateStatus(service._id, true);
    });
    res.status(201).send({
      message: 'Serviços pagos!'
    });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar seu pagamento de serviços.',
        data: err
      });
  }
}

exports.put = async (req, res, next) => {
  try {

    await repository.update(req.params.id, req.body);
    res.status(200).send({
        message: 'Serviço atualizado com louvor!!'
    });
  } catch(err) {
    console.log('Erro no put', err);
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
        message: 'Serviço removido com sucesso!!'
      });
      } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}