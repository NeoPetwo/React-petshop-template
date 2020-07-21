// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

// Aqui ficam as funções que fazem requisições ao banco de dados
// Há funções de retorno baseado em tipo de requisição (por slug, tag, todos os produtos...)
// Além disso funções de adicionar, editar e apagar produtos

exports.get = async () => {
  const res = await Pet.find({}).populate('owner', 'name username');
  return res;
}

exports.getById = async (id) => {
  const res = await Pet.findById(id, 'title description price slug tags img quantity');
  return res;
}

exports.create = async (data) => {
  console.log('repo pet - criando');
  var pet = new Pet(data);
  const res = await pet.save();
  return res;
}

exports.update = async (id, data) => {
  await Pet
    .findByIdAndUpdate(id, {
      $set: {
        owner: data.owner,
        name: data.name,
        description: data.description,
        img: data.img
      }
    });
}

exports.delete = async (id) => {
  await Pet.findByIdAndRemove(id);
}