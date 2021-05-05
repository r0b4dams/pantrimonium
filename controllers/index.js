const {User, Item, Inventory} = require('../models');

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

// router.get('/test', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Item }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('shopping', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get('/shopping', function (req, res) {
    if (!req.session.logged_in) {
        res.render("homepage");
    } else {
        res.render('shopping');
    }
})

router.get('/summary', function (req, res) {
    if (!req.session.logged_in) {
        res.render("homepage");
    } else {
        res.render('summary');
    }
})

module.exports = router;