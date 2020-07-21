// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'

// Determina como deve ser salvo no banco de dados, a estrutura de customer

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório'],
  },
  username: {
    type: String,
    required: [true, "O username é obrigatório"]
  },
  email: {
    type: String,
    required: [true, "O email é obrigatório"]
  },
  password: {
    type: String,
    required: [true, "A senha é obrigatória"],
    unique: true
  },
  phone: {
    type: String,
    required: [true, "O telefone é obrigatório"]
  },
  img: {
    type: String,
    required: [true, "A foto também é obrigatória"],
    trim: true
  },
  admin: {
    type: Boolean,
    required: [true, 'O tipo de usuário é obrigatório. Admin true ou false']
  }
});

module.exports = mongoose.model('Customer', schema);