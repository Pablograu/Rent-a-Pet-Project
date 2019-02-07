const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

/* GET users listing. */
/* GET celeb listing. */
router.get('/', (req, res, next) => {
  Pet.find({})
    .then((pets) => {
      res.render('pets/pets', { pets });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/pets', (req, res, next) => {
  console.log(req.body);
  const {
    name, description, date, days, image,
  } = req.body; // this creates 3 vars from

  Pet.create({
    name, description, date, days, image,
  })
    .then(() => {
      console.log('added pet!');
      res.redirect('/pets');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/create', (req, res, next) => { // this shows form to user
  res.render('pets/create');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Pet.findById(id)
    .then((pet) => {
      res.render('pets/detail', { pet });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
