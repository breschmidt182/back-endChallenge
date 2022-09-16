const {Schema, model} = require('mongoose');

const TranstactionSchema = new Schema({
	amount:{
		type: Number,
		required: true
	},
	account:{
		type: Schema.Types.ObjectId,
		ref: 'Payer'
	}
});

const Transactions = model('Transactions', TranstactionSchema);

module.exports = Transactions;