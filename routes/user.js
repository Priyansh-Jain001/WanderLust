const express = require("express");
const router = express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares/middleware.js");


const userController = require('../controllers/user.js');
router.get("/signup", userController.renferSignUp)

router.post("/signup", wrapAsync(userController.signUp));

router.get("/login", userController.renderLogIn)

router.post(
    "/login", 
    saveRedirectUrl, 
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true}),  //passport is hepling to login
    userController.logIn  // it will basicall do the post login work
);

router.get("/logout", userController.logout)

module.exports = router;