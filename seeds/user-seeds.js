const { User } = require('../models');

const userData = [
    {
      username: 'Angelica',
      email: 'angelica@gmail.com',
      password: 'password1'  
    },
    {
      username: 'Sung',
      email: 'sung@gmail.com',
      password: 'password2'  
    },
    {
      username: 'Robert',
      email: 'robert@gmail.com',
      password: 'password3'  
    },
    {
      username: 'Rick',
      email: 'rick@gmail.com',
      password: 'password4'  
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;