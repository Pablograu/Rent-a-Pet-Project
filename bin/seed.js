const mongoose = require('mongoose');
const Pet = require('../models/pet');

const pets = [
  {
    name: 'Love.ME',
    description: 'Barks often',
    startDay: '02/09/2019',
    endDay: '05/09/2019',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_fDqR41AbhEZ1H1PuUzo4JILFrfG92HD29QaOkBXlaD8MGaVqA',
    ownerName: 'Papito',
  },
  {
    name: 'Honey',
    description: 'Keep the oranges away',
    startDay: '17/05/2019',
    endDay: '20/05/2019',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7URh6MPzXuBxho1jiGhYWmzDJ-ay-9wqWiklHbdjEoAxMCkJO',
    ownerName: 'Papito',
  },
  {
    name: 'Rainbow',
    description: 'Keep the oranges away',
    startDay: '12/05/2019',
    endDay: '18/05/2019',
    image: 'https://dog.ceo/api/breeds/image/random',
    ownerName: 'Papito',
  },
  {
    name: 'Flowers',
    description: 'Keep the oranges away',
    startDay: '12/05/2019',
    endDay: '18/05/2019',
    image: 'https://dog.ceo/api/breeds/image/random',
    ownerName: 'Papito',
  },
  {
    name: 'Cuttie',
    description: 'Keep the oranges away',
    startDay: '12/05/2019',
    endDay: '18/05/2019',
    image: 'https://dog.ceo/api/breeds/image/random',
    ownerName: 'Papito',
  },
  {
    name: 'AllIWantForChristmasIsYou',
    description: 'Keep the oranges away',
    startDay: '12/05/2019',
    endDay: '18/05/2019',
    image: 'https://dog.ceo/api/breeds/image/random',
    ownerName: 'Papito',
  },
];

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Pet.create(pets);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
