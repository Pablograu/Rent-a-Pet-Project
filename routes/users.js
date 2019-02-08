const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  Pet.find({ adopter: req.session.currentUser._id })
    .then((pets) => {
      res.render('users', { pets });
    });
  // res.send('respond with a resource');
});

module.exports = router;
