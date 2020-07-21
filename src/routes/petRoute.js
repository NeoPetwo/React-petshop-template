// Gabriel Santos Nicolau - 10684600
'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/petController');

// Arquivo de organização de rotas para /products
// As funções que lidam com a requisição estão em controller

// NÃO MUDE ESSA ORDEM!!
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.post('/uploadimg', controller.uploadImg);
router.put('/:id', controller.put);
router.delete('/', controller.delete); 

module.exports = router;