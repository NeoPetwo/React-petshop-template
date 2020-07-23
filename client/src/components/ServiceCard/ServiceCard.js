import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { SERVER_URL} from '../../variables';
import './ServiceCard.scss';

export default class serviceCard extends React.Component {
  state = {
    selectedPet: "Whatever"
  }

  schedule = async () => {
    const cookies = new Cookies();
    const user = cookies.get('loggedUser');
    await axios.get({
      method: 'PUT',
      url: `${SERVER_URL}/services/${this.props.service.id}`,
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
  }

  handleSelect = (e) => {
    const index = e.target.value;
    this.setState({
      selectedPet: this.props.service.pets[index]
    });
  }

  render() {
    console.log(this.props.service);
    return (
      <div class="service-card ">
        <div class = "service row">        
          <div class="hour-section">Hour:<br/> <span class = "hour-text">{this.props.service.startHour} - {this.props.service.endingHour}</span></div>
          <form class="info row">
            <div class = "column">
                    <p class= "service-name">Type:<b> {this.props.service.type}</b></p>
                    {/* <select className ="select-pet" onChange={this.handleSelect}>
                        <option>Select your pet</option>
                        <option>My_pet 1</option> 
                        <option>My_pet 2</option> 
                        <option>My_pet 3</option> 
                        <option>My_pet 4</option> 
                    </select> */}

                    <select className ="select-pet" onChange={this.handleSelect}>
                      <option value="0">- Select a Pet -</option>
                      {this.props.service.pets.map((pet, index) => {
                          return (
                              <option key={index} value={index}>{pet.name}</option>
                          );
                      })}
                    </select>
            </div>
            
            <p class="description">
                    <b>Description:</b><br/>
                    {this.props.service.description}
                    <br/>
                    {this.props.service.date}
            </p>
            <button onClick={this.schedule} class="schedule-button" type="submit">Schedule</button>
          </form>
        </div>
      </div>
    );
  }
}