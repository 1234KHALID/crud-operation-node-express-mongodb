const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  details: String
});

module.exports = mongoose.model("Product", productSchema);