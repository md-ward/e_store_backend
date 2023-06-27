const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    product_name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    rate: {
      type: Number,
      required: false,
      min: 0,
      max: 5
    },
    added_date: {
      type: Date,
      default: Date.now
    },
    product_type: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: false,
      validate: [imagesLimit, '{PATH} exceeds the limit of 4']
    }
  });
  function imagesLimit(val) {
    return val.length <= 4;
  }
module.exports = mongoose.model('productModel', productSchema);