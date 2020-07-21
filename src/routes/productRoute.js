// Gabriel Santos Nicolau - 10684600
'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

// Arquivo de organização de rotas para /products
// As funções que lidam com a requisição estão em controller

// NÃO MUDE ESSA ORDEM!!
router.get('/alltags', controller.getTags);
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.post('/uploadimg', controller.uploadImg);
router.put('/:id', controller.put);
router.delete('/', controller.delete); 

module.exports = router;