const {User, Item, Inventory, Section} = require('../models');

const router = require('express').Router();

// authorization routes
const auth = require("./auth");
router.use(auth);

// db routes
// const api = require("./api");
// router.use(api);

// test handlebars functionality
router.get('/', function (req, res) {
    res.render('homepage');
})

router.get('/test', async (req, res) => {
    console.log(req.session)
    try {
      // Find the logged in user based on the session ID
      const userData = await Section.findBy(req.session.user.id, {
        where: user_id = req.session.user.id,
        // attributes: { exclude: ['password'] },
        // include: [{ model: Section }],
      });
      console.log(userData);
  
      const user = userData.get({ plain: true });
  
      res.render('shopping', {
        ...Item
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/shopping', function (req, res) {
    if (!req.session.user) {
        res.render("homepage");
    } else {
        res.render('shopping');
    }
})

router.get('/summary', function (req, res) {
    if (!req.session.user) {
        res.render("homepage");
    } else {
        res.render('summary');
    }
})

module.exports = router;