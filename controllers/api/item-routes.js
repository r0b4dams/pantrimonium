const router = require('express').Router();
const Item = require('../../models/Item');


// localhost:3001/api/items endpoint


// create an item **NEEDS TO BE PUT IN A SPECIFIC SECTION**
router.post('/', async (req, res) => {
  try {
    const itemData = await Item.create({
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity,
      unit_of_measurement: req.body.unit_of_measurement,
      par_level: req.body.par_level,
      exp_date: req.body.exp_date,
      section_id: req.body.section_id
    });
    res.status(200.).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update an item by id
router.put('/:id', async (req, res) => {
  try {
    const updatedItemData = await Item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    if(!updatedItemData) {
      res.status(400).json({ message: 'No such item' })
      return;
    }
    res.status(200).json(updatedItemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete an item from a section by id
router.delete('/:id', async (req, res) => {
    try {
      const itemData = await Item.destroy({
        where: {
          id: req.params.id,
          // section_id: req.body.section_id
        },
      });
  
      if (!itemData) {
        res.status(404).json({ message: 'No item found with that id!' });
        return;
      }
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;