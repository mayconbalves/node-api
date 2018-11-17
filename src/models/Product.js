const mongoose = require('mongoose')

const ProductScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Product', ProductScheme)