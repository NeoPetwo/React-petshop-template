// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
'use strict'
const repository = require('../repositories/orderRepository');
const cartRepository = require('../repositories/cartRepository');
const productRepository = require('../repositories/productRepository');

// Arquivo que lida com as requisições de acordo com seu tipo (GET, POST, PUT, DELETE)
// Este arquivo é importado em routes

// As funções que lidam com o banco de dados estão em repository

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: err
    })
  } 
}

// Aqui cria-se um objeto data, que é enviado à função em repository.js a qual lida com o banco de dados
exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({
      message: "Pedido criado com sucesso"
    })
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: err
    })
  }
}

// Subtrai a quantidade do estoque disponível, adiciona a quantidade em vendidos
// Retira os produtos do carrinho do usuário
exports.buy = async (req, res, next) => {
  try {
    console.log('1');
    //Seria bom se as operações abaixo fossem atômicas, ou tudo ou nada

    //Obter o carrinho do usuário
    let customerCart = await cartRepository.getByCustomerId(req.body.customer);
    console.log('2', customerCart);

    //Para cada produto do carrinho, fazer um get do produto, alterar as qtds subtraindo e somando, depois um update para o produto do estoque coms as qtds já certas
    customerCart.items.forEach(async (item, index) => {
      console.log('3', index, item);
      let oldProduct = await productRepository.getBySlug(item.product.slug);
      console.log('4', oldProduct);
      console.log('4.3', oldProduct[0]);
      console.log('4.5', oldProduct[0].quantity - customerCart.items[index].quantity);
      oldProduct[0].quantity -= customerCart.items[index].quantity;
      oldProduct[0].quantitySold += customerCart.items[index].quantity;
      const updatedProduct = {
        title: oldProduct[0].title,
        description: oldProduct[0].description,
        price: oldProduct[0].price,
        slug: oldProduct[0].slug,
        quantity: oldProduct[0].quantity,
        quantitySold: oldProduct[0].quantitySold,
        img: oldProduct[0].img,
        tags: oldProduct[0].tags
      };
      await productRepository.update(oldProduct[0]._id, updatedProduct);
      console.log('5');
    });

    //Apagar os produtos do carrinho do usuário fazendo um update
    const newCart = {
      customer: customerCart.customer._id,
      status: customerCart.status,
      items: []
    };
    await cartRepository.update(customerCart._id, newCart);
    console.log('6');

    //Create itemsArray
    let itemsToSave = customerCart.items.map((item, index) => {
      return ({
        quantity: item.quantity,
        product: item.product._id
      });
    });
    console.log('7', itemsToSave);

    const data = {
      customer: req.body.customer,
      items: itemsToSave
    };
  
    await repository.create(data);
    console.log('8');
    res.status(201).send({
      message: "Compra realizada com sucesso :D"
    });
  } catch (err) {
    res.status(500).send({
      message: "Falha ao processar sua requisição de compra",
      error: err
    })
  }
}

