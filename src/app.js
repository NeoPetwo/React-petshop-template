// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

// Framework express
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Conectando com o server do Mongo
mongoose.connect(config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// Carregando os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const Service = require('./models/service');

//Importando os arquivos que lidam com as rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');
const customerRoute = require('./routes/customerRoute');
const orderRoute = require('./routes/orderRoute');
const serviceRoute = require('./routes/serviceRoute');

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);
app.use('/services', serviceRoute);

module.exports = app;