const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/user');

// BCrypt to encrypt passwords

const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', { errorMessage: undefined });
});

router.post('/signup', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  const { email } = req.body;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (username === '' || password === '' || email === '') {
    req.flash('error', 'Fill the form out');
    res.redirect('signup');
  } else {
    User.findOne({ username })
      .then((user) => {
        if (!user) {
          const salt = bcrypt.genSaltSync(bcryptSalt);
          const hashPass = bcrypt.hashSync(password, salt);
          User.create({ username, password: hashPass })
            .then(() => {
              res.redirect('/pets');
            })
            .catch((error) => {
              next(error);
            });
        } else {
          req.flash('error', 'incorrect');
          res.redirect('/auth/signup');
        }
      })
      .catch((error) => {
        next(error);
      });
  }
});

router.get('/login', (req, res, next) => {
  res.render('auth/login', { errorMessage: undefined });
});

router.post('/login', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;

  if (username === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Indicate a username and a password to sign up',
    });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.render('auth/login', {
          errorMessage: "The username doesn't exist",
        });
        return;
      }
      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect('/');
      } else {
        res.render('auth/login', {
          errorMessage: 'Incorrect password',
        });
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect('/auth/login');
  });
});

module.exports = router;
