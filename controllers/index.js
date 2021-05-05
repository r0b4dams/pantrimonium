const router = require('express').Router();
const Section = require('../models');

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

router.get('/kitchen', async (req,res) => {
    console.log(req.session);
    res.render('kitchen');
    // if(req.session.user.id) {
    //     const sectionData = await Section.findByPk();
    //     console.log(sectionData);
    // }
   
});

module.exports = router;