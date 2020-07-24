// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Service = mongoose.model('Service');

// Funções para o banco de dados, no contexto de serviços
// Funções para CRUD básico

//Pega todos os serviços
exports.get = async () => {
  const res = await Service.find({}).populate('customer').populate('pet');
  return res;
}

//pega o serviço pelo slug
exports.getBySlug = async (slug) => {
  const res = await Service.findOne({ 
    slug: slug
  }, 'title description price slug');
  return res;
}

//Pega um serviço a partir de seu id
exports.getById = async (id) => {
  const res = await Service.findById(id);
  return res;
}

//Pega os serviços que estão ligados a determinado usuário
exports.getByUserId = async (userid) => {
  const res = await Service.find({customer: userid});
  return res;
}

//Pega os serviços que estão ligados a determinado pet
exports.getByPetId = async (petid) => {
  const res = await Service.find({pet: petid});
  return res;
}

//Pega todos os tipos distintos de serviço
exports.getTypes = async () => {
  const res = await Service.collection.distinct("type");

  return res;
}




//Cria um novo serviço
exports.create = async (data) => {
  
  var service = new Service(data);
  const res = await service.save();
  return res;
}

//Atualiza um serviço especifico
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

//Atualiza o status de um serviço para pago ou não
exports.updateStatus = async (id, newStatus) => {
  await Service
    .findByIdAndUpdate(id, {
      $set: {
        paid: newStatus,
      }
    });
}

//Deleta um serviço especifico
exports.delete = async (id) => {
  await Service.findByIdAndRemove(id);
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
