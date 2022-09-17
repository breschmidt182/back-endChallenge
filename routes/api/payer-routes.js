const router = require('express').Router();
const {
	createPayer,
	updatePayer,
	getAllPayers,
	getPayerById,
	deletePayer
} = require('../../controllers/payers')

// api/payers/
router
	.route('/')
	.get(getAllPayers)
	.post(createPayer);

//  api/payers/:id
router	
	.route('/:id')
	.get(getPayerById)
	.put(updatePayer)
	.delete(deletePayer);


module.exports = router;