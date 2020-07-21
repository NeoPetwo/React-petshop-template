// Gabriel Santos Nicolau - 10684600
'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerControler');

// Arquivo de organização de rotas para /customer
// As funções que lidam com a requisição estão em controller

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.post('/login', controller.login);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;