const seedUsers = require('./user-seeds');
const seedSections = require('./section-seeds');
const seedItems = require('./item-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedSections();
  console.log('\n----- SECTIONS SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();
