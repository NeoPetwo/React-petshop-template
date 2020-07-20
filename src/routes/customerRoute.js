// Gabriel Santos Nicolau - 10684600
'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerControler');

// Arquivo de organização de rotas para /customer
// As funções que lidam com a requisição estão em controller

router.get('/', controller.getAll);
router.post('/', controller.post);

module.exports = router;