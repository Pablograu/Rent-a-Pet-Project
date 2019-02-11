const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  Pet.find({ ownerId: req.session.currentUser._id, isPending: true })
    .then((pets) => {
      res.render('users', { pets });
    });
  // res.send('respond with a resource');
});

router.post('/:id/confirm', (req, res, next) => {
  const { id } = req.params;
  Pet.findByIdAndUpdate(id, { isPending: false })
    .then((pet) => {
      console.log(pet);
      res.redirect('/users');
    });
});

router.post('/:id/decline', (req, res, next) => {
  const { id } = req.params;

  Pet.findByIdAndUpdate(id, { isPending: null, adopter: null })
    .then((pet) => {
      console.log(pet);
      req.flash('warning', 'User declined');
      res.redirect('/users');
    });
});
module.exports = router;
