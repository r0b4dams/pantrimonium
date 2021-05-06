const {User, Item, Section} = require('../models');
const router = require('express').Router();
const apiRoutes = require('./api');

//api routes
router.use('/api', apiRoutes);

// authorization routes
const auth = require("./auth");
router.use(auth);

// Renders login/signup page
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

// Renders user's shopping list
router.get('/shopping', async (req,res) => {
    if(!req.session.user) {
        res.render('homepage');
    } else {
        const sectionData = await Section.findAll({
            where: {
                user_id: req.session.user.id  // production
                // user_id: 1                 // testing
            },
            include: [{ model: Item }],
        });
        // console.log(sectionData);
        const items = sectionData.map(items => items.get({plain:true}));
        // console.log(items);
        res.render('shopping', {items: items, logged_in:true});
    };   
});

// Renders all user's sections to page
router.get('/summary', async (req,res) => {
    if(!req.session.user) {
        res.render('homepage');
    } else {
    const sectionData = await Section.findAll({
        where: {
            user_id: req.session.user.id  // production
            // user_id: 1                       // testing
        },
        include: [{ model: Item }],
    })
    // console.log(sectionData);
    const items = sectionData.map(items => items.get({plain:true}));
    // console.log(items)
    res.render('summary', {items: items});
    };   
});

module.exports = router;