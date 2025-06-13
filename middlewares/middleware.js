const Listing = require("../models/listing");
const expressError = require("../utils/expressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");  // schema validations (Joi) 
const Review = require("../models/review.js");

//Schema Validation Function(Middleware) for listing
module.exports.validateListing = (req, res, next)=>{
    let {error} = listingSchema.validate(req.body);
    // console.log(error);
    // let errMsg = error.details.map((el) => el.message).join(",");
    // console.log(errMsg);
    if(error){
        throw new expressError(400, error);
    }else{
        next();
    }
}

//Schema Validation Function(Middleware) for review
module.exports.validateReview = (req, res, next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsg);
    }else{
        next();
    }
}

module.exports.isLoggedIn = (req, res, next)=>{
    // console.log(req.user);
    // console.log(req);
    // console.log(res.locals.redirectUrl)
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Please login! ");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner= async (req, res, next)=>{
    // protecting the route (authorization)
    let { id }= req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "you dont have permission to edit")
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) =>{
    let {id, reviewId }= req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "you are not the author of this review")
        return res.redirect(`/listings/${id}`);
    }
    next();
}