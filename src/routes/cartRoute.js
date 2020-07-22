// Gabriel Santos Nicolau - 10684600
'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');

// Arquivo de organização de rotas para /cart
// As funções que lidam com a requisição estão em controller

router.get('/', controller.get);
router.get('/:customerid', controller.getByCustomerId);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;