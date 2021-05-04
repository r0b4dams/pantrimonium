const { User } = require('../models');

const userData = [
    {
      username: 'Angelica',
      email: 'angelica@gmail.com',
      phone: 3605551234,
      password: 'password'  
    },
    {
      username: 'Sung',
      email: 'sung@gmail.com',
      phone: 3605555678,
      password: 'password'  
    },
    {
      username: 'Robert',
      email: 'robert@gmail.com',
      phone: 3605559101,
      password: 'password'  
    },
    {
      username: 'Rick',
      email: 'rick@gmail.com',
      phone: 3605551213,
      password: 'password'  
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;