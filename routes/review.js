const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const merge = require("merge-descriptors");
const {validateReview, isLoggedIn, isReviewAuthor } = require("../middlewares/middleware.js");

const reviewController = require('../controllers/reviews.js')


// Reviews
// Post route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.postReview) );

// Deleting reviews
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview))

module.exports = router;