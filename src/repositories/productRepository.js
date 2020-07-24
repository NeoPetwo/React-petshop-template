// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Aqui ficam as funções que fazem requisições ao banco de dados
// Há funções de retorno baseado em tipo de requisição (por slug, tag, todos os produtos...)
// Além disso funções de adicionar, editar e apagar produtos

//Pega as informações de todos os produtos ativos
exports.get = async () => {
  const res = await Product.find({
    active: true
  }, 'title description price slug tags img quantity quantitySold');
  return res;
}

//Pega um produto por seu slug
exports.getBySlug = async (slug) => {
  const res = await Product.findOne({ 
    active: true,
    slug: slug
  }, 'title description price slug tags img quantity');
  return res;
}
exports.getBySlug = async (slug) => {
  const res = await Product.find({slug: slug});
  return res;
}


//Pega um produto pela tag
exports.getByTag = async (tag) => {
  const res = await Product.find({
    active: true,
    tags: tag
  }, 'title description price slug tags img quantity');
  return res;
}

//Pega todas as tags distintas entre os produtos
exports.getTags = async () => {
  const res = await Product.collection.distinct("tags");
  return res;
}

//Cria um produto
exports.create = async (data) => {
  var product = new Product(data);
  const res = await product.save();
  return res;
}

//Atualiza um produto
exports.update = async (id, data) => {
  await Product
    .findByIdAndUpdate(id, {
      $set: {
        title: data.title,
        description: data.description,
        price: data.price,
        slug: data.slug,
        quantity: data.quantity,
        quantitySold: data.quantitySold,
        img: data.img,
        tags: data.tags
      }
    });
}

//Deleta um produto especifico
exports.delete = async (id) => {
  await Product.findByIdAndRemove(id);
}