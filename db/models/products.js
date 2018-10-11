var mongoose = require('mongoose');
const validator = require('validator');

var Product = mongoose.model('Product',{
    name:{
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true
    },
    price: {
      type: Number,
      require: true
    }
});

module.exports = {Product};