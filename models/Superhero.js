const { Schema, model } = require('mongoose')

const SuperheroSchema = new Schema({
	nickname: {
		type: String,
	},
	real_name: {
		type: String,
	},
	description: {
		type: String,
	},
	superpowers: {
		type: String,
	},
	catch_phrase: {
		type: String,
	},
	photos: [{ type: Schema.ObjectId, ref: 'Photo' }]
})

module.exports = model("Superhero", SuperheroSchema)