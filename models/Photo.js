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

module.exports = model("Photo", PhotoSchema)