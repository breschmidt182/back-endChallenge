const {Schema, model} = require('mongoose');

const TransactionSchema = new Schema({
	amount:{
		type: Number,
		required: true
	},
	account:{
		type: Schema.Types.ObjectId,
		ref: 'Payer'
	}
});

const PointsSchema = new Schema({
	total: {
		type: Number,
		timestamps: true
	},
	fee: {
		type: Number
	},
	account: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Payer'
	},
	transactions: [
		TransactionSchema
	]
});

const Points = model('Points', PointsSchema);

module.exports = Points;