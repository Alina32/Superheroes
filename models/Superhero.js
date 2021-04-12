const { Schema, model } = require('mongoose')

const PhotoSchema = new Schema({
	fieldname: String,
	originalname: String,
	encoding: String,
	mimetype: String,
	destination: String,
	filename: String,
	path: String,
	size: Number,
})

const Photo = model("Photo", PhotoSchema)

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
	photos: [{ type: Schema.Types.ObjectId, ref: 'Photos' }]
})

module.exports = model("Superhero", SuperheroSchema)