const { User } = require('../models');

const userData = [
    {
      username: 'Angelica',
      email: 'angelica@gmail.com',
      password: '$2b$10$ylscr/cPIcUJoNpHizUgdOvwhCGhmTewPOG9MCJIgAw440Pi17o.a'
    },
    {
      username: 'Sung',
      email: 'sung@gmail.com',
      password: '$2b$10$ylscr/cPIcUJoNpHizUgdOvwhCGhmTewPOG9MCJIgAw440Pi17o.a'
    },
    {
      username: 'Robert',
      email: 'robert@gmail.com',
      password: '$2b$10$ylscr/cPIcUJoNpHizUgdOvwhCGhmTewPOG9MCJIgAw440Pi17o.a' 
    },
    {
      username: 'Rick',
      email: 'rick@gmail.com',
      password: '$2b$10$ylscr/cPIcUJoNpHizUgdOvwhCGhmTewPOG9MCJIgAw440Pi17o.a'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;