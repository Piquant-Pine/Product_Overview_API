const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let StyleSchema = new mongoose.Schema({
  style_id: {type: Number, unique: true},
  name: String,
  originalPrice: String,
  sale_price: String,
  default: Boolean,
  skus: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SKU'
  }],
  photos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo'
  }],
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
});

const Style = mongoose.model("Style", StyleSchema);