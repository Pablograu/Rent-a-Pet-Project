const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

router.get('/', (req, res, next) => {
  Pet.find({})
    .then((pets) => {
      res.render('pets/pets', { pets, title: 'rent-a-pet' });
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
      req.flash('success', 'Pet added!');
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

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  Pet.findOne(id)
    .then((pet) => {
      res.render('/users', { pet });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/adopt/:id', (req, res, next) => {
  const { id } = req.params;
  const adopterId = req.session.currentUser.id;
  Pet.findByIdAndUpdate(id, { adopter: adopterId })

    .then(() => {
      res.redirect('/users');
    });
});

module.exports = router;
