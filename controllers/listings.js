const Listing = require('../models/listing');

module.exports.index = async (req, res)=> {
    // res.send("Working");
    let allListings = await Listing.find({});
    // .then((res)=>{
    //     console.log(res);
    // })  as await is used hence commented

    res.render("listings/index.ejs", {allListings});
}

module.exports.show = async (req, res)=> {
    let { id } = req.params;
    let data = await Listing.findById(id).populate({path: "reviews", populate:{path: 'author'}}).populate("owner");
    // console.log(data.reviews)
    if(!data){
        req.flash("error", "Listing you are looking for does not exist any more!");
        return res.redirect("/listings");
    }
    // console.log(data);
    res.render("listings/show.ejs", {data});
}

module.exports.new = (req, res)=>{
    res.render("Listings/new.ejs");
}

module.exports.create = async (req, res, next)=> {

    // if(!req.body.listing){
    //     throw new expressError(400, "Send valid data for listing");
    // }

   

    // let{title, desc, url, price, location, country} = req.body;  instead we must create an every name as object(array object) in the new.ejs as listing[title]

    // let listings = req.body;  //all the data is stored in listings var. as js object.
    // let listing = req.body.listing;  // prints the listing object here req.body.listing me jo listing hai vo object hai
    // console.log(listing);
    try{
        let url = req.file.path;
        let filename = req.file.filename;

        let newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;  // save the id of the user creating the listiing
        newListing.image = {url, filename}; // given image url and filename {url, filename} is equivalent to {url:url, filename:filename}
        
        // store location and country in lowercase to make searching easier
        newListing.location = newListing.location.toLowerCase();
        newListing.country = newListing.country.toLowerCase();

        await newListing.save()
        res.redirect("/listings");
    }
    catch(err){
        console.log(err);
    }
    

    // .then((res)=>{
    //     console.log("New Data Added");
    // })
    // .catch((err)=>{
    //     console.log("error occured ");
    // })
    // req.flash("success", "New listing Created!");
    


}

module.exports.edit = async (req, res)=>{
    let {id} = req.params;

    let data = await Listing.findById(id);
    // Listing.findById(id)
    if(!data){
        req.flash("error", "Listing you are looking for does not exist any more!");
        return res.redirect("/listings");
    }

    let originalImageUrl = data.image.url;
    originalImageUrl = originalImageUrl.replace('/upload', '/upload/h_250,w_300');
    res.render("listings/edit.ejs", {data, originalImageUrl});
}

module.exports.update = async (req, res)=>{
    // if(!req.body.listing){
    //     throw new expressError(400, "Send valid data for listing");
    // }

    let { id } = req.params;
    
    // on the below line we are only updating the info comming from the req body 
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing}, {runValidators: true, new: true});

      // store location and country in lowercase to make searching easier
      listing.location = listing.location.toLowerCase();
      listing.country = listing.country.toLowerCase();

    if(typeof req.file != 'undefined'){
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = {url, filename};

        await listing.save();
    }

    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.delete = async (req, res)=>{
    let { id } = req.params;

    // protecting the route (authorization)

    await Listing.findByIdAndDelete(id);
    req.flash("delete", "Listing Deleted!");
    res.redirect("/listings")
}

module.exports.pay = async (req, res)=>{
    res.render("listings/bookListing.ejs")
}