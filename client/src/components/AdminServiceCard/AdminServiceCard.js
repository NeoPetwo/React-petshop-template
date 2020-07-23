import React from 'react';
import { Link } from 'react-router-dom';
import './AdminServiceCard.scss';

import { SERVER_URL } from '../../variables';
import axios from 'axios';

export default class adminServiceCard extends React.Component {
  
  handleDelete = async () => {
    console.log("teste");
    await axios({
      method: 'DELETE',
      url: `${SERVER_URL}/services`,
      data: {
        id: `${this.props.service._id}`
      }
    });

    //Refresh page
    window.location.reload(false);
  }



  render() {
    return (
      <div class="admin-service-card ">
        <div class = "service row">        
          <div class="hour-section">Hour:<br/> <span class = "hour-text">{this.props.service.startHour} - {this.props.service.endingHour}</span></div>
          <form class="info row">
            <div class = "column">
                    <p class= "service-name">Type:<b> {this.props.service.type}</b></p>
                    <select class = "select-pet">
                        <option>Select your pet</option>
                        <option>My_pet 1</option> 
                        <option>My_pet 2</option> 
                        <option>My_pet 3</option> 
                        <option>My_pet 4</option> 
                    </select>
            </div>
            <p class="description">
                    <b>Description:</b><br/>
                    {this.props.service.description}
                    <br/>
                    {this.props.service.date}
            </p>
            <div >
                {/* <!-- Icons by Icons8 --> */}
                <ul class="sidebar__nav">
                    <li><Link to={`/admin/register/services`} class="link"> <i class="fas fa-plus"></i> Add</Link></li>
                    <Link onClick={this.handleDelete} class="link"><li><i class="fas fa-trash-alt"></i> Remove</li></Link>
                    <li><Link to={''} class="link"> <i class="fas fa-exchange-alt"></i> Edit</Link></li>
                </ul>
            </div>
            
            {/* <input class="schedule-button" type="submit" value="Schedule"/> */}
          </form>
        </div>
      </div>
    );
  }
}