const {Schema, model} = require('mongoose');

const PointsSchema = new Schema({
	total: {
		type: Number,
		timestamps: true
	},
	account: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Payer'
	}
});

const Points = model('Points', PointsSchema);

module.exports = Points;