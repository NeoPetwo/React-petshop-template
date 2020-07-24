// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const multer = require('multer');

const repository = require('../repositories/productRepository');
const cartRepository = require('../repositories/cartRepository');


// Arquivo que lida com a requisiçao
// Este arquivo é importando em routes

// As funções que lidam com o banco de dados estão em repository

//Retorna todos os produtos
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

//Retorna produtos dado um slug
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

//Retorna um produto dado um id
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

// Retorna produtos dado uma tag
exports.getByTag = async (req, res, next) => {
  try {
    const data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

exports.getTags = async (req, res, next) => {
  try {
    const data = await repository.getTags();
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

// Cria produtos
exports.post = async (req, res, next) => {
  try {
   const data = await repository.create(req.body);
    res.status(201).send({
      message: 'Produto Cadastrado!!!!!!!!!!!'
    });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}

//Upload de imagens
exports.uploadImg = async (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(500).json(err)
    } else if (err) {
        console.log(err);
        return res.status(500).json(err)
    }
    return res.status(201).send(req.file);
  });
}

//Edita produtos
exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
        message: 'Produto atualizado com louvor!!'
    });
  } catch(err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição.',
      data: err
    });
  }
}

// Apaga produtos
exports.delete = async (req, res, next) => {
  try {
    //Apaga o produto do inventário
    await repository.delete(req.body.id);
    res.status(200).send({
        message: 'Produto removido com louvor!!',
      });
    } catch(err) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição.',
        data: err
      });
    }
}

// Multer functions to store images
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
});

var upload = multer({ storage: storage }).single('file');
