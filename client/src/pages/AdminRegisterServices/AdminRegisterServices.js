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
      date: '',
      price: 0,
      img: "", //Image path
      selectedImg: null //Image file
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChangeType = (event) => {
    this.setState({type: event.target.value});
  }

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  handleChangePrice = (event) => {
    this.setState({price: event.target.value});
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

  onChangeImg = (event) =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedImg: event.target.files[0]
    });
  }


  GetSlug = ()=> {

    return this.state.type + this.state.startHour + this.state.date
  }
  
  handleSubmit = async(e)=>{
    try {
      if (this.state.selectedImg === null) {
        alert('Select an image');
        e.persist();
        // e.preventDefault();
        return false;
      }
  
      // Images upload
      let data = new FormData(); 
      data.append('file', this.state.selectedImg);
      let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
      if (res1.status !== 201) 
      {
        alert('Error uploading the image');
        e.persist();
        e.preventDefault();
        return false;
      }

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
          img: `/img/${this.state.selectedImg.name}`,
          price: this.state.price
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
  console.log(this.GetSlug())

  return (
    <div class="admin-register-services">
      <div class="adm_registration">
      
        {/* <!-- New services form --> */}
        <div class="form-popup" id="services">
            <form action="#" class="form-container">
                <h1>Add a new service</h1>

                <label for="type">Tipo do serviço</label>
                <input type="text" placeholder="Insira o tipo do serviço" name="nome" onChange={this.handleChangeType} required/>

                <label for="services_pic">Picture:</label>
                <input type="file" id="services_pic" name="picture" onChange={this.onChangeImg}/>

                <label for="description">Descrição</label>
                <input type="text" placeholder="Descrição do serviço" name="description" onChange={this.handleChangeDescription} required/>

                <label for="price">Price</label>
                <input type="number" placeholder="$" name="price" onChange={this.handleChangePrice} required />

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