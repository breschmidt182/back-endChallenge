const {Payer} = require('../models');

const payerController = {
	createPayer(req,res) {
		Payer.create(req.body)
		.then((dbNewPayer) => {
			res.json({dbNewPayer, message:'new payer created'})
		})
		.catch((err) => { res.json(err) })
	},

	updatePayer({params, body}, res) {
		Payer.findOneAndUpdate({_id: params.id}, body, {new: true})
		.then((dbUpdatedPayer) => {
			if(!dbUpdatedPayer) {
				res.json({message:'There is no account with that id. Please try again'})
			}
			res.status(200).json({dbUpdatedPayer, message:'Payer profile updated'})
		})
		.catch((err) =>{ res.status(400).json(err)})
	},

	getAllPayers(req, res) {
		Payer.find({})
		.then((dbAllPayers) => {
			res.json(dbAllPayers);
		})
		.catch((err) => { res.json(err) })
	},

	getPayerById({params}, res) {
		Payer.findOne({_id: params.id})
		.then((dbSinglePayer) => {
			if(!dbSinglePayer) {
				res.json({message:'There is no account with that id. Please try again'})
			}
			res.json(dbSinglePayer);
		})
		.catch((err) => { res.status(400)})
	},

	deletePayer({params}, res) {
		Payer.findOneAndDelete({ _id: params.id })
		.then((dbPayer) => {
			if(!dbPayer) {
				res.json({message:'There is no account with that id. Please try again'})
			}
			res.json(dbPayer)
		})
		.catch((err) => { res.json(err) })
	}
};

module.exports = payerController;