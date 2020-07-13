// Gabriel Santos Nicolau - 10684600
'use strict'

const express = require('express');
const router = express.Router();

// Usada para testes
router.get('/', (req, res, next) => {
	res.status(200).send({
		title: "Node Web Development",
		version: "0.0.2"
	});
});

module.exports = router;