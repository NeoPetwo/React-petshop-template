// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminServiceCard.scss';

import { SERVER_URL } from '../../variables';
import axios from 'axios';

export default class adminServiceCard extends React.Component {
  
  // Delete service requisição
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
    let scheduledInfo;

    //Muda o render se o serviço estiver agendado
    if(!this.props.service.scheduled) {
      scheduledInfo = <React.Fragment >
                      <div className = "scheduled-true">
                        <span className="bold ">Service not scheduled</span>
                      </div>
                      </React.Fragment>;
    }
    else {
      scheduledInfo =  <React.Fragment >
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



    return (
      <div class="admin-service-card ">
        <div class = "service row">        
          <div class="hour-section">Hour:<br/> <span class = "hour-text">{this.props.service.startHour} - {this.props.service.endingHour}</span></div>
          <form class="info row">
            <p class="description">
              <b>Price:</b> R$ {(this.props.service.price).toFixed(2)}<br/>
              <b>Description:</b><br/>
              {this.props.service.description}
              <br/>
              {this.props.service.date}
            </p>
            {scheduledInfo}
            <img src={`${this.props.service.img}`} />
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