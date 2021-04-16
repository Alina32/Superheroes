const { Schema, model } = require('mongoose')

const Photo = require('../models/Photo')

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

class Superhero {
	async updatePhotos(photos) {
		if (Array.isArray(photos) && photos.length > 0) {
			for (const file of photos) {
			  const photo = new Photo(file)
			  
			  await photo.save()

			  this.photos.push(photo._id)
			}
		}
	}
}

SuperheroSchema.loadClass(Superhero);

module.exports = model("Superhero", SuperheroSchema)