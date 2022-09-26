const {Schema, model, Types} = require('mongoose')
// const dateFormat = require('../utils/dateFormat')

const PayerSchema = new Schema(
	{
		payerName: {
			type: String,
			required: true
		},
		transactions: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Transtactions'
			}
		],
		points: {
			type: Number,
			ref:'Points',
			timestamps: true
		}
	}
)

const Payer = model('Payer', PayerSchema);

module.exports = Payer;