// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'

// Determina como deve ser salvo no banco de dados, a estrutura dos serviços

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: [true, 'O título é obrigatório'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: false
    },
    description: {
        type: String,
        required: [true, 'A descrição é obrigatória']
    },
    startHour: {
        type: String,
        required: true
    },
    endingHour: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: false,
    },
    scheduled: {
        type: Boolean,
        required: true,
        default: false
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: false
    },
    img: {
        type: String,
        required: false
    },
    paid: {
        type: Boolean,
        required: true,
        default: false
    },
    price: {
        type: Number,
        required: [true, 'The price is required']
    }
});



module.exports = mongoose.model('Service', schema);