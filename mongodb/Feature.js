
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let FeatureSchema = new mongoose.Schema({
  feature_id: {type: Number, unique: true},
  feature: String,
  value: String,
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
});

const Feature = mongoose.model("Feature", FeatureSchema);