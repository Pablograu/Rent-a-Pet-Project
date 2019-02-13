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
  const ownerName = req.session.currentUser.username;
  const ownerId = req.session.currentUser._id;
  const isPending = null;
  const isAdopted = false;
  const {
    name, description, startDay, endDay, image,
  } = req.body; // this creates few vars at once

  Pet.create({
    name, description, ownerName, ownerId, startDay, endDay, image, isPending, isAdopted,
  })
    .then(() => {
      req.flash('success', 'Pet added!');
      res.redirect('/pets');
      console.log('pet added succesfully');
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
  const adopter = req.session.currentUser._id;
  const adopterName = req.session.currentUser.username;
  Pet.findByIdAndUpdate(id, { adopterName, adopter, isPending: true })
    .then(() => {
      console.log();
      res.redirect(`/pets/${id}`);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Pet.findById(id)
    .then((pet) => {
      res.render('pets/edit', { pet });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const {
    name, description, startDay, endDay, image,
  } = req.body;
  Pet.findByIdAndUpdate(id, {
    name, description, startDay, endDay, image,
  })
    .then(() => {
      res.redirect('/users');
    })
    .catch(next);
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Pet.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/users');
    })
    .catch(next);
});

module.exports = router;
