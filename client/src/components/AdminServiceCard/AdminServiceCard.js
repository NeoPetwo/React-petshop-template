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
                    <li><Link to={`/admin/services/update/${this.props.service._id}`} class="link"> <i class="fas fa-exchange-alt"></i> Edit</Link></li>
                </ul>
            </div>
            
            {/* <input class="schedule-button" type="submit" value="Schedule"/> */}
          </form>
        </div>
      </div>
    );
  }
}