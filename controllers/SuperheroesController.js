const Superhero = require('../models/Superhero')


exports.all = async function(req, res) {
    try {
        const superheroes = await Superhero.find({}).sort({ _id: -1 })
        res.send(superheroes)
    } catch (err) { 
        console.error(err)
    }
 
};

exports.one = async function(req, res) {
  try {
		const hero = await Superhero.findOne({ _id: req.params.id })
		res.send(hero)
	} catch {
		res.status(404)
		res.send({ error: "Superhero doesn't exist!" })
	}

};

exports.create = async function(req, res) {
    try {
        const hero = new Superhero()
            hero.nickname = req.body.nickname;
            hero.real_name = req.body.real_name;
            hero.description = req.body.description;
            hero.superpowers = req.body.superpowers;
            hero.catch_phrase = req.body.catch_phrase;
        
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

exports.update = async function(req, res) {
    console.log(req.files)
    const hero = new Superhero({
        _id: req.params.id,
        nickname: req.body.nickname,
        real_name: req.body.real_name,
        description: req.body.description,
        superpowers: req.body.superpowers,
        catch_phrase: req.body.catch_phrase,
        photos: req.files,
    
      });
      
      Superhero.findByIdAndUpdate({_id: req.params.id}, hero).then(
        () => {
          res.status(201).json({
            message: 'Superhero updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};

exports.delete =  async function(req, res) {  
    Superhero.findByIdAndDelete(req.params.id).then((superhero) => {
        if (!superhero) {
            return res.status(404).send();
        }
        res.send(superhero);
    }).catch((error) => {
        res.status(500).send(error);
    })
};
