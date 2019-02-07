const express = require('express');

const router = express.Router();

/* GET signup page. */
router.get('/', (req, res, next) => {
  if (req.session.currentUser) {
    res.render('index', { title: 'Rent-a-Pet' });
  } else {
    res.render('auth/login', { errorMessage: undefined });
  }
});

module.exports = router;
