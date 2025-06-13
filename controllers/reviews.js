const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


module.exports.postReview = async (req, res)=> {
    // res.send("Working");
    let { id } = req.params;
    let listing = await Listing.findById(id);

    // creating a new review
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    // console.log(newReview);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    // console.log("new review saved");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview = async(req, res)=>{
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);

}