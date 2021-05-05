const router = require('express').Router();
const User = require('./User');
const Inventory = require('./Inventory');
const Section = require('./Section');
const Item = require('./Item');

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

router.get('/kitchen/:id', async (req,res) => {
    const sectionData = await Section.findByPk(req.params.id);
    console.log(sectionData);
    res.render('kitchen');
});

module.exports = router;