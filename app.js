// dotenv is a npm pacakge which helps us to integrate the .env file with our backend
if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
// console.log(process.env);
// console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const ejsMate = require("ejs-mate");  //ejs-mate help us to take templeting to upper level. It helps with creating template and layouts
const expressError = require("./utils/expressError.js");
// const status = require("statuses");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");



// requiring router object
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const user = require("./routes/user.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

main()
.then((res)=> {
    console.log("Connection Successful");
})
.catch((err)=> {
    console.log("Connection Failed");
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
}

let port = 8080;

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

// Using sessions, flash
app.use(session(sessionOptions));
app.use(flash());

// Authentication
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// flash middleware
 app.use( (req, res, next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.deleteMsg = req.flash("delete");
    res.locals.errorMsg = req.flash("error");
    res.locals.registerMsg = req.flash("register");
    res.locals.registerErrorMsg = req.flash("registerError");
    res.locals.loginMsg = req.flash("login-success");
    res.locals.currUser = req.user;  // useing in ejs to show signup and logout buttons
    next();
 } )


// // Demo User
// app.get("/demoUser", async (req, res)=>{
//     let fakeUser = new User({
//         email: "fakeUser@getMaxListeners.com",
//         username: "fake@User"
//     })
    
//     let registeredUser =  await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// })

// Route for testing the listing model
// app.get("/testListing", async (req, res)=> {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Diu",
//         country: "India"
//     });

//     await sampleListing.save();
//     // .then((res)=>{
//     //     consoile.log(res);
//     // })
//     // .catch((err)=> {
//     //     console.log(err);
//     // })

//     console.log("Sample is saved");
//     res.send("Successful testing");
// })

// Using Routers
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/", user);


// if user send request to path that does no exists
app.all("*", (req, res, next)=>{
    next(new expressError(404, "Page Not Found!"));
});


// Error Handling Middleware
app.use((err, req, res, next)=>{
    let {statusCode=500, message="Something went wrong!"} = err;

    // res.status(statusCode).send(message);
    res.status(statusCode).render("error/error.ejs", {message});
})

app.listen(port, ()=>{
    console.log("Listening on port: ", port);
})