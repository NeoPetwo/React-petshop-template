// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Service = mongoose.model('Service');

// Funções para o banco de dados, no contexto de serviços
// Funções para CRUD básico

exports.get = async () => {
  const res = await Service.find({}).populate('customer').populate('pet');
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

exports.getByUserId = async (userid) => {
  const res = await Service.find({customer: userid});
  return res;
}

exports.getByPetId = async (petid) => {
  const res = await Service.find({pet: petid});
  return res;
}

exports.getTypes = async () => {
  const res = await Service.collection.distinct("type");

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
        scheduled: data.scheduled,
        type: data.type,
        description: data.description,
        slug: data.slug,
        startHour: data.startHour,
        endingHour: data.endingHour,
        data: data.data,
        pet: data.pet,
        customer: data.customer,
        img: data.img,
        paid: data.paid,
        price: data.price,
      }
    });
}

exports.updateStatus = async (id, newStatus) => {
  await Service
    .findByIdAndUpdate(id, {
      $set: {
        paid: newStatus,
      }
    });
}

exports.delete = async (id) => {
  await Service.findByIdAndRemove(id);
}