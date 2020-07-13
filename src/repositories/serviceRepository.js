// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Service = mongoose.model('Service');

// Funções para o banco de dados, no contexto de serviços
// Funções para CRUD básico

exports.get = async () => {
  const res = await Service.find({});
  return res;
}

exports.getBySlug = async (slug) => {
  const res = await Service.findOne({ 
    slug: slug
  }, 'title description price slug');
  return res;
}

exports.getById = async (id) => {
  const res = await Service.findById(id);
  return res;
}

// Nessa função utilizamos o regex
exports.getPartnerHours = async (data) => {
  const res = await Service.find({
    partner: { $regex: new RegExp(data.name.toLowerCase(), "i") } ,
    hours: { $in: data.hours }
    //Importante --> Query operators: https://docs.mongodb.com/manual/reference/operator/query/#query-selectors
  }, 'title partner');

  return res;
}

exports.create = async (data) => {
  var service = new Service(data);
  const res = await service.save();
  return res;
}

exports.update = async (id, data) => {
  await Service
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
  await Service.findByIdAndRemove(id);
}