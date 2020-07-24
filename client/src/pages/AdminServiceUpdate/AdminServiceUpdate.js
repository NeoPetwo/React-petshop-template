// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import '../AdminRegisterAdmin/AdminRegisterAdmin.scss';
import { SERVER_URL } from '../../variables';
import axios from 'axios';


export default class AdminServiceUpdate extends React.Component {
  
  constructor(props) {
		super(props);
		this.state = {
      id: 0,
      type :'',
      description: '',
      startHour: '',
      endingHour: '',
      date: '',
      slug: '',
      price: 0,
      img: "", //Image path
      selectedImg: null //Image file
    };
    this.fetchInfo();
	}


  //Requisição para pegar a informação do serviço a partir do id no url
  fetchInfo = async () => {
    const serviceId  = this.props.match.params;
    console.log(serviceId._id)
    try{
    let res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/services/admin/${serviceId._id}`
    });
    console.log(res.data);
    

    this.setState({
        id: res.data._id,
        type: res.data.type,
        price: res.data.price,
        description: res.data.description,
        startHour: res.data.startHour,
        endingHour: res.data.endingHour,
        date: res.data.date,
        img: res.data.img,
        slug: res.data.slug,
    }); 
    }
    catch(err){
      console.log(err)
      alert('Erro no get');
    }
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
  
  //Requisição para editar o serviço
  handleSubmit = async(e)=>{
    try{
      if (this.state.selectedImg !== null) {
        //Image upload
        let data = new FormData(); 
        data.append('file', this.state.selectedImg);
        let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
        if (res1.status !== 201) {
        alert('Error uploading the image');
        e.persist(); // e.preventDefault();
        return false;
        }
      }

      //Define img path
      let img = null;
      if (this.state.selectedImg === null || this.state.selectedImg === undefined) {
          img = this.state.img;
      } else {
          img = `/img/${this.state.selectedImg.name}`;
      }

      let res = await axios({
        method: 'PUT',
        url: `${SERVER_URL}/services/${this.state.id}`,
        data: {
          type: this.state.type,
          description: this.state.description,
          slug: this.state.slug,
          price: this.state.price,
          startHour: this.state.startHour,
          img: img,
          endingHour: this.state.endingHour,
          date: this.state.date
        }
      });

      this.props.history.push('/admin/services');
      e.persist(); // e.preventDefault();
      if(res.status === 500)
        alert('Service updated!');

      }
    catch(err){
      console.log(err);  
      alert('Problem when submitting');
    }
  }
  
  
  
  render() {

  return (
    <div class="admin-register-services">
      <div class="adm_registration">
      
        {/* <!-- New services form --> */}
        <div class="form-popup" id="services">
            <div class="form-container">
                <h1>Update service</h1>

                <label for="type">Tipo do serviço</label>
                <input type="text" value={this.state.type} name="nome" onChange={this.handleChangeType} required/>

                <label for="services_pic">Picture:</label>
                <input type="file" id="services_pic" name="picture" onChange={this.onChangeImg}/>

                <label for="description">Descrição</label>
                <input type="text" value={this.state.description} name="description" onChange={this.handleChangeDescription} required/>

                <label for="price">Price</label>
                <input type="number" value={this.state.price} name="price" onChange={this.handleChangePrice} required />

                <label for="startHour">Hora de começo</label>
                <input type="text" value={this.state.startHour} name="startHour" onChange={this.handleChangeStartHour} required/>
                
                <label for="endingHour">Hora de fim</label>
                <input type="text" value={this.state.endingHour} name="endingHour" onChange={this.handleChangeEndingHour}required/>

                <label for="date">Data</label>
                <input type="date" value={this.state.date} name="date" onChange={this.handleChangeDate} required/>

                <button type="button" class="btn" onClick={this.handleSubmit}>Submit</button>
                <button type="button" class="btn cancel" onClick="closeForm(4)">Cancel</button>
            </div>
        </div>

      </div>
    </div>
    
  );
  }
}