const express               = require('express');
//define body-parse for req.body usage
const bodyParser            = require('body-parser');
const cors                  = require('cors');
//define routes          
const indexRoutes           = require("./routes/index");
//set passport config.
const passport              = require("passport");
const localStrategy         = require("passport-local");
const methodOverride        = require("method-override");
//const passportLocalMongoose = require("passport-local-mongoose");

//define app as an express app
const app                   = express();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set public folder and use ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//set method override
app.use(methodOverride("_method"));

//enable cors
app.use(cors());

//tells express to use these route files.
app.use("/", indexRoutes);

//start server
app.listen('3000', '127.0.0.1', () => {
    console.log("The Ties App server has started.");
});
