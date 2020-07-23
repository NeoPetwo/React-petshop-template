import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';
import Cookies from 'universal-cookie';




export default class serviceCard extends React.Component {
  

  
  
  
  render() {

    const cookies = new Cookies();  
    var user = cookies.get('loggedUser');

    let options;

    
      if(user !== undefined)
      {

          options = <React.Fragment>
                      <option>Select your pet</option>
                        {this.props.pets.map((pet, index) => {
                          return <option>{pet.name}</option>;
                        })}
                    </React.Fragment>;
      }
      else
        options = <option>Login first to select a pet</option>
        

    return (
      <div class="service-card ">
        <div class = "service row">        
          <div class="hour-section">Hour:<br/> <span class = "hour-text">{this.props.service.startHour} - {this.props.service.endingHour}</span></div>
          <form class="info row">
            <div class = "column">
                    <p class= "service-name">Type:<b> {this.props.service.type}</b></p>
                    <select class = "select-pet">
                        {options}
                        
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