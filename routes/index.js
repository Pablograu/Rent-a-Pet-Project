const express = require('express');

const router = express.Router();

/* GET signup page. */
router.get('/', (req, res, next) => {
  // console.log(req.session.currentUser);
  res.render('auth/login', { errorMessage: undefined });
});

module.exports = router;


// res.render('index', { title: 'Rent-a-Pet' });
