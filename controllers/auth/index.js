const router = require('express').Router();
const authRoutes = require('./auth-routes');

// localhost:3001/auth
router.use('/auth', authRoutes);

module.exports = router;