const mongoose = require('mongoose')

const Superhero = require('../models/Superhero')
const Photo = require('../models/Photo')

exports.all = async function (req, res) {
  try {
    const superheroes = await Superhero.find().sort({ _id: -1 }).populate('photos')
    res.send(superheroes)
  } catch (err) {
    console.error(err)
  }

};

exports.one = async function (req, res) {
  try {
    const hero = await Superhero.findOne({ _id: req.params.id }).populate('photos')
    res.send(hero)
  } catch {
    res.status(404)
    res.send({ error: "Superhero doesn't exist!" })
  }
};

exports.create = async function (req, res) {
  try {
    const hero = new Superhero()
    hero.nickname = req.body.nickname;
    hero.real_name = req.body.real_name;
    hero.description = req.body.description;
    hero.superpowers = req.body.superpowers;
    hero.catch_phrase = req.body.catch_phrase;
    hero.photos = req.files;

    if (Array.isArray(req.files) && req.files.length > 0) {
      for (const file of req.files) {
        const photo = await (new Photo(file)).save()

        hero.photos.push(photo._id)
      }
    }
    await hero.save()
    res.send(hero)

  } catch (err) {
    res.status(422).json({
      message: err.message,
      driver: err.driver,
      index: err.index,
      code: err.code,
      keyPattern: err.keyPattern,
      keyValue: err.keyValue,
    })
  }
};

exports.update = async function (req, res) {
  try {
    const hero = await Superhero.findOne({ _id: req.params.id })

    for (const key in req.body) {
      if (req.body[key]) {
        hero[key] = req.body[key]
      }
    }

    if (Array.isArray(req.files) && req.files.length > 0) {
      for (const file of req.files) {
        const photo = await (new Photo(file)).save()

        hero.photos.push(photo._id)
      }
    }

    await hero.save()

    res.status(201).json({ message: 'Superhero updated successfully!' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.delete = async function (req, res) {
  Superhero.findByIdAndDelete(req.params.id).then((superhero) => {
    if (!superhero) {
      return res.status(404).send();
    }
    res.send(superhero);
  }).catch((error) => {
    res.status(500).send(error);
  })
};
