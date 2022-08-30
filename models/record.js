const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  }, 
  userId: {
    type: Schema.Types.ObjectID,
    ref: 'User',
    index: true,
    required: true,
  }, 
  categoryId: {
    type: Schema.Types.ObjectID,
    ref: 'Category',
    index: true,
    required: true,
  }
})

module.exports = mongoose.model('Record', recordSchema)