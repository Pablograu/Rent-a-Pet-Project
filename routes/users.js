const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
//   Pet.find({ ownerId: req.session.currentUser._id, isAdopted: true })
//     .then((pets) => {
//       res.render('users', { pets });
//     });
// });

  Pet.find({ $or: [{ ownerId: req.session.currentUser._id, isPending: true }, { adopter: req.session.currentUser._id, isAdopted: true }] })
    .then((pets) => {
      res.render('users', { pets });
    });
});


router.post('/:id/confirm', (req, res, next) => {
  const { id } = req.params;
  Pet.findByIdAndUpdate(id, { isPending: false, isAdopted: true })
    .then((pet) => {
      console.log(pet);
      req.flash('success', 'Your pet just got a babysitter');
      res.redirect('/users');
    });
});

router.post('/:id/decline', (req, res, next) => {
  const { id } = req.params;

  Pet.findByIdAndUpdate(id, { isPending: null, adopter: null, adopterName: null })
    .then((pet) => {
      console.log(pet);
      req.flash('warning', 'User declined');
      res.redirect('/users');
    });
});
module.exports = router;
