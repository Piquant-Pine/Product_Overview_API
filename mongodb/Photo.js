
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let PhotoSchema = new mongoose.Schema({
  thumnail_url: String,
  url: Number,
  style_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }
});

const Photo = mongoose.model("Photo", PhotoSchema);