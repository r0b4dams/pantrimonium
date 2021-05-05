const router = require('express').Router();
const Section = require('../models/Section');

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
        const me = {sections: sectionDataJson}
        console.log(me)
        res.render('kitchen', me);
    };   
});

module.exports = router;