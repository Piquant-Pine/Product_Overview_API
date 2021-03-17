const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let ProductSchema = new mongoose.Schema({
  product_id: {type: Number, unique: true},
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  created_at: Date,
  updated_at: Date,
  features: [{
    features_id: {type: Number, unique: true},
    feature: String,
    value: String,
  }],
  productStyles: [{
    style_id: {type: Number, unique: true},
    name: String,
    original_price: Number,
    sale_price: Number,
    default: Boolean,
    photos: [{
      photo_id: {type: Number, unique: true},
      thumnail_url: String,
      url: String
    }],
    skus: [{
      sku_id: {type: Number, unique: true},
      quantity: Number,
      size: String
    }]
  }]
});

const Product = mongoose.model("Product", ProductSchema);


