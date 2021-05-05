const router = require('express').Router();
const Item = require('../../models/User');

// localhost:3001/api/items

// read (view) ALL items
router.get('/', async (req, res) => {

});

// read (view) 1 item by id
router.get('/:id', async (req, res) => {

});

// create an item **NEEDS TO BE PUT IN A SPECIFIC SECTION**
router.post('/', async (req, res) => {

});

// update an item by id
router.put('/:id', async (req, res) => {

});

// delete an item from a section by id
router.delete('/:id', async (req, res) => {
    try {
      const itemData = await Item.destroy({
        where: {
          id: req.params.id,
          section_id = req.body.section_id
        },
      });
  
      if (!itemData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
      res.status(200).json(categoryData);
  
    } catch (err) {
      res.status(500).json(err);
    }
});