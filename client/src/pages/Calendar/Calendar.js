// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from "react";
import axios from "axios";
import "./Calendar.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import Cookies from 'universal-cookie';


import { SERVER_URL } from "../../variables";

export default class Calendar extends React.Component {
   
  constructor() {
    super();
    this.state = {
      allServices: [],
      servicesOfTheDay: [],
      services2show: ['empty'],
      typesOfServices: [],
      userPets: [],
    };

    this.fetchServices();
    this.fecthTypes();
    this.fetchUserPets(); 
  }

  //Ordena os serviços a serem mostrados
  componentDidUpdate() {
    this.state.services2show.sort(this.compare);
  }

  //Comparação usada na ordenação
  compare = (a, b) => {
    // if (a is less than b by some ordering criterion) {
    if (a.startHour < b.startHour) {
      return -1;
    }
    // if (a is greater than b by the ordering criterion) {
    if (a.startHour > b.startHour) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  //Pega a data do dia atual
  getTodayDate = () => {
    var curr = new Date();
    var date = curr.toISOString().substr(0, 10);
    return date;
  };

  //Requisição para pegar toda a lista de serviços
  fetchServices = async () => {
    
    let res = await axios({
      method: "GET",
      url: `${SERVER_URL}/services`,
    });

    this.setState({
      allServices: res.data,
      services2show: res.data,
      servicesOfTheDay: res.data
	  });
	  this.filterByDate(this.getTodayDate());
  };

  //Requisição para pegar os pets do usuário logado
  fetchUserPets = async () => {
    const cookies = new Cookies();  
    var user = cookies.get('loggedUser');
    if(user !== undefined)
    {
      let res = await axios({
        method: "GET",
        url: `${SERVER_URL}/pets/userpets/${user.id}`,
      });
      this.setState({
        userPets: res.data,
      }); 
    }
    
  }

  //Requisição para pegar os tipos distintos de todos os serviços
  fecthTypes = async () => {
    let res = await axios({
      method: "GET",
      url: `${SERVER_URL}/services/alltypes`,
    });
    this.setState({
      typesOfServices: res.data,
    });
  };

  //Filtrar Por tipo de serviço
  filterByType = (type) => {
    //Reseta Filtro
    let filteredList = this.state.servicesOfTheDay.filter((service) => {
      if (service.type === type) return service;
    });
    this.setState({
      services2show: filteredList,
	  });
    };

  //Filtrar Por data
  filterByDate = (date) => {
	  //Reseta Filtro
    let filteredList = this.state.allServices.filter((service) => {
		
		if (service.date === date)
	  		return service;
    });

    this.setState({
      servicesOfTheDay: filteredList,
      services2show: filteredList,
    });
  };
   

  //Reseta o filtro por tipo
  resetTypeFilter = () => {
    this.setState({
      services2show: this.state.servicesOfTheDay,
    });
  };
  
  handleChangeSelect = (event) => {
    if (event.target.value === "Todos Serviços") this.resetTypeFilter();
    else this.filterByType(event.target.value);
  };

  handleChangeDate = (event) => {
    this.filterByDate(event.target.value);
  };

  render() {
    let cards;
    if (this.state.services2show.length !== 0) {

      //Mostra a mensagem "Loading" enquanto está pegando os serviços no servidor
      cards = this.state.services2show.map((service, index) => {
        if (service === 'empty') {
          return (<h1>Loading <i class="fas fa-spinner fa-spin"></i></h1>)
        }
        return (
          <div
            className={
              index.valueOf() % 2 === 0 ? "bg-darker" : "bg-lighter"
            }
          >
            <ServiceCard service={service} key={index} pets={this.state.userPets} />
          </div>
        );
      });
    } else {
      cards = <h1>There's no service of this type in this day</h1>
    }


    return (
      <div class="calendar">
        <div class="column">
          <div class="banner bg-green row" id="input-bar">
            <select class="box" onChange={this.handleChangeSelect}>
              <option>All services</option>
              {this.state.typesOfServices.map((type, index) => {
                return <option>{type}</option>;
              })}
            </select>
            <h2>Schedule Service</h2>
            <input
              type="date"
              class="box date-box gradient"
              onChange={this.handleChangeDate}
              defaultValue={this.getTodayDate()}
            />

            
          </div>

          <div class="banner bg-white" id="activities-list">
            <br/>
            {cards}
          </div>
        </div>
      </div>
    );
  }
}
