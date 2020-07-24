// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

// Aqui ficam as funções que fazem requisições ao banco de dados
// Há funções de retorno baseado em tipo de requisição (por slug, tag, todos os produtos...)
// Além disso funções de adicionar, editar e apagar produtos

//Pega todos os pets
exports.get = async () => {
  const res = await Pet.find({}).populate('owner', 'name username');
  return res;
}

//pegas um pet especifico
exports.getById = async (id) => {
  const res = await Pet.findById(id);
  return res;
}

//pega todos os pets de um usuário
exports.getPetsByUserId = async (userid) => {
  const res = await Pet.find({owner: userid});
  return res;
}

//Cria um novo pet
exports.create = async (data) => {
  var pet = new Pet(data);
  const res = await pet.save();
  return res;
}

//Atualiza as informações dos pets
exports.update = async (id, data) => {
  await Pet
    .findByIdAndUpdate(id, {
      $set: {
        owner: data.owner,
        name: data.name,
        description: data.description,
        img: data.img,
        race: data.race,
        age: data.age
      }
    });
}

//Deleta o pet
exports.delete = async (id) => {
  await Pet.findByIdAndRemove(id);
}