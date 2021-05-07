const { Item } = require('../models');

const itemData = [
    {
      name: "milk",
      type: "dairy",
      quantity: 2,
      unit_of_measurement: "gallon",
      par_level: 1,
      exp_date: "2021-05-01",
      section_id: 1
    },
    {
      name: "egg",
      type: "dairy",
      quantity: 1,
      unit_of_measurement: "dozen",
      par_level: 1,
      exp_date: "2021-05-28",
      section_id: 1
    },
    {
      name: "ice cream",
      type: "dairy",
      quantity: 1,
      unit_of_measurement: "gallon",
      par_level: 1,
      section_id: 2
    },
    {
      name: "frozen peas",
      type: "vegetable",
      quantity: 1,
      unit_of_measurement: "bag",
      par_level: 1,
      section_id: 2
    },
    {
      name: "bread",
      type: "grain",
      quantity: 1,
      unit_of_measurement: "loaf",
      par_level: 1,
      section_id: 3
    },
    {
      name: "peanut butter",
      type: "nut",
      quantity: 1,
      unit_of_measurement: "jar",
      par_level: 1,
      section_id: 3
    },
    {
      name: "orange juice",
      type: "juice",
      quantity: 0.5,
      unit_of_measurement: "gallon",
      par_level: 1,
      section_id: 1
    },
    {
      name: "bbq sauce",
      type: "condiment",
      quantity: 1,
      unit_of_measurement: "bottle",
      par_level: 1,
      exp_date: "2021-06-04",
      section_id: 1
    },
    {
      name: "frozen burger patties",
      type: "meat",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      exp_date: "2021-08-04",
      section_id: 2
    },
    {
      name: "ice cream",
      type: "dairy",
      quantity: 1,
      unit_of_measurement: "gallon",
      par_level: 1,
      section_id: 2
    },
    {
      name: "oreos",
      type: "snack",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      section_id: 3
    },
    {
      name: "goldfish",
      type: "snack",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      section_id: 3
    },
    {
      name: "deli sliced turkey",
      type: "meat",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      section_id: 1
    },
    {
      name: "pepperjack cheese slices",
      type: "dairy",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      exp_date: "2021-05-28",
      section_id: 1
    },
    {
      name: "frozen corn",
      type: "vegetable",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      section_id: 2
    },
    {
      name: "frozen broccoli",
      type: "vegetable",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      section_id: 2
    },
    {
      name: "sour cream & onion chips",
      type: "snack",
      quantity: 1,
      unit_of_measurement: "bag",
      par_level: 1,
      section_id: 2
    },
    {
      name: "rice crackers",
      type: "snack",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      section_id: 2
    },
    {
      name: "kimchi",
      type: "vegetable",
      quantity: 1,
      unit_of_measurement: "jar",
      par_level: 1,
      section_id: 1
    },
    {
      name: "strawberries",
      type: "fruit",
      quantity: 1,
      unit_of_measurement: "package",
      par_level: 1,
      exp_date: "2021-05-11",
      section_id: 1
    },
    {
      name: "keto breakfast sandwich",
      type: "meat",
      quantity: 1,
      unit_of_measurement: "box",
      par_level: 1,
      section_id: 1
    },
    {
      name: "orange chicken",
      type: "meat",
      quantity: 1,
      unit_of_measurement: "box",
      par_level: 1,
      section_id: 1
    },
    {
      name: "onion",
      type: "vegetable",
      quantity: 3,
      unit_of_measurement: "bulb",
      par_level: 1,
      section_id: 1
    },
    {
      name: "croutons",
      type: "grain",
      quantity: 1,
      unit_of_measurement: "bag",
      par_level: 1,
      section_id: 3
    }, 
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;