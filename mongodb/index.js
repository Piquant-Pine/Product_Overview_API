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
  created_at: String,
  updated_at: String,
  features: { type : Array , "default" : [] },
  productStyles: { type : Array , "default" : [] },
});


let StyleSchema = new mongoose.Schema({
  style_id: {type: Number, unique: true},
  name: String,
  originalPrice: String,
  sale_price: String,
  default: Boolean,
  skus: { type : Array , "default" : [] },
  photos: { type : Array , "default" : [] },
});


let FeatureSchema = new mongoose.Schema({
  feature_id: {type: Number, unique: true},
  value: String,
});