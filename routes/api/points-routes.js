const router = require('express').Router();
const {	addPoints, spendPoints} = require('../../controllers/points')

router
	.route('/')
	.post(addPoints);

router
	.route('/:id')
	.delete(spendPoints);

module.exports = router;