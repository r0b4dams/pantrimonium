const { Section } = require('../models');

const sectionData = [
    {
      name: "Angelica's Fridge",
      user_id: 1
    },
    {
      name: "Angelica's Freezer", 
      user_id: 1
    },
    {
      name: "Angleica's Pantry",
      user_id: 1
    },
    {
      name: "Sung's Fridge",
      user_id: 2
    },
    {
      name: "Sung's Freezer", 
      user_id: 2
    },
    {
      name: "Sung's Pantry",
      user_id: 2
    },
    {
      name: "Robert's Fridge",
      user_id: 3
    },
    {
      name: "Robert's Freezer", 
      user_id: 3
    },
    {
      name: "Robert's Pantry",
      user_id: 3
    },
    {
      name: "Rick's Fridge",
      user_id: 4
    },
    {
      name: "Rick's Freezer", 
      user_id: 4
    },
    {
      name: "Rick's Pantry",
      user_id: 4
    },
]

const seedSections = () => Section.bulkCreate(sectionData);

module.exports = seedSections;