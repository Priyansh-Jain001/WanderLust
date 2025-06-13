const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // username: {
    //     type: String
    // },
    email: {
        type: String,
        required: true ,
    },
//     password: {
//         type: String
//     } ,
})

// plugin is ued as it automatically defines username and password for the userSchema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);