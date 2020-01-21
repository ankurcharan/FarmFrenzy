const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const RequestSchema = new Schema({
	latitude: {
		type: String,
		required: true
	},
	longitude: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},

}, { timestamps: true });


module.exports = {
	request: mongoose.model('Request', RequestSchema),
}