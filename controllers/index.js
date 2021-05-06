const router = require('express').Router();
const Section = require('../models/Section');
const Item = require('../models/Item');

// authorization routes
const auth = require("./auth");
router.use(auth);

// renders login/signup page
router.get('/', function (req, res) {
    res.render('homepage');
});

// Renders all user's sections to page
router.get('/kitchen', async (req,res) => {

    // redirect to homepage if user not logged in
    if(!req.session.user) {
        res.render("homepage");
    } else {

        // select all sections associated with this user id
        const dbSections = await Section.findAll({
            where: {
                user_id: req.session.user.id
            }
        });

        // map to new array to parse out required info from metadata
        const sections = dbSections.map(section => section.get({plain:true}));

        // put array into object so Handlebars can loop
        res.render('kitchen', { sections });
    };   
});

// Renders all items of the user's selected section
router.get('/section/:id', async (req,res) => {

    // redirect to homepage if user not logged in
    if (!req.session.id) {
        res.render("homepage");
    } else {

        // select all items associated with this section id
        const dbItems = await Item.findAll({
            where: {
                section_id: req.params.id // production
                // section_id: 1                // testing
            }
        });

        // map to new array to parse out required info from metadata
        const items = dbItems.map((gallery) => gallery.get({ plain: true }));

        // put array into object so Handlebars can loop
        res.render("section", {items});
    }
});

// Renders all items accross all sections
router.get('/summary', async (req,res) => {

    // redirect to homepage if user not logged in
    if(!req.session.user) {
        res.render("homepage");
    } else {

        // get every section associated with user, including items
        const dbSummary = await Section.findAll({
            where: {
                user_id: req.session.user.id  // production
                // user_id: 3                    // testing
            },
            include: {
                model: Item
            }
        });

        // map to new array to parse out required info from metadata
        const summary = dbSummary.map((sectionsWithItems) => sectionsWithItems.get({ plain: true }));

        // put array into object so Handlebars can loop
        res.render("summary", {summary});
    }
});

// Renders all items flagged as running low 
router.get('/shopping', async (req,res) => {


});

module.exports = router;