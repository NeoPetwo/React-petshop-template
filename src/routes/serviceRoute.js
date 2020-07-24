// Gabriel Santos Nicolau - 10684600
'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/serviceController');

// Arquivo de organização de rotas para /services
// As funções que lidam com a requisição estão em controller


router.get('/', controller.get);
router.get('/alltypes', controller.getTypes);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/userservices/:userid', controller.getByUserId);
router.get('/petservices/:petid', controller.getByPetId);
router.post('/', controller.post);
router.post('/buy', controller.buy);
router.put('/:id', controller.put);
router.delete('/', controller.delete); 

module.exports = router;