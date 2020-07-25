// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'

const express = require('express');
const router = express.Router();

// Usada para testes
router.get('/', async (req, res, next) => {
	res.status(200).send({
		msg: "It's alive, it's moving, it's alive, it's alive, it's alive, it's alive, IT'S ALIVE! Frankenstein, Henry",
	});
});

module.exports = router;