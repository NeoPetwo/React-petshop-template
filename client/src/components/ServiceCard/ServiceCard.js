import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';

export default class serviceCard extends React.Component {
  render() {
    return (
      <div class="service-card ">
        <div class = "service row">        
          <div class="hour-section">Hour:<br/> <span class = "hour-text">{this.props.service.startHour} - {this.props.service.endingHour}</span></div>
          <form class="info row">
            <div class = "column">
                    <p class= "service-name">Type:<b> {this.props.service.type}</b></p>
                    <select class = "select-pet">
                        <option>Select your pet</option>
                        {this.props.pets.map((pet, index) => {
                          return <option>{pet.name}</option>;
                        })}
                    </select>
            </div>
            
            <p class="description">
                <b>Description:</b><br/>
                  {this.props.service.description}
                <br/>
                  {this.props.service.date}
            </p>
            <input class="schedule-button" type="submit" value="Schedule"/>
          </form>
        </div>
      </div>
    );
  }
}