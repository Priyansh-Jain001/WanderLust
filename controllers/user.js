const User = require("../models/user.js");

module.exports.renferSignUp =  (req,res)=>{
    // res.send('working');
    res.render("authentication/signup.ejs");
}

module.exports.signUp = async (req,res)=>{
    try{
        let{email, username, password} = req.body.user;
        let newUser = new User({
            email: email,
            username: username,
        })
    
        let registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        // as user get registered it automatically gets logged in
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash("register", `${username} Welcome to Wander Lust!`);
            res.redirect("/listings");
        });
    }
    catch(e){
        // console.log(e.message);
        req.flash("registerError", e.message);
        res.redirect("/signup");
    }

}

module.exports.renderLogIn = (req, res)=>{
    // res.send("working");
    res.render("authentication/login.ejs");
}

module.exports.logIn = async (req, res) => {
    let { username } = req.body;
    // console.log(username);
    req.flash('login-success', `${username} logged in!`);
    if(!res.locals.redirectUrl){
        res.redirect("/listings");
        return;
    }
    res.redirect(res.locals.redirectUrl);
}

module.exports.logout = (req, res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Logged Out successfully");
        res.redirect("/listings");
    })
}