import React, { Fragment } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { SERVER_URL} from '../../variables';
import './ServiceCard.scss';





export default class serviceCard extends React.Component {
  

  state = {
    selectedPet: "Whatever"
  }

  schedule = async () => {
    console.log('foi');
    const cookies = new Cookies();
    const user = cookies.get('loggedUser');
    try {
      console.log('service', this.props.service);
      console.log('selectedPet', this.state.selectedPet._id);
      console.log('user id', user.id);
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
          customer: user.id
        }
      });
      alert('Service scheduled')
    } catch (err) {
      console.log('Error', err);
    }
  }

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

      let scheduleButton
      if(!this.props.service.scheduled){
        scheduleButton = <button onClick={this.schedule} class="schedule-button" type="submit">Schedule</button>
      }
      else{
        scheduleButton =  <React.Fragment >
                          <div class = "scheduled-true">
                            <span class = "bold">Serviço Agendado</span>
                            <br/>
                            <br/>
                            <span class = "bold"> Cliente: </span>{this.props.service.customer.name}
                            <br/>
                            <span class = "bold">Pet: </span>{this.props.service.pet.name}
                          </div>
                          </React.Fragment>;
      }

      if(user !== undefined)
      {

          options = <React.Fragment>
                      <option value="0">- Select a Pet -</option>
                      {this.props.pets.map((pet, index) => {
                          return (
                              <option key={index} value={index}>{pet.name}</option>
                          );
                      })}
                    </React.Fragment>;
      }
      else
      {
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
                <b>Description:</b><br/>
                  {this.props.service.description}
                <br/>
                  {this.props.service.date}
            </p>
            {scheduleButton}
          </div>
        </div>
      </div>
    );
  }
}