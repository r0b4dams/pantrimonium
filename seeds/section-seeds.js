const { Section } = require('../models');

const sectionData = [
    {
      name: "Angelica's Fridge",
      inventory_id: 1
    },
    {
      name: "Angelica's Freezer", 
      inventory_id: 1
    },
    {
      name: "Angelica's Pantry",
      inventory_id: 1
    },
    {
      name: "Sung's Fridge",
      inventory_id: 2
    },
    {
      name: "Sung's Freezer", 
      inventory_id: 2
    },
    {
      name: "Sung's Pantry",
      inventory_id: 2
    },
    {
      name: "Robert's Fridge",
      inventory_id: 3
    },
    {
      name: "Robert's Freezer", 
      inventory_id: 3
    },
    {
      name: "Robert's Pantry",
      inventory_id: 3
    },
    {
      name: "Rick's Fridge",
      inventory_id: 4
    },
    {
      name: "Rick's Freezer", 
      inventory_id: 4
    },
    {
      name: "Rick's Pantry",
      inventory_id: 4
    },
]

const seedSections = () => Section.bulkCreate(sectionData);

module.exports = seedSections;