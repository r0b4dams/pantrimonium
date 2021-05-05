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

router.get('/test3', async function (req, res) {
    if(!req.session.user) {
        res.render('homepage')
    } else {
        const sectionData = await Section.findAll ({
            where: {user_id: 1}
        })
    }
    console.log(sectionData);
})


// router.get('/test', async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await Section.findByPk(req.session.user.id, {
//         where: {user_id : req.session.user.id},
//         // attributes: { exclude: ['password'] },
//         include: [{ model: Item }],
//       });
//       console.log(userData);
  
//       const user = userData.get({ plain: true });
  
//       res.render('shopping', {
//         ...Item
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

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