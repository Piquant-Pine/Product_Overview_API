const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let ProductSchema = new mongoose.Schema({
  product_id: {type: Number, unique: true},
  campus: String,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  created_at: Date,
  updated_at: Date,
  features: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feature'
  }],
  productStyles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }]
});

const Product = mongoose.model("Product", ProductSchema);


