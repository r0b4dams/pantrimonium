const { Section } = require('../models');

const sectionData = [
    {
      name: "User's Fridge",
      user_id: 1
    },
    {
      name: "User's Freezer", 
      user_id: 1
    },
    {
      name: "User's Pantry",
      user_id: 1
    },
]

const seedSections = () => Section.bulkCreate(sectionData);

module.exports = seedSections;
