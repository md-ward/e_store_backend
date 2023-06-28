const { Schema, default: mongoose } = require("mongoose");


const userSchema = Schema({
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
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true
  },

});



module.exports = mongoose.model('User', userSchema);