const express = require("express");
const router = express.Router(); // router object is created
const Listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync.js");
const flash = require("connect-flash");
const passport = require("passport");
const { validateListing, isLoggedIn, saveRedirectUrl, isOwner } = require("../middlewares/middleware.js");
const { populate } = require("../models/user.js");

// Input type option selection function
// const {selectedOption } = require('../public/JavaScript/select.js');

//MVC
const listingController = require('../controllers/listings.js');
const route = require("color-convert/route.js");

// multer for parsing the multipart/form data
const multer  = require('multer')

// requiring cloudinary and storage 
const {storage} = require('../cloudConfig.js');

const upload = multer({storage})  //initialize
// const upload = multer({dest:'uploads/' })  


// Index Route:  we will accept GET req on "/listing" and will return all listing
router.get('/', wrapAsync(listingController.index));

// New Route
router.get("/new", isLoggedIn, listingController.new)

// Create Route 
router.post("/", upload.single('listing[image]'), validateListing, wrapAsync(listingController.create));

// the below code is for testing the cloud storage
// router.post('/', upload.single('listing[image]'), (req, res) => {
//         res.send(req.file);     // Send file details as response

// });


// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner,  wrapAsync(listingController.edit));

// Update Route
router.put("/:id", isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.update));

//Delete Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.delete));

// Search Route 
router.get('/search',   async (req,res)=>{
    let {selectedValue, searchTerm} = req.query;
    // console.log(searchTerm, selectedValue);
    console.log(!selectedValue)
    let data;
    
    if (!selectedValue) {
        return res.status(400).send("Invalid request: 'selectedValue' or 'searchTerm' is missing.");
    }

    
    if(selectedValue == 'city'){
        let city = searchTerm.toLowerCase();
        console.log(city);
        data = await Listing.find({location: city});
        console.log(data.length);
        
    }
    else{
        let country = searchTerm.toLowerCase();
        console.log(country);
        data = await Listing.find({country: country});
        console.log(data);
    }

    res.render('listings/search.ejs', {data});
})

// Pay Route
router.get("/:id/pay", wrapAsync(listingController.pay));

//Read (Show) Route : it will show the all the data about a particular list item
router.get("/:id", isLoggedIn,  wrapAsync(listingController.show));




module.exports = router;