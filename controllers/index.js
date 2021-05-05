const router = require('express').Router();
const Section = require('../models/Section');
const Item = require('../models/Item');

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

// Renders all user's sections to page
router.get('/kitchen', async (req,res) => {
    if(!req.session.user) {
        res.render('homepage')
    } else {
        const sectionData = await Section.findAll({
            where: {
                // user_id: req.session.user.id
                user_id: 1
            }
        })
        // console.log(sectionData);
        const sectionDataJson = sectionData.map(section => section.get({plain:true}))
        console.log(req.session.user);
        console.log("================");
        // console.log(sectionDataJson);
        const mySections = {sections: sectionDataJson}
        // console.log(me)
        res.render('kitchen', mySections);
    };   
});

// Renders all items of the user's selected section
router.get('/section/:id', async (req,res) => {
    if(!req.session.user) {
        res.render('homepage')
    } else {
        const oneSection = await Item.findAll({
            where: {
                // id: section_id
                section_id: 1
            }
        })
        // console.log(oneSection);
        const oneSectionJson = oneSection.map(item => item.get({plain:true}))
        console.log("***************");
        console.log(oneSectionJson);
        const myItems = {items: oneSectionJson}
        res.render('item', myItems);
    };
});


module.exports = router;