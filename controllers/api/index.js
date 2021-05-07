const router = require('express').Router();
const itemRoutes = require('./item-routes');

// localhost:3001/api/items
router.use('/items', itemRoutes);

module.exports = router;