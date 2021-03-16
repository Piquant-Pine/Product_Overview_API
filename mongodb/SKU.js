
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let SKUSchema = new mongoose.Schema({
  sku_id: {type: Number, unique: true},
  sku_number: String,
  quantity: Number,
  size: String,
  style_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }
});

const SKU = mongoose.model("SKU", SKUSchema);