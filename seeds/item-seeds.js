const { Item } = require('../models');

const itemData = [
    {
      name: "milk",
      type: "dairy",
      quantity: 1,
      unit_of_measurement: "gallon",
      par_level: 1,
      exp_date: "2021-05-05",
      section_id: 1
    },
    {
      name: "eggs",
      type: "dairy",
      quantity: 12,
      par_level: 3,
      section_id: 1
    },
    {
      name: "ice cream",
      type: "dairy",
      quantity: 1,
      unit_of_measurement: "total",
      par_level: 1,
      exp_date: "2021-06-28",
      section_id: 2
    },
    {
      name: "cheddar cheese",
      type: "dairy",
      quantity: 2,
      par_level: 1,
      exp_date: "2021-07-28",
      section_id: 2
    },
    {
      name: "bread",
      type: "grain",
      quantity: 1,
      unit_of_measurement: "loaf",
      par_level: 1,
      exp_date: "2021-05-05",
      section_id: 3
    },
    {
      name: "mixed vegetables",
      type: "vegetables",
      quantity: 2,
      unit_of_measurement: "bag",
      par_level: 1,
      exp_date: "2021-05-05",
      section_id: 3
    },
    {
      name: "orange juice",
      type: "juice",
      quantity: 0.5,
      unit_of_measurement: "gallon",
      par_level: 1,
      exp_date: "2021-05-05",
      section_id: 2
    },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;