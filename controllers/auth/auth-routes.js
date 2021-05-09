require('dotenv').config();
const router = require('express').Router();
const bcrypt = require("bcrypt"); // pw hashing
var nodemailer = require('nodemailer');
const User = require('../../models/User');
const Section = require('../../models/Section');

// this object can send emails
var transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERV,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

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

// a user logs out
// localhost:3001/auth/logout
router.post("/logout", (req,res) => {
    req.session.destroy();
    res.render("homepage", {logged_in: false});
});

// sends user shopping list via email
// localhost:3001/auth/email
router.post('/email', async function (req, res) {

    // make a plain text list from the array sent by the client
    let textList = "";
    req.body.forEach(function(item) {
        textList += item + "\n";
    });

    // options go in this object
    const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.session.user.email,
    subject: 'Your Shopping List',
    text: textList,
    };

    // call this function when ready to send mail
    // from docs:
    // If callback argument is not set then the method returns a Promise object. 
    // Nodemailer itself does not use Promises internally but it wraps the return into a Promise for convenience.
    // i.e. can use async/await with try/catch and save result to var and throw err in catch
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(400);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send("success");
        }
    });
});

module.exports = router;
