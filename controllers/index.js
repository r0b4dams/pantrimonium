const {Item, Section} = require('../models');
const router = require('express').Router();

//api routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// authorization routes
const auth = require("./auth");
router.use(auth);

// render page routes
// Renders login/signup page
router.get('/', function (req, res) {

    // if req.session.user does not exist, logged_in is falsy
    res.render('homepage', {logged_in: req.session.user});
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
        // if req.session.user does not exist, logged_in is falsy
        res.render('kitchen', {sections, logged_in:true});
    };   
});

// Renders all items of the user's selected section
router.get('/section/:id', async (req,res) => {

    // redirect to homepage if user not logged in
    if (!req.session.user) {
        res.render("homepage");
    } else {

        // select all items associated with this section id
        const dbItems = await Item.findAll({
            where: {
                section_id: req.params.id
            }
        });

        // map to new array to parse out required info from metadata
        const items = dbItems.map((gallery) => gallery.get({ plain: true }));

        // put array into object so Handlebars can loop
        // if req.session.user does not exist, logged_in is falsy
        res.render("section", {items, logged_in: req.session.user});
    }
});

router.get('/kitchen2', async (req,res) => {
    if(!req.session.user) {
        res.render('homepage');
    } else {
        const sectionData = await Section.findAll({
            where: {
                user_id: req.session.user.id  // production
            },
            include: [{ model: Item }],
        });
        const items = sectionData.map(items => items.get({plain:true}));
        res.render('kitchen2', {items: items, logged_in:true});
    };   
});

// Renders user's shopping list
router.get('/shopping', async (req,res) => {

    // redirect to homepage if user not logged in
    if(!req.session.user) {
        res.render('homepage');
    } else {

        // select all sections associated with this user id
        const sectionData = await Section.findAll({
            where: {
                user_id: req.session.user.id
            },
            include: [{ model: Item }],
        });

        // map to new array to parse out required info from metadata
        const items = sectionData.map(items => items.get({plain:true}));

        // if req.session.user does not exist, logged_in is falsy
        res.render('shopping', {items: items, logged_in: req.session.user});
    };   
});

// Renders all user's sections to page
router.get('/summary', async (req,res) => {

    // redirect to homepage if user not logged in
    if(!req.session.user) {
        res.render('homepage');
    } else {

        // select all sections associated with this user id
        const sectionData = await Section.findAll({
            where: {
                user_id: req.session.user.id
            },
            include: [{ model: Item }],
        });

        // map to new array to parse out required info from metadata
        const items = sectionData.map(items => items.get({plain:true}));

        // if req.session.user does not exist, logged_in is falsy
        res.render('summary', {items: items, logged_in: req.session.user});
    };   
});

module.exports = router;