const { User } = require('../models');

const userData = [
    {
      username: 'user',
      email: 'user@gmail.com',
      password: '$2b$10$ylscr/cPIcUJoNpHizUgdOvwhCGhmTewPOG9MCJIgAw440Pi17o.a'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;