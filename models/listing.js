const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

const listingSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        //    type: String,
        //     default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?" ,
        //     set: (v)=> v === "" ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?": v,   // the set method will set the image, here we setted to the default image if the link is not present  
        
        url: String,
        filename: String
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    reviews: [
        {
        type: schema.Types.ObjectId,
        ref: "Review",
        }
    ],
    owner:{
        type: schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async(listing)=>{{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
    
}})


const Listing = new mongoose.model("Listing", listingSchema);
module.exports = Listing;