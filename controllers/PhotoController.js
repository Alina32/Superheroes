const mongoose = require('mongoose')

const Photo = require('../models/Photo')

exports.delete = async function (req, res) {
  Photo.findByIdAndDelete(req.params.id).then((photo) => {
    if (!photo) {
      return res.status(404).send();
    }
    res.send(photo);
  }).catch((error) => {
    res.status(500).send(error);
  })
};
