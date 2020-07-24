// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'

// Determina como deve ser salvo no banco de dados, a estrutura de pet

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: [true, 'Owner is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  race: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  img: {
    type: String,
    required: [true, 'Image is required'],
    trim: true
  },
  age: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('Pet', schema);