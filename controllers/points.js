const {Payer, Points} = require('../models');

const pointsController = {
	addPoints({params, body}, res) {
		Points.create({
			total: body.total,
			account: body.account
		})
		.then(({_id}) => {
			return Payer.aggregate(
				{ _id: params.payer._id },
				console.log(_id),
				{ $project: {payer: params.payer._id, points: {$add: ["$total", "$fee"]}}},
				console.log(payer),
				// {new: true }
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
			if(dbSpendPts > Payer.points.length) {
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