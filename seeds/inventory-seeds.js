const { Inventory } = require('../models');

const inventoryData = [
    {
      name: "Angelica's Inventory",
      user_id: 1
    },
    {
      name: "Sung's Inventory", 
      user_id: 2
    },
    {
      name: "Robert's Inventory",
      user_id: 3
    },
    {
      name: "Rick's Inventory",
      user_id: 4
    }
]

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;