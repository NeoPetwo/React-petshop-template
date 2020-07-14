// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'

// Determina como deve ser salvo no banco de dados, a estrutura dos produtos

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
      type: String,
      required: true,
      trim: true
  },
  slug: {
      type: String,
      required: [true, 'O slug é obrigatório'],
      trim: true,
      index: true,
      unique: true
  },
  description: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  active: {
      type: Boolean,
      required: true,
      default: true
  },
  tags: [{
      type: String,
      required: true
  }],
  img: {
      type: String,
      required: true,
      trim: true
  },
  quantity: {
      type: Number,
      required: true
  }
});


module.exports = mongoose.model('Product', schema);