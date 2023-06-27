const { Schema, default: mongoose } = require("mongoose");


const signup_schema = Schema({
    fname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: false
    },

    email: {

        type: String,
        required: true
        , unique: true
    },
    password: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('SignUp', signup_schema);