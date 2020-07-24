// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'

const express = require('express');
const router = express.Router();

const serviceRepo = require('../repositories/serviceRepository');


// Usada para testes
router.get('/', async (req, res, next) => {
	// try {
	// 	for (let i=10; i<21; i += 2 ) {
	// 		const response = await serviceRepo.create({
	// 			shceduled: false,
	// 			type: 'Bath',
	// 			description: 'Hot bath',
	// 			slug: 'hot-bath',
	// 			startHour: `${i}:00`,
	// 			endingHour: `${i+1}:00`,
	// 			price: 31,
	// 			date: '2001-02-02',
	// 			img: '/img/dogBath.png'
	// 		});
	// 	}

	// 	for (let i=9; i<20; i += 2 ) {
	// 		const response = await serviceRepo.create({
	// 			shceduled: false,
	// 			type: 'Hair cut',
	// 			description: 'Hair cut for pets',
	// 			slug: 'haircut',
	// 			startHour: `${i}:00`,
	// 			endingHour: `${i+1}:00`,
	// 			price: 52,
	// 			date: '2001-02-02',
	// 			img: '/img/tosa.png'
	// 		});
	// 	}

		const array = [
			{
				id: 0,
				start: '19:00'
			},
			{
				id: 1,
				start: '14:00'
			},
			{
				id: 2,
				start: '12:00'
			}
		];

		array.sort(compare);


		

		res.status(200).send({
			array: array,
		});
	// } catch (err) {
	// 	res.status(200).send({
	// 		msg: "Error",
	// 		error: err
	// 	});
	// }
	
});

function compare(a, b) {
  // if (a is less than b by some ordering criterion) {
	if (a.start < b.start) {
    return -1;
  }
  // if (a is greater than b by the ordering criterion) {
	if (a.start > b.start) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

module.exports = router;