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

  componentDidUpdate() {
    this.state.services2show.sort(this.compare);
  }

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

  getTodayDate = () => {
    var curr = new Date();
    var date = curr.toISOString().substr(0, 10);
    return date;
  };

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

  fecthTypes = async () => {
    let res = await axios({
      method: "GET",
      url: `${SERVER_URL}/services/alltypes`,
    });
    this.setState({
      typesOfServices: res.data,
    });
  };

  filterByType = (type) => {
    //Reseta Filtro
    let filteredList = this.state.servicesOfTheDay.filter((service) => {
      if (service.type === type) return service;
    });
    this.setState({
      services2show: filteredList,
	  });
    };

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
      cards = this.state.services2show.map((service, index) => {
        if (service === 'empty') {
          return (<h1>Loading...</h1>)
        }
        return (
          <div
            className={
              index.valueOf() % 2 == 0 ? "bg-darker" : "bg-lighter"
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
              <option>Todos Serviços</option>
              {this.state.typesOfServices.map((type, index) => {
                return <option>{type}</option>;
              })}
            </select>
            <h2>Schedule Service</h2>

            <input
              type="date"
              class="box"
              onChange={this.handleChangeDate}
              defaultValue={this.getTodayDate()}
            />
          </div>

          <div class="banner bg-white" id="activities-list">
            <br/>
            {/* {this.state.services2show.map((service, index) => {
              return (
                <div
                  className={
                    index.valueOf() % 2 == 0 ? "bg-darker" : "bg-lighter"
                  }
                >
                  <ServiceCard service={service} key={index} pets={this.state.userPets} />
                </div>
              );
            })} */}
            {cards}
          </div>
        </div>
      </div>
    );
  }
}
