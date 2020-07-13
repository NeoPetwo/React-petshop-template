// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Aqui ficam as funções que fazem requisições ao banco de dados
// Há funções de retorno baseado em tipo de requisição (por slug, tag, todos os produtos...)
// Além disso funções de adicionar, editar e apagar produtos

exports.get = async () => {
  const res = await Product.find({
    active: true
  }, 'title price slug');
  return res;
}

exports.getBySlug = async (slug) => {
  const res = await Product.findOne({ 
    active: true,
    slug: slug
  }, 'title description price slug tags');
  return res;
}

exports.getBySlug = async (id) => {
  const res = await Product.findById(id);
  return res;
}

exports.getByTag = async (tag) => {
  const res = await Product.find({
    active: true,
    tags: tag
  }, 'title description price slug tags');
  return res;
}

exports.create = async (data) => {
  var product = new Product(data);
  const res = await product.save();
  return res;
}

exports.update = async (id, data) => {
  await Product
    .findByIdAndUpdate(id, {
      $set: {
        title: data.title,
        description: data.description,
        price: data.price,
        slug: data.slug,
      }
    });
}

exports.delete = async (id) => {
  await Product.findByIdAndRemove(id);
}