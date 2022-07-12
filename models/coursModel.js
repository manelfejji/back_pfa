const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CoursSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  nbrvid: {
    type: Number,
  },
  nbrarticle: {
    type: Number,
  },
  created:{
      type:Date,
      default:Date.now( )
  },
  updated:{
    type:Date,
    default:Date.now( )
  }
});

module.exports = mongoose.model('Cours', CoursSchema);
