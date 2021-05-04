const router = require('express').Router();
const bcrypt = require("bcrypt"); // pw hashing
const User = require('../../models/User');

// localhost:3001/auth/
router.get("/session", (req, res)=>{
    console.log(req.session.user);
    res.json(req.session.user);
})

// a new user signs up
// localhost:3001/auth/signup
router.post("/signup", (req, res)=>{
    
    // create a new user from client data
    User.create({
        username: req.body.username,
        email: req.body.email, 
        password: req.body.password, // hook in User.js hashes pw before create

    }).then(newUser=>{
        res.json(newUser);           // send back the newUser data

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

// TESTING user auth
router.get("/secretclub", (req,res) => {

    // protect routes
    // if this obj doesn't exist, user not logged in 
    if(!req.session.user) { 
        return res.status(401).send("login required!");
    } else {
        res.send(`WELCOME ${req.session.user.username}`);
    }
});

module.exports = router;
