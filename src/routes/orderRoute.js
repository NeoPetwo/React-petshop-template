// Gabriel Santos Nicolau - 10684600
'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

// Arquivo de organização de rotas para /order
// As funções que lidam com a requisição estão em controller

router.get('/', controller.get);
router.post('/', controller.post);
router.post('/buy', controller.buy);

module.exports = router;