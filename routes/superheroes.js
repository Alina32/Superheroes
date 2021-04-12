const express = require('express')
const router = express.Router()

const Superheroes = require('../controllers/SuperheroesController')


router.get('/', Superheroes.all)

router.get('/:id', Superheroes.one)

router.post('/', Superheroes.create)

router.delete('/:id', Superheroes.delete)

router.put('/:id', Superheroes.update)
    

module.exports = router;


