import React from 'react';
import axios from 'axios';

// CSS/SCSS
import './Catalog.scss';
import './bulma-modified.scss';

// Components
import ProductCard from '../../components/ProductCard/ProductCard';

export default class Catalog extends React.Component {
  state = {
    products: [1, 2, 3, 4, 5]
  }

  fetchProdutcts = async () => {
    let res = await axios({
        method: 'get',
        url: 'http://localhost:3001/'
    });
    console.log('=====================ici====================');
    console.log(res.data);
  }

  componentDidMount() {
    this.fetchProdutcts();
  }

  render() {
  return (
    <div class="catalog">
        <div class="banner " id="catalog">
            <div class="row">
                <nav id="sidebar">
                    <ul>
                        <li class="title">Categorias</li>
                        <li class="category"><a href="">Bichinhos de Pelucia</a></li>
                        <li class="category"><a href="">Bolinha</a></li>
                        <li class="category"><a href="">Cordas</a></li>
                        <li class="category"><a href="">...</a></li>

                        <li class="title">Marca</li>
                        <li class="category"><a href="">Marca 1</a></li>
                        <li class="category"><a href="">Marca 2</a></li>
                        <li class="category"><a href="">Marca 3</a></li>
                        <li class="category"><a href="">Marca 4</a></li>
                        <li class="category"><a href="">...</a></li>


                        <li class="title">Raça</li>
                        <li class="category"><a href="">Raças Grandes</a></li>
                        <li class="category"><a href="">Raças Médias</a></li>
                        <li class="category"><a href="">Raças Pequenas</a></li>
                        <li class="category"><a href="">Raças Mini</a></li>
                        <li class="category"><a href="">Raças Gigantes</a></li>
                        <li class="category"><a href="">...</a></li>

                        <li class="title">Idade</li>
                        <li class="category"><a href="">Filhotes</a></li>
                        <li class="category"><a href="">Adultos</a></li>
                        <li class="category"><a href="">Idosos</a></li>
                        <li class="category"><a href="">...</a></li>

                        <li class="title">Preço</li>
                        <li class="category"><a href="">De R$0,00 a R$9,99</a></li>
                        <li class="category"><a href="">De R$10,00 a R$49,99</a></li>
                        <li class="category"><a href="">De R$R$50,00 a R$99,99</a></li>
                        <li class="category"><a href="">...</a></li>

                        <li class="title">Porte</li>
                        <li class="category"><a href="">Pequeno</a></li>
                        <li class="category"><a href="">Médio</a></li>
                        <li class="category"><a href="">Grande</a></li>
                        <li class="category"><a href="">...</a></li>

                    </ul>
                </nav>
                <div id="product-grid" class="column">
                    <h2>Products Catalog</h2>
                    <div class="columns is-multiline">
                        {this.state.products.map((value, index) => {
                            return (
                                <div class="column is-one-third">
                                    <ProductCard key={index} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  }
}