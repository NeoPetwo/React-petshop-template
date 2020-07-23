import React from 'react';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';
import { SERVER_URL } from '../../variables';
import axios from 'axios';


export default class AdminRegisterServices extends React.Component {
  
  constructor() {
		super();
		this.state = {
      type :'',
      description: '',
      startHour: '',
      endingHour: '',
      date: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChangeType = (event) => {
    this.setState({type: event.target.value});
  }

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  handleChangeStartHour = (event) => {
    this.setState({startHour: event.target.value});
  }

  handleChangeEndingHour = (event) => {
    this.setState({endingHour: event.target.value});
  }

  handleChangeDate = (event) => {
    this.setState({date: event.target.value});
  }

  GetSlug = ()=> {
    return this.state.type + this.state.startHour + this.state.date
  }
  
  handleSubmit = async()=>{
    try {
      const res = await axios({
        method: 'POST',
        url: `${SERVER_URL}/services`,
        data: {
          type: this.state.type,
          slug: this.GetSlug(),
          description: this.state.description,
          startHour: this.state.startHour,
          endingHour: this.state.endingHour, 
          date: this.state.date,
        }
      });

      if (res.status !== 201) {
        alert("Problema em submeter");
      } else {
        alert('Novo serviço cadastrado');
      }

    } catch (err) {
      console.log(err);
      alert('Erro no cadastro');
    }
   
  }

  render() {
  

  return (
    <div class="admin-register-services">
      <div class="adm_registration">
      
        {/* <!-- New services form --> */}
        <div class="form-popup" id="services">
            <form action="#" class="form-container">
                <h1>Update a service</h1>

                <label for="type">Tipo do serviço</label>
                <input type="text" placeholder="Insira o tipo do serviço" name="nome" onChange={this.handleChangeType} required/>

                <label for="description">Descrição</label>
                <input type="text" placeholder="Descrição do serviço" name="description" onChange={this.handleChangeDescription} required/>

                <label for="startHour">Hora de começo</label>
                <input type="text" placeholder="hh:mm" name="startHour" onChange={this.handleChangeStartHour} required/>
                
                <label for="endingHour">Hora de fim</label>
                <input type="text" placeholder="hh:mm" name="endingHour" onChange={this.handleChangeEndingHour}required/>

                <label for="date">Data</label>
                <input type="date" placeholder="date" name="date" onChange={this.handleChangeDate} required/>

                <button type="submit" class="btn" onClick={this.handleSubmit}>Submit</button>
                <button type="button" class="btn cancel" onclick="closeForm(4)">Cancel</button>
            </form>
        </div>

      </div>
    </div>
    
  );
  }
}