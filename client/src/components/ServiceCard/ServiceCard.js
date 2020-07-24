// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React, { Fragment } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { SERVER_URL} from '../../variables';
import './ServiceCard.scss';

export default class serviceCard extends React.Component {
  state = {
    selectedPet: null
  }



  //requisição para marcar o serviço como agendado para o usuário atualmente logado
  schedule = async () => {
    console.log(this.state.selectedPet);
    //se o pet não foi selecionado não continua a requisição
    if (this.state.selectedPet === null) {
      alert("You didn't select a pet yet");
      return false;
    }
    
    const cookies = new Cookies();
    const user = cookies.get('loggedUser');
    try {
      await axios({
        method: 'PUT',
        url: `${SERVER_URL}/services/${this.props.service._id}`,
        data: {
          type: this.props.service.type,
          description: this.props.service.description,
          startHour: this.props.service.startHour,
          endingHour: this.props.service.endingHour,
          date: this.props.service.date,
          slug: this.props.service.slug,
          pet: this.state.selectedPet._id,
          scheduled: true,
          customer: user.id,
          price: this.props.service.price,
          img: this.props.service.img,
          paid: false,
        }
      });
      alert('Service scheduled');
      //Refresh page
      window.location.reload(false);
    } catch (err) {
      console.log('Error', err);
    }
  }

  //seleciona o pet que o serviço se refere
  handleSelect = (e) => {
    const index = e.target.value;
    
    this.setState({
      selectedPet: this.props.pets[index]
    });
  }

  render() {

    const cookies = new Cookies();  
    var user = cookies.get('loggedUser');
      let options;
      let scheduleButton;

      if(!this.props.service.scheduled) {
        scheduleButton = <button onClick={this.schedule} class="schedule-button" type="submit">Schedule</button>
      }
      else {
        scheduleButton =  <React.Fragment >
                          <div class = "scheduled-true">
                            <span className="bold busyHour">Service scheduled</span>
                            <br/>
                            <br/>
                            <span class = "bold"> Customer: </span>{this.props.service.customer.name}
                            <br/>
                            <span class = "bold">Pet: </span>{this.props.service.pet.name}
                          </div>
                          </React.Fragment>;
      }

      if(user !== undefined) {
        if (!this.props.service.scheduled) {
          options = <React.Fragment>
                      <option value="0">- Select a Pet -</option>
                      {this.props.pets.map((pet, index) => {
                          return (
                              <option key={index} value={index}>{pet.name}</option>
                          );
                      })}
                    </React.Fragment>;
        } else {
          options = <option>Service already scheduled</option>
        }
      }
      else {
        options = <option>Login first to select a pet</option>
      }

    return (
      <div class="service-card ">
        <div class = "service row">        
          <div class="hour-section">Hour:<br/> <span class = "hour-text">{this.props.service.startHour} - {this.props.service.endingHour}</span></div>
          <div class="info row">
            <div class = "column">
                    <p class= "service-name">Type:<b> {this.props.service.type}</b></p>
                    <select className ="select-pet" onChange={this.handleSelect}>
                      {options}
                    </select>
            </div>
            
            <p class="description">
              <b>Price:</b> R$ {(this.props.service.price).toFixed(2)}<br/>
                <b>Description:</b><br/>
                  {this.props.service.description}
                <br/>
                  {this.props.service.date}
            </p>

            <img src={`${this.props.service.img}`} />
            
            {scheduleButton}
          </div>
        </div>
      </div>
    );
  }
}