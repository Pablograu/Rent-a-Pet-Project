const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

/* GET signup page. */
router.get('/', (req, res, next) => {
  if (req.session.currentUser) {
    Pet.find({})
      .then((pets) => {
        res.render('pets/pets', { pets });
      })
      .catch((error) => {
        next(error);
      });
  } else {
    res.render('auth/login', { errorMessage: undefined });
  }
});

module.exports = router;
