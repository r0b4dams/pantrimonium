// localhost:3001/api/items
const router = require('express').Router();
const Item = require('../../models/Item');

// create an item
// localhost:3001/api/items
router.post('/', async (req, res) => {
  
  try {
    const itemData = await Item.create(req.body);
    res.status(200).json(itemData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// update an item by id
// localhost:3001/api/items/:id
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

// delete an item from inventory completely
// localhost:3001/api/items/:id
router.delete('/:id', async (req, res) => {
    try {
      const itemData = await Item.destroy({
        where: {
          id: req.params.id,
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