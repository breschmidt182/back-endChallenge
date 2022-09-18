const {Payer, Points} = require('../models');

const pointsController = {
	addPoints({params, body}, res) {
		Points.create(body)
		.then(({_id}) => {
			return Payer.findOneAndUpdate(
				{ _id: params.payerId },
				{ $push:{points: total }},
				{new: true }
			);
		})
		.then((dbNewPoints) => {
			if(!dbNewPoints) {
				res.json({message:'Cannot add points to this id. Id is not found'})
			}
			res.status(200).json(dbNewPoints)
		})
		.catch((err) => { res.json(err) });
	},

	spendPoints({params}, res) {
		Points.findOneAndDelete({_id: params.id})
		.then((dbSpendPts) => {
			if(dbSpendPts > Points.total) {
				res.json({message:'Cannot spend points. Total cannot go below 0'})
			} else if (!dbSpendPts) {
				res.json({message:'Cannot find points with that id'})
			}
			res.status(200).json(dbSpendPts)
		})
		.catch((err) => { res.status(400).json(err) })
	}
};

module.exports = pointsController;