const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main()
.then((res)=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log("connection failed");
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
}

const initDB = async () => {
    // if data is already available in database we will deletre it first
    await Listing.deleteMany({});

    // as all the data is deleted from the databse we will insert our data
    initData.data = initData.data.map((obj) => ({ ...obj, owner: '671fb9e4dd9120753842b4bf' }))
    // map har obj ke andar owner id ko set kar dega
    await Listing.insertMany(initData.data);  // initdata is an object

    console.log("data is initialised in the DB");
}

initDB();