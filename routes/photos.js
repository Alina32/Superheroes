const express = require('express')
const router = express.Router()

const Photos = require('../controllers/PhotoController')



router.delete('/:id', Photos.delete)
    

module.exports = router;


