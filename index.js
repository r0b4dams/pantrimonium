const express = require('express');
const session = require("express-session"); // express session can store data in session obj, gets attached to request obj; attached to a cookie that is passed back and forth between that server and that specific client
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store); 
const path = require("path");
const helpers = require('./utils/helpers');

require('dotenv').config();

const {User, Inventory, Section, Item} = require("./models"); // keep this here during dev so tables always get built (sequelize will not create table unless model referenced)

const routes = require("./controllers"); // import routes

const app = express();
const PORT = process.env.PORT || 3001

// data handling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'))); // static assets in public folder for passing in front end js and css

const hbs = exphbs.create({ helpers })
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// session pkg uses encrypted cookies to store data related to specific browser-client sessions
app.use(session(
    {
        secret:process.env.SESSION_SECRET, // string used to encode data 
        resave:false,
        saveUninitialized:true,
        cookie:{
            maxAge:1000*60*60*2 // user logged out after 2 hrs
        },
        store: new SequelizeStore({ // sessions stored here
            db: sequelize,
        })
    }
));

app.use(routes);

// connect to db
sequelize.sync({ force: false })
        // then start the server
         .then(()=> {
            app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
         });


