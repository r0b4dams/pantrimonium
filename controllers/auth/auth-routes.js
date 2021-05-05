const router = require('express').Router();
const bcrypt = require("bcrypt"); // pw hashing
const User = require('../../models/User');
const Section = require('../../models/Section');

// FOR TESTING
// localhost:3001/auth/session
router.get("/session", (req, res)=>{
    console.log(req.session.user);
    res.json(req.session.user);
})

// a new user signs up
// localhost:3001/auth/signup
router.post("/signup", async (req, res)=>{

    await User.create(req.body).then(newUser=>{

        // create seed array to bulk create default sections
        defaultSections = [
            {
                name: `${newUser.dataValues.username}'s Fridge`,
                user_id: newUser.dataValues.id
            },
            {
                name: `${newUser.dataValues.username}'s Freezer`,
                user_id: newUser.dataValues.id
            },
            {
                name: `${newUser.dataValues.username}'s Pantry`,
                user_id: newUser.dataValues.id
            },
        ];

        // creates default sections
        Section.bulkCreate(defaultSections).then(result=> {
            console.log("defaults created!");
        });

        res.status(200).json(newUser);

    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
})

// an existing user logs in
// localhost:3001/auth/login
router.post("/login", (req,res)=>{

    // find the record
    User.findOne({
        where:{
            email: req.body.email,
        }
    })

    // then compare passwords
    .then(foundUser=>{

        // login failure: user not found (email not in db)
        if(!foundUser) {
            req.session.destroy(); // destroy session on login failure
           return res.status(401).send("login failed");
        }
        
        // login success: user found and password correct
        if(bcrypt.compareSync(req.body.password, foundUser.password)) {

            // add found user to session obj for persistence
            // can use in other locations to check to see if logged-in
            // if logged-in, this object exists
            req.session.user = {
                id: foundUser.id,
                username: foundUser.username,
                email: foundUser.email,
            };
            return res.json(foundUser); 

        // login failure: user found but password incorrect
        } else {
            req.session.destroy(); // destroy session on login failure
            return res.status(401).send("login failed");
        }
    })

    // catch any errors
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

// an user logs out
// localhost:3001/auth/logout
router.get("/logout", (req,res) => {
    req.session.destroy();
    res.send("logged out!");
});

module.exports = router;
